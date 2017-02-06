<?
header( 'Content-Type: application/json' );

require_once("DB.php");
$db = new DB();

$id = $_GET['id'];
$key = $_GET['key'];
$value = $_GET['value'];

$sql = "UPDATE `users` SET `$key`='$value' WHERE `id` = $id;";
mysql_query($sql);

echo '{"success":true}';
?>