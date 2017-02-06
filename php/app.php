<?
header( 'Content-Type: application/json' );

require_once("DB.php");
$db = new DB();
  
$data = '[ ';

$method = $_SERVER["REQUEST_METHOD"];
$path = $_SERVER["PATH_INFO"];

if( $method === 'GET' ){
  $page = 0;
  $limit = 10;
  
  if( isset($_GET['page']) ){
	$page = $_GET['page'];
  }
  
  if( isset($_GET['limit']) ){
	$limit = $_GET['limit'];
  }
  
  $start = $page * $limit;
  
  if( isset($_GET['start']) ){
	$start = $_GET['start'];
  }
    
  $sort = '';
  $dir = '';
  
  if( isset($_GET['sort']) && isset($_GET['dir']) ){
    $sort = $_GET['sort'];
    $dir = $_GET['dir'];
  }

  $sql_query = "SELECT * FROM `users` "; 
  
  if( $sort != '' ){
    $sql_query .= " ORDER BY `".$sort."` $dir ";
  }
  
  $sql_query .= " LIMIT $start, $limit;";
  $sql = $sql_query;
  
  $result_db_request = mysql_query($sql_query);
  for($dataArr=array();$row=mysql_fetch_assoc($result_db_request);$dataArr[]=$row){}
  
  for($i = 0, $iL = count($dataArr); $i < $iL; $i++){
    $row = $dataArr[$i];
    
    $data .= '{"id":' . $row['id'] . ',"company":"'  . $row[ 'company' ] . '","name":"' . $row[ 'name' ] . '","surname":"' . $row[ 'surname' ] . '","age":' . $row[ 'age' ] . ',"position":"' . $row[ 'position' ] . '"},';
  }
  
  $sql_query = "SELECT * FROM `users`;";
  $result_db_request = mysql_query($sql_query);
  $totalCount = mysql_num_rows($result_db_request);
  
  $data = substr($data, 0, -1);
  
  $data .= ']';
  
  $responce .= '{"success":true,';
  $responce .= "\"data\": $data,";
  //$responce .= "\"sql\": \"$sql\",";
  $responce .= "\"start\": \"$start\",";
  $responce .= "\"totalCount\": $totalCount";
  $responce .= '}';

  echo $responce;
}
else if($method === 'POST'){
  $request_body = parse_str(file_get_contents('php://input'), $data);
    
  $sql = "INSERT INTO `users` () VALUES ();";

  mysql_query($sql);

  $result = mysql_query('SELECT * FROM `users` ORDER BY ID DESC LIMIT 1');
  $row = mysql_fetch_assoc($result);
	
  echo '{"success":true,"message":"Created new User","data":{"id":'.$row['id'].'}}';
  
}
else if($method === 'PUT'){
  $request_body = parse_str(file_get_contents('php://input'), $data);
  
  $id = $data['id'];
  $key = $data['key'];
  $value = $data['value'];
    
  $sql = "UPDATE `users` SET `$key` = '$value' WHERE `id` = $id";
  mysql_query($sql);
  
  $responce = '';
  
  $responce .= '{"success":true,';
  //$responce .= "\"sql\": \"$sql\",";
  $responce .= "\"message\": \"Updated User $id\""; 
  $responce .= '}';
  
  echo $responce;
}
else if($method === 'DELETE'){
  $request_body = parse_str(file_get_contents('php://input'), $data);
   
  $id = $data['id'];
    
  $sql = "DELETE FROM `users` WHERE `id` =$id;";
  
  mysql_query($sql);
  
  $responce .= '{"success":true,';
  $responce .= "\"sql\": \"$sql\",";
  $responce .= "\"message\": \"Destroyed User $id\""; 
  $responce .= '}';
  
  echo $responce;
}
?>