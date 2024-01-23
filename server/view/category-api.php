<?php
class categoryApi {

    public function outputCategories($categories): void {
        if (is_array($categories)) {
            $json = [
                'result' => $categories
            ];
        } 
        header("Content-Type: application/json");

        
        echo json_encode($json);
    }

    public function outputCategoryById($category): void {
        if ($category !== null) {
            $json = [
                'category' => $category
            ];
        } 

        header("Content-Type: application/json");
        echo json_encode($json);
    }

    public function outputSubCategories($subcategories): void {
        if (is_array($subcategories)) {
            $json = [
                'result' => $subcategories
            ];
        } 
        header("Content-Type: application/json");

        
        echo json_encode($json);
    }

    public function outputSubCategoryById($subcategory): void {
        if ($subcategory !== null) {
            $json = [
                'category' => $subcategory
            ];
        } 

        header("Content-Type: application/json");
        echo json_encode($json);
    }
}
?>