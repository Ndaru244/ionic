<?php

if (isset($_SERVER["HTTP_ORIGIN"])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$respone = array();

require_once __DIR__ .'/dbconfig.php';

$db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

$result = mysqli_query($db, "SELECT * FROM mahasiswa") or die(mysqli_connect_error());

if (mysqli_num_rows($result) > 0) {
    $respone["mahasiswa"] = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $mhs = array();
        $mhs["nim"]     = $row["nim"];
        $mhs["nama"]    = $row["nama"];
        $mhs["prodi"]   = $row["prodi"];
        $mhs["foto"]    = $row["foto"];
        array_push($respone['mahasiswa'], $mhs);
    }

    $respone["success"] = 1;
    echo json_encode($respone);
} else {
    $respone["success"] = 0;
    $respone["message"] = "Tidak Ada Data Yang Ditemukan";
    echo json_encode($respone);
}

mysqli_free_result($result);

?>