<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];

$query = "SELECT course.Title, course.Description FROM Course WHERE ID = '$courseId'";

$queryResults = executeDMLQuery($query, $connection);

echo ($queryResults);
?>
