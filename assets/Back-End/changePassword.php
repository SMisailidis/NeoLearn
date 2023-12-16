<?php

    include 'DbConnection.php';

    $ID = $_POST["id"];
    $password = $_POST["password"];
    $table = $_POST["table"];
    $isPassConf = $_POST["isPassConf"];


    $connection = dbConnect();

    if($isPassConf === "false") {
        $query = "SELECT COUNT(*) as count FROM $table WHERE ID = '$ID' AND password = '$password'";
    }
    else {
        $query = "UPDATE $table SET Password = '$password' WHERE ID = '$ID'";
    }

    $queryResult = executeDMLQuery($query, $connection);

    echo ($queryResult);
?>