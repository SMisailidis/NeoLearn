<?php
include 'DbConnection.php';

$connection = dbConnect();

$studentID = $_POST['stud_ID'];

$query = "SELECT DISTINCT Course.Title, Course.ID
FROM EnrolledIn
INNER JOIN Course ON EnrolledIn.Course_ID = Course.ID
WHERE EnrolledIn.Stud_ID = '$studentID'";

$queryResults = executeDMLQuery($query, $connection);

echo ($queryResults);
?>
