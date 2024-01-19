<?php
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
}
?>