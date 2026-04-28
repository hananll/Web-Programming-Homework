<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->pname) && !empty($data->categoryname)) {
    try {
        // Yeni tablo sütun isimlerine göre INSERT
        $sql = "INSERT INTO pizza (pname, categoryname, vegetarian) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$data->pname, $data->categoryname, $data->vegetarian]);
        echo json_encode(["message" => "Pizza başarıyla eklendi!"]);
    } catch(PDOException $e) {
        echo json_encode(["error" => "Ekleme hatası: " . $e->getMessage()]);
    }
}
?>