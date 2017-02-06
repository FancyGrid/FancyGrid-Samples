<?
header( 'Content-Type: application/json' );

  require_once("DB.php");
  $db = new DB();
  
  $page = $_GET['page'];
  
  $sort = '';
  $dir = '';
  $filter = '';
  
  if( isset($_GET['sort']) && isset($_GET['dir']) ){
    $sort = $_GET['sort'];
    $dir = $_GET['dir'];
  }
  
  if( isset($_GET['filter']) ){
    $filter .= ' WHERE ';
    $_filter = urldecode($_GET['filter']);	
    $_filter = json_decode($_filter);
    
	for($i=0;$i<count($_filter);$i++){
	    $filterItem = $_filter[$i];
		$operator = getOperator($filterItem->operator);
		$value = $filterItem->value;
		$property = $filterItem->property;
		
		if($operator === 'LIKE'){
			$filter .= "`" . $property . "` " . $operator . " '%" . $value . "%'";
		}
		else{
			$filter .= "`" . $property . "` " . $operator . " '" . $value . "'";
		}
		
		if($i !== count($_filter) - 1 ){
			$filter .= 'AND';
		}
	}
	
	//echo $filter;
  }
  
  function getOperator($operator){
    switch($operator){
		case 'lt':
			return '<';
		break;
		case 'gt':
			return '>';
		break;
		case '<=':
			return 'lteq';
		break;
		case '>=':
			return 'gteq';
		break;
		case 'eq':
		case 'stricteq':
			return '=';
		break;
		break;
		case 'noteq':
		case 'notstricteq':
			return '!=';
		break;
		case 'like':
			return 'LIKE';
		break;
	}
  }
  
  $data = '[ ';
  
  $start = $page * $limit;
  
  if(isset($_GET['start'])){
    $start = $_GET['start'];
  }
  
  $sql_query = "SELECT * FROM `clients`";
  
  if( $filter != '' ){
	$sql_query .= $filter . ' ';
  }
  
  if( $sort != '' ){    
    $sql_query .= " ORDER BY `$sort` $dir ";
  }
  
  $sql = $sql_query;
  
  $result_db_request = mysql_query($sql_query);
  for($dataArr=array();$row=mysql_fetch_assoc($result_db_request);$dataArr[]=$row){}
  
  for($i = 0, $iL = count($dataArr); $i < $iL; $i++){
    $data .= '{ ';
    $row = $dataArr[$i];
    
    $data .=  '"id": '. $row[ 'id' ] . ',"knownledge": "'. $row[ 'knownledge' ] . '","name": "'. $row[ 'name' ] . '","surname": "' . $row[ 'surname' ] . '","position": "' . $row[ 'position' ] . '","company": "' . $row[ 'company' ] . '","age": ' . $row[ 'age' ];    

    $data .= '},';
  }
  
  $data = substr($data, 0, -1);
  
  $data .= ']';
  
  $responce .= '{"success":true,';
  $responce .= "\"data\": $data,";
  $responce .= "\"sql\": \"$sql\"";
  $responce .= '}';

echo $responce;
?>