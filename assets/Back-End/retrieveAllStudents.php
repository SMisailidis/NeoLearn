<?php
    include 'DbConnection.php';

    $connection = dbConnect();

    $selectQuery = "SELECT First_Name, Last_Name, ID, Phone_Number, Email FROM student";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
