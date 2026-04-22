<?php
header("Content-Type: application/json");
include 'config.php';

$stmt = $conn->prepare("SELECT * FROM pizzas");
$stmt->execute();
$pizzas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($pizzas);
?>