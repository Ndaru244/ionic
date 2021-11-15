<?php

if (isset($_SERVER["HTTP_ORIGIN"])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$respone = array();

require_once __DIR__ .'/config.php';

$db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

$result = mysqli_query($db, "SELECT * FROM memory") or die(mysqli_connect_error());

if (mysqli_num_rows($result) > 0) {
    $respone["memory"] = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $mem = array();
        $mem["id_memory"]     = $row["id_memory"];
        $mem["title_memory"]  = $row["title_memory"];
        $mem["type_memory"]   = $row["type_memory"];
        $mem["lat_location"]  = $row["lat_location"];
        $mem["lng_location"]  = $row["lng_location"];
        $mem["image_memory"]  = $row["image_memory"];
        array_push($respone['memory'], $mem);
    }

    $respone["success"] = 1;
    echo json_encode($respone);
} else {
    $respone["memory"] = array();
    $respone["success"] = 0;
    $respone["message"] = "Tidak Ada Data Yang Ditemukan";
    echo json_encode($respone);
}

mysqli_free_result($result);

?>