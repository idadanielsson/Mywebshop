<?php
require_once 'view/product-api.php';
require_once 'partials/config.php';

$productApi = new ProductApi();

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

?>