<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];

$query = "SELECT course.Title, course.Description, course.Objectives, course.Prerequisities, course.Category FROM Course WHERE ID = '$courseId'";

$queryResults = executeDMLQuery($query, $connection);

echo ($queryResults);
?>
