<?php
include 'DbConnection.php';

$connection = dbConnect();

$studentID=$_POST["student_id"];

$query="SELECT Course.Title
        FROM EnrolledIn
        INNER JOIN Course ON EnrolledIn.Course_ID = Course.ID
        WHERE EnrolledIn.Stud_ID = :studentID";

$queryResults=executeDMLQuery($query,$connection);

echo($queryResults);
?>