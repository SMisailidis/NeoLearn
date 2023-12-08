<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];
$newTitle = $_POST["new_title"];
$newDescription = $_POST["new_description"];

$query = "UPDATE curriculum SET Title = '$newTitle', Description = '$newDescription' WHERE Course_ID = '$courseId'";

$queryResults = executeDMLQuery($query, $connection);

echo($queryResults);
?>