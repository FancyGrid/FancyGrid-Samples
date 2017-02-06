<?
header( 'Content-Type: application/json' );

  require_once("DB.php");
  $db = new DB();
  
  $page = $_GET['page'];
    
  if(isset($_GET['limit'])){
    $limit = $_GET['limit'];
  }
  else{
    $limit = 10;
  }
  
  $totalCount = 0;
  
  $sort = '';
  $dir = '';
  
  if( isset($_GET['sort']) && isset($_GET['dir']) ){
    $sort = $_GET['sort'];
    $dir = $_GET['dir'];
  }
  
  $data = '[ ';
  
  $start = $page * $limit;
  
  if(isset($_GET['start'])){
    $start = $_GET['start'];
  }
  
  $sql_query = "SELECT * FROM `users`";
  
  if( $sort != '' ){    
    $sql_query .= " ORDER BY `$sort` $dir ";
  }
  
  $sql_query .= " LIMIT $start, $limit;";
  $sql = $sql_query;
  
  $result_db_request = mysql_query($sql_query);
  for($dataArr=array();$row=mysql_fetch_assoc($result_db_request);$dataArr[]=$row){}
  
  for($i = 0, $iL = count($dataArr); $i < $iL; $i++){
    $data .= '{ ';
    $row = $dataArr[$i];
    
    $data .=  '"id": '. $row[ 'id' ] . ',"name": "'. $row[ 'name' ] . '","surname": "' . $row[ 'surname' ] . '","position": "' . $row[ 'position' ] . '","company": "' . $row[ 'company' ] . '","age": ' . $row[ 'age' ];    

    $data .= '},';
  }
  
  $data = substr($data, 0, -1);
  
  $data .= ']';
  
  $sql_query = "SELECT * FROM `users`;";
  $result_db_request = mysql_query($sql_query);
  $totalCount = mysql_num_rows($result_db_request);
  
  $responce .= '{"success":true,';
  $responce .= "\"data\": $data,";
  $responce .= "\"sql\": \"$sql\",";
  $responce .= "\"totalCount\": $totalCount";
  $responce .= '}';

echo $responce;
?>