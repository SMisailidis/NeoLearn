<?php

    include 'DbConnection.php';

    $teacherID = $_POST["Teacher_ID"];
    $ID = $_POST["ID"];
    $title = $_POST["Title"];
    $description = $_POST["Description"];
    $objectives = $_POST["Objectives"];
    $prerequisities = $_POST["Prerequisities"];
    
    $connection = dbConnect();

    $query = "INSERT INTO course (Teacher_ID, ID, Title, Description, Objectives, Prerequisities) VALUE ('$teacherID', '$ID', '$title', '$description', '$objectives', '$prerequisities')";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult)

?>