<?php
    include 'DbConnection.php';

    $ID = $_POST['ID'];
    $password = $_POST['password'];
    $table = $_POST['table'];

    $connection = dbConnect();

    $selectQuery = "SELECT * FROM $table WHERE ID = '$ID' AND password = '$password'";

    $queryResult = executeDMLQuery($selectQuery, $connection);


    echo ($queryResult);

?>
