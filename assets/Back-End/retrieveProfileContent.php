<?php

    include 'DbConnection.php';

    $table = $_POST['table'];
    $ID = $_GET['ID'];

    $connection = dbConnect();

    $query = "SELECT * FROM $table WHERE ID = '$ID'";

    $queryResult = executeDMLQuery($query, $connection);

    echo ($queryResult);

?>