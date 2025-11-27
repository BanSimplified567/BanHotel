<?php

// src/Controllers/HomeController.php
namespace Bannie\Backend\Controllers;

class HomeController {
    public function index() {
        header('Content-Type: application/json');
        echo json_encode(["message" => "Welcome to BanHotel API"]);
    }
}
