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
}
?>