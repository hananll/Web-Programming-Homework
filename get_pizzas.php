<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include 'config.php';

try {
    $sql = "SELECT p.pname, p.vegetarian, c.cname, c.price 
            FROM pizza p 
            JOIN category c ON p.categoryname = c.cname";
            
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $pizzas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($pizzas);
} catch(PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>