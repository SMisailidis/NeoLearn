<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseID = $_POST['course_ID'];

$query = "SELECT Title, ID from curriculum where Course_ID = '$courseID'";

$queryResults = executeDMLQuery($query, $connection);

echo ($queryResults);
?>
