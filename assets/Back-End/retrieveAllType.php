<?php
    include 'DbConnection.php';

    $table = $_POST['table'];

    $connection = dbConnect();

    $selectQuery = "SELECT * FROM $table";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
