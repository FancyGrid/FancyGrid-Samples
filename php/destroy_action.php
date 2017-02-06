<?
header( 'Content-Type: application/json' );

require_once("DB.php");
$db = new DB();

$id = $_GET['id'];

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);
$path_match = $pieces = explode("/", $path);
	
$sql = "DELETE FROM `users` WHERE `id` = " . $id;
	
mysql_query($sql);

echo '{"success":true}';
?>