<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];

$query = "SELECT * FROM Course WHERE ID = '$courseId'";

$queryResults = executeDMLQuery($query, $connection);

echo($queryResults);
?>
