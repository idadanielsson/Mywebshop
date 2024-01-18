<?php

class Controller {
    private $db;
  

    public function __construct($db) {
        $this->db = $db;
    }

    public function get_products() {
        $products =  $this->db->getProducts();
        return $products;
    }
}