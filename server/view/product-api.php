<?php

// Methods to send JSON data and return product info

class ProductApi {

    public function outputProducts($products): void {
        if (is_array($products)) {
            $json = [
                'result' => $products
            ];
        } 
        header("Content-Type: application/json");

        
        echo json_encode($json);
    }

    public function outputProductById($product): void {
        if ($product !== null) {
            $json = [
                'product' => $product
            ];
        } 

        header("Content-Type: application/json");
        echo json_encode($json);
    }


}
?>