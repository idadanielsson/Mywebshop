<?php

// SQL-queries to communicate with database. 

class DB {
	private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    
    // Retrieves all products from the database.

    public function getProducts() {
            $stmt = $this->pdo->query('SELECT 
            p.id,
            p.name,
            p.description,
            b.name as brand_name, 
            (SELECT MAX(ps.price) 
                FROM product_sizes ps 
                WHERE ps.fk_ProductId = p.id) as price,  
            (SELECT vi.img_url
                FROM variant_images vi 
                INNER JOIN product_sizes_colors psc ON vi.fk_product_sizes_colors_id = psc.id
                WHERE psc.fk_productId = p.id AND vi.is_primary = 1
                LIMIT 1) as url 
        FROM 
            products p
        LEFT JOIN 
            brands b ON p.fk_brandId = b.id
        GROUP BY 
            p.id
        ORDER BY 
            p.id;');
        return $stmt->fetchAll();
    }

    // Retrieves a product by its ID.

    public function getProductById($productId) {
        $stmt = $this->pdo->prepare('SELECT 
        p.*,
        s.id as size_id, s.size as size_name, 
        c.id as color_id, c.name as color_name, 
        psc.price as product_sizes_colors_price,
        vi.img_url as variant_image_url,
        vi.is_primary as variant_image_primary
        FROM products p
        LEFT JOIN product_sizes_colors psc ON p.id = psc.fk_productId
        LEFT JOIN sizes s ON psc.fk_sizeId = s.id
        LEFT JOIN colors c ON psc.fk_colorId = c.id
        LEFT JOIN variant_images vi ON psc.id = vi.fk_product_sizes_colors_id
        WHERE p.id = :productId');
        $stmt->execute(['productId' => $productId]);
        $rows = $stmt->fetchAll();

      
        $product = null;
        $sizes = [];
        $colors = [];

        foreach ($rows as $row) {
            if (!$product) {
                $product = [
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'description' => $row['description'],
                    'short_description' => $row['short_description'],
                    'fk_categoryId' => $row['fk_categoryId'],
                    'fk_subcategoryId' => $row['fk_subcategoryId'],
                    'fk_brandId' => $row['fk_brandId'],
                    'date_created' => $row['date_created'],
                    'sizes' => &$sizes,
                    'colors' => &$colors,
                  
                ];
            }
    
       // Handle sizes and prizes
       $sizeId = $row['size_id']; 
       if ($sizeId && !isset($sizes[$sizeId])) {
           $sizes[$sizeId] = [
               'id' => $sizeId,
               'name' => $row['size_name'],
               'colors' => [],
           ];
       }

       // Handle colors and associate images with colors
       $colorId = $row['color_id'];
       if ($colorId) {
           if (!isset($sizes[$sizeId]['colors'][$colorId])) {
               $sizes[$sizeId]['colors'][$colorId] = [
                   'id' => $colorId,
                   'name' => $row['color_name'],
                   'images' => [], 
                   'price' => $row['product_sizes_colors_price'], 
               ];
           }

           // Adding images for specific variants
           if ($row['variant_image_url']) {
               $sizes[$sizeId]['colors'][$colorId]['images'][] = $row['variant_image_url'];
           }
       }
   }

   foreach ($sizes as $sizeId => &$size) {
       $size['colors'] = array_values($size['colors']);
   }
   $product['sizes'] = array_values($sizes);

   return $product;
}

    public function getProductImagesById($productId) {
        $stmt = $this->pdo->prepare('SELECT img_url FROM variant_images WHERE fk_product_sizes_colors_id = :productId');
        $stmt->execute(['productId' => $productId]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
    }
    
    public function getProductNews() {
        $stmt = $this->pdo->query('SELECT 
        p.id,
        p.name,
        p.description,
        b.name as brand_name, 
        (SELECT MAX(ps.price) 
            FROM product_sizes ps 
            WHERE ps.fk_ProductId = p.id) as price,  
        (SELECT vi.img_url
            FROM variant_images vi 
            INNER JOIN product_sizes_colors psc ON vi.fk_product_sizes_colors_id = psc.id
            WHERE psc.fk_productId = p.id AND vi.is_primary = 1
            LIMIT 1) as url 
    FROM 
        products p
    LEFT JOIN 
        brands b ON p.fk_brandId = b.id
    GROUP BY 
        p.id
    ORDER BY 
        p.id;');
        return $stmt->fetchAll();

    }

    

    public function getProductsByCategoryId($categoryId) {
        $stmt = $this->pdo->prepare('SELECT 
        p.id,
        p.name,
        p.description,
        b.name as brand_name, 
        (SELECT MAX(ps.price) 
            FROM product_sizes ps 
            WHERE ps.fk_productId = p.id) as price,  
        (SELECT vi.img_url
            FROM variant_images vi 
            INNER JOIN product_sizes_colors psc ON vi.fk_product_sizes_colors_id = psc.id
            WHERE psc.fk_productId = p.id AND vi.is_primary = 1
            LIMIT 1) as url 
        FROM products p
        LEFT JOIN brands b ON p.fk_brandId = b.id
        WHERE p.fk_categoryId = ?
        GROUP BY p.id');
        $stmt->execute([$categoryId]);
        return $stmt->fetchAll();
    }

    public function getProductsBySubcategories($subcategoryId) {
        $stmt = $this->pdo->prepare('SELECT 
        p.id,
        p.name,
        p.description,
        b.name as brand_name, 
        (SELECT MAX(ps.price) 
            FROM product_sizes ps 
            WHERE ps.fk_productId = p.id) as price,  
        (SELECT vi.img_url
            FROM variant_images vi 
            INNER JOIN product_sizes_colors psc ON vi.fk_product_sizes_colors_id = psc.id
            WHERE psc.fk_productId = p.id AND vi.is_primary = 1
            LIMIT 1) as url 
        FROM products p
        LEFT JOIN brands b ON p.fk_brandId = b.id
        WHERE p.fk_subcategoryId = ? 
        GROUP BY p.id');
        $stmt->execute([$subcategoryId]);
        return $stmt->fetchAll();

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

    public function getColors() {
        $query = 'SELECT * FROM colors';
        $statement = $this->pdo->query($query); 
    
        return $statement->fetchAll(); 
    }

    public function getColorById($colorId) {
        $query = 'SELECT * FROM colors WHERE id = :color_id';
        $statement = $this->pdo->prepare($query);
        $statement->execute(['color_id' => $colorId]);

        return $statement->fetch();
    }

    public function getProductsByColor($colorId) {
        $stmt = $this->pdo->prepare('SELECT DISTINCT
        p.id, 
        p.name,
        b.name as brand_name, 
        ps.price,
        vi.img_url as url 
    FROM products AS p
    INNER JOIN product_colors AS pc ON p.id = pc.fk_productId 
    INNER JOIN product_sizes_colors AS psc ON p.id = psc.fk_productId 
    LEFT JOIN brands AS b ON p.fk_brandId = b.id
    LEFT JOIN product_sizes AS ps ON p.id = ps.fk_productId
    LEFT JOIN variant_images AS vi ON vi.fk_product_sizes_colors_id = psc.id
    WHERE psc.fk_colorId = :colorId AND vi.is_primary = 1');
    
    $stmt->execute(['colorId' => $colorId]);
    $rows = $stmt->fetchAll();


    return $rows; 
    }

    public function searchProducts($searchTerm) {
    $searchTerm = "%$searchTerm%";
    $stmt = $this->pdo->prepare('SELECT p.*, 
    b.name as brand_name, 
    ps.price, 
    (SELECT vi.img_url
        FROM variant_images vi 
        INNER JOIN product_sizes_colors psc ON vi.fk_product_sizes_colors_id = psc.id
        WHERE psc.fk_productId = p.id AND vi.is_primary = 1
        LIMIT 1) as url 
    FROM products p
    LEFT JOIN brands b ON p.fk_brandId = b.id
    LEFT JOIN product_sizes ps ON p.id = ps.fk_productId
    WHERE p.name LIKE ? OR p.description LIKE ?
    GROUP BY p.id, b.name, ps.price');

    $stmt->execute([$searchTerm, $searchTerm]);
    return $stmt->fetchAll();
}
    
}

?>