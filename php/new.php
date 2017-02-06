<?
header('Content-Type: application/json');

require_once("DB.php");
$db = new DB();

$sql = "INSERT INTO `users` () VALUES ();";

mysql_query($sql);

$result = mysql_query('SELECT * FROM `users` ORDER BY ID DESC LIMIT 1');
$row = mysql_fetch_assoc($result);
	
echo '{"success":true,"message":"Created new User","data":{"id":'.$row['id'].'}}';
?>