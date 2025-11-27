<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Database\DatabaseConnection;

try {
    // Get database instance
    $db = DatabaseConnection::getInstance();

    // Example: Fetch all users
    $users = $db->fetchAll("SELECT * FROM users");

    // Example: Insert a new user
    $db->query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        ['John Doe', 'john@example.com']
    );

    // Get last insert ID
    $lastId = $db->lastInsertId();

    echo "Database connection successful! Last insert ID: " . $lastId;

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
