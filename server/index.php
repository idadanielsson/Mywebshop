<?php
require_once 'view/product-api.php';
require_once 'view/category-api.php';
require_once 'view/color-api.php';
require_once 'partials/config.php';

$productApi = new ProductApi();
$categoryApi = new categoryApi();
$colorApi = new colorApi();

if (isset($_GET['action'])) {
    $chosenAction = filter_var($_GET['action'], FILTER_SANITIZE_SPECIAL_CHARS);

    if ($chosenAction == 'products') {
        $products = $database->getProducts(); 
        $productApi->outputProducts($products);
    } 

    elseif ($chosenAction == 'products-id') {
        if (isset($_GET['id'])) {
            $productId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $product = $database->getProductById($productId);
            $imageUrls = $database->getProductImagesById($productId);
            $product['urls'] = $imageUrls;
            $productApi->outputProductById($product);
        }
    }

    elseif ($chosenAction == 'products-by-category') {
        if (isset($_GET['id'])) { 
            $categoryId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $products = $database->getProductsByCategoryId($categoryId);
            $productApi->outputProducts($products);
        }
    }

    elseif ($chosenAction == 'categories') {
        $categories = $database->getCategories(); 
        $categoryApi->outputCategories($categories);
    }

    elseif ($chosenAction == 'categories-id') {
        if (isset($_GET['id'])) {
            $categoryId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $category = $database->getCategoryById($categoryId);
            $categoryApi->outputCategoryById($category);
        }
    }

    elseif ($chosenAction == 'subcategories') {
        $subcategories = $database->getSubCategories(); 
        $categoryApi->outputSubCategories($subcategories);
    }

    elseif ($chosenAction == 'subcategories-id') {
        if (isset($_GET['id'])) {
            $subcategoryId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $subcategory = $database->getSubCategoryById($subcategoryId);
            $categoryApi->outputSubCategoryById($subcategory);
        }
    }

    elseif ($chosenAction == 'products-by-subcategory') {
        if (isset($_GET['id'])) { 
            $subcategoryId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $products = $database->getProductsBySubcategories($subcategoryId);
            $productApi->outputProducts($products);
        }
    }

    elseif ($chosenAction == 'colors') {
        $colors = $database->getColors(); 
        $colorApi->outputColors($colors);
    }

    elseif ($chosenAction == 'colors-id') {
        if (isset($_GET['id'])) {
            $colorId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $color = $database->getColorById($colorId);
            $colorApi->outputColorById($color);
        }
    }


    elseif ($chosenAction == 'products-by-color') {
        if (isset($_GET['id'])) { 
            $colorId = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);
            $products = $database->getProductsByColor($colorId);
            $productApi->outputProducts($products);
        }
    }

}

?>