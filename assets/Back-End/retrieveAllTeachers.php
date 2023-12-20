<?php
    include 'DbConnection.php';

    $connection = dbConnect();

    $selectQuery = "SELECT * FROM teacher";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
