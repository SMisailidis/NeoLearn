<?php
    include 'DbConnection.php';

    $table = $_POST['table'];
    $ID = $_POST['ID'];

    $connection = dbConnect();

    $selectQuery = "SELECT * FROM $table WHERE ID = '$ID'";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>