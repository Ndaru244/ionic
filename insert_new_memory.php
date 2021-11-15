<?php

if (isset($_SERVER["HTTP_ORIGIN"])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$respone = array();

if (isset($_POST["id_memory"])
    && isset($_POST["title_memory"])
    && isset($_POST["type_memory"])
    && isset($_POST["lat_location"])
    && isset($_POST["lng_location"])
    && isset($_FILES["image_memory"])) {
    
    $id_memory    = $_POST["id_memory"];
    $title_memory = $_POST["title_memory"];
    $type_memory  = $_POST["type_memory"];
    $lat_location = $_POST["lat_location"];
    $lng_location = $_POST["lng_location"];
    $image_memory = $_FILES["image_memory"];

    require_once __DIR__ . "/config.php";

    $db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());
    
    $source = $image_memory["tmp_name"];
    $path = 'images/' . $image_memory['name'];
    move_uploaded_file($source, $path);

    $result = mysqli_query($db, "INSERT INTO memory(id_memory, title_memory, type_memory, lat_location, lng_location, image_memory) 
    VALUES ('$id_memory', '$title_memory', '$type_memory', '$lat_location', '$lng_location', '$path')") or die(mysqli_connect_error());
    
    if ($result) {
        $respone["success"] = 1;
        $respone["message"] = "Berhasil Insert Data";
    } else {
        $respone["success"] = 0;
        $respone["message"] = "Gagal Insert !";
    }
    echo json_encode($respone);
} else {
    $respone["success"] = 0;
    $respone["message"] = "Data Tidak Lengakap !";

    echo json_encode($respone);
}

?>