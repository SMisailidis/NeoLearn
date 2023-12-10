<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseID = $_POST["course_id"];

$query = "SELECT Curriculum.Title, Curriculum.ID FROM Curriculum WHERE Course_ID = '$courseID'";

$queryResult = executeDMLQuery($query, $connection);

echo($queryResult);
?>