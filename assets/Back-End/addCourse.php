<?php

    include 'DbConnection.php';

    $teacherID = $_POST["Teacher_ID"];
    $ID = $_POST["ID"];
    $title = $_POST["Title"];
    $category = $_POST["Category"];
    $description = $_POST["Description"];
    $objectives = $_POST["Objectives"];
    $prerequisities = $_POST["Prerequisities"];
    
    $connection = dbConnect();

    $query = "INSERT INTO course (Teacher_ID, ID, Title, Category, Description, Objectives, Prerequisities) VALUE ('$teacherID', '$ID', '$title', '$category', '$description', '$objectives', '$prerequisities')";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult)

?>