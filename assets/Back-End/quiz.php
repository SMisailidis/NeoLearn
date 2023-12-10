<?php 
    include 'DbConnection.php';

    $connection = dbConnect();

    $query = "SELECT * FROM quiz";

    $queryResult = executeDMLQuery($query,$connection);

    echo($queryResult);

?>