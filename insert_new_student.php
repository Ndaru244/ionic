<?php

if (isset($_SERVER["HTTP_ORIGIN"])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$respone = array();

if (isset($_POST["nim"])
    && isset($_POST["nama"])
    && isset($_POST["prodi"])
    && isset($_FILES["foto"])) {
    
    $nim    =  $_POST["nim"];
    $nama   =  $_POST["nama"];
    $prodi  =  $_POST["prodi"];
    $foto   =  $_FILES["foto"];

    require_once __DIR__ . "/dbconfig.php";

    $db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());
    
    $source = $foto["tmp_name"];
    $location = 'uploads/' . $foto['name'];
    move_uploaded_file($source, $location);

    $result = mysqli_query($db, "INSERT INTO mahasiswa(nim, nama, prodi, foto) VALUES ('$nim', '$nama', '$prodi', '$location')") or die(mysqli_connect_error());
    
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
