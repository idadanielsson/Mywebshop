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
        $stmt = $this->pdo->prepare('SELECT p.*, 
            b.name as brand_name, 
            ps.price
            FROM products p
            LEFT JOIN brands b ON p.fk_brandId = b.id
            LEFT JOIN product_sizes ps ON p.id = ps.fk_productId
            WHERE p.id = :productId
            GROUP BY p.id, b.name, p.img, p.description, p.short_description, ps.price;');
        $stmt->execute(['productId' => $productId]);
        return $stmt->fetch();
    }

    public function getProductImagesById($productId) {
        $stmt = $this->pdo->prepare('SELECT url FROM product_images WHERE fk_productId = :productId');
        $stmt->execute(['productId' => $productId]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
    }

    public function getCategories() {
        $query = 'SELECT * FROM categories';
        $statement = $this->pdo->query($query); 
    
        return $statement->fetchAll(); 
    }

    public function getCategoryById($categoryId) {
        $query = 'SELECT * FROM categories WHERE id = :category_id';
        $statement = $this->pdo->prepare($query);
        $statement->execute(['category_id' => $categoryId]);

        return $statement->fetch();
    }

    public function getSubCategories() {
        $query = 'SELECT * FROM subcategories';
        $statement = $this->pdo->query($query); 
    
        return $statement->fetchAll(); 
    }

    public function getSubCategoryById($subcategoryId) {
        $query = 'SELECT * FROM subcategories WHERE id = :subcategory_id';
        $statement = $this->pdo->prepare($query);
        $statement->execute(['subcategory_id' => $subcategoryId]);

        return $statement->fetch();
    }
}

?>