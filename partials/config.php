<?php
	require_once 'classes/db.php';

	$host = 'localhost';
	$dbname = 'mywebshop';
	$user = 'mywebshop';
	$password = 'mywebshop123';

	$dsn = "mysql:host=$host;dbname=$dbname;charset=UTF8";
	$options = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES   => false,
	];
	
	try {
		$pdo = new PDO($dsn, $user, $password, $options);
		$database = new DB($pdo); 
	
	} catch (\PDOException $e) {
		throw new \PDOException($e->getMessage(), (int)$e->getCode());
	}
?>