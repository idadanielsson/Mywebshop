<?php
require_once 'view/product-api.php';
require_once 'partials/config.php'; // Inkluderar config som innehåller DB-kopplingen

$productApi = new ProductApi();

if (isset($_GET['action'])) {
    $chosenAction = filter_var($_GET['action'], FILTER_SANITIZE_SPECIAL_CHARS);

    if ($chosenAction == 'products') {
        // Använd databasobjektet från config.php
        $products = $database->getProducts(); 
        $productApi->outputProducts($products);
    }         
}
?>