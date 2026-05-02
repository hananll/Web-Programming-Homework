<?php
<<<<<<< HEAD
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

include 'config.php';

try {
    $stmt = $conn->prepare("SELECT * FROM pizzas");
    $stmt->execute();
    
    $pizzas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($pizzas);

} catch(PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
=======
header("Content-Type: application/json");
include 'config.php';

$stmt = $conn->prepare("SELECT * FROM pizzas");
$stmt->execute();
$pizzas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($pizzas);
>>>>>>> 7c451b73f36acddd079fcfe17295f92de09687d5
?>