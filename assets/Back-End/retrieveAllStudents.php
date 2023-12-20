<?php
    include 'DbConnection.php';

    $connection = dbConnect();

    $selectQuery = "SELECT * FROM student";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
