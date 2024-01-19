<?php

class DB {
	private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getProducts() {
        $stmt = $this->pdo->query("SELECT * FROM products");
        return $stmt->fetchAll();
    }

    public function getProductById($productId) {
        $query = 'SELECT * FROM products WHERE id = :products_id';
        $statement = $this->pdo->prepare($query);
        $statement->execute(['products_id' => $productId]);

        return $statement->fetch();
    }
}

?>