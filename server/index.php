<?php
require_once 'view/product-api.php';
require_once 'view/category-api.php';
require_once 'partials/config.php';

$productApi = new ProductApi();
$categoryApi = new categoryApi();

if (isset($_GET['action'])) {
    $chosenAction = filter_var($_GET['action'], FILTER_SANITIZE_SPECIAL_CHARS);

    if ($chosenAction == 'products') {
        $products = $database->getProducts(); 
        $productApi->outputProducts($products);
    }         
}

if ($chosenAction == 'products-id') {
    if (isset($_GET['id'])) {
            $productId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $product = $productModel->getProductById($productId);
            $productApi->outputProductById($product);
    }
}

if (isset($_GET['action'])) {
    $chosenAction = filter_var($_GET['action'], FILTER_SANITIZE_SPECIAL_CHARS);

    if ($chosenAction == 'categories') {
        $categories = $database->getCategories(); 
        $categoryApi->outputCategories($categories);
    } 
    
if ($chosenAction == 'categories-id') {
    if (isset($_GET['id'])) {
            $categoryId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $category = $database->getCategoryById($categoryId);
            $categoryApi->outputCategoryById($category);
    }
}
}

?>