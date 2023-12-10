<?php

    include 'DbConnection.php';

    $courseID = $_POST["Course_ID"];
    $ID = $_POST["ID"];
    $title = $_POST["Title"];
    $description = $_POST["Description"];
    
    $connection = dbConnect();

    $query = "INSERT INTO curriculum (Course_ID, ID, Title, Description) VALUE ('$courseID', '$ID', '$title', '$description')";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult)

?>