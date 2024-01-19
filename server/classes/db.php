<?php

class DB {
	private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getProducts() {
        $stmt = $this->pdo->query('SELECT p.*, 
        b.name as brand_name, 
        ps.price, 
        (SELECT pi.url 
         FROM product_images pi 
         WHERE pi.fk_productId = p.id AND pi.is_primary = 1
         LIMIT 1) as url 
        FROM products p
        LEFT JOIN brands b ON p.fk_brandId = b.id
        LEFT JOIN product_sizes ps ON p.id = ps.fk_productId
        GROUP BY p.id, b.name, ps.price 
        LIMIT 0, 25;');
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