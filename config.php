<?php
$host = "sql305.infinityfree.com";
$db_name = "if0_41751044_pizza";
$username = "if0_41751044";
$password = "MaLi1357AcC";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(json_encode(["error" => "Bağlantı hatası: " . $e->getMessage()]));
}
?>