<?
class DB {
	public $host = "host",
		$dbuser = "user",
		$dbpassword = "password",
		$dbname = "name";

	function __construct(){
		$this->connect();
		$this->mysql_select_db();
	}
	
	function connect(){
		mysql_connect($this->host,$this->dbuser,$this->dbpassword) || die('could not connect to db');		
	}
	
	function mysql_select_db(){
		mysql_select_db($this->dbname) || die('could not select db');
	}
}
?>