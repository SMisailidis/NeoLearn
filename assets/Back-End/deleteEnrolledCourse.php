<?php
include 'DbConnection.php';

$connection = dbConnect();


$EnrolledCoursesID = $_POST['EnrolledCourses_ids'];
$ids = "'" . implode("', '", $EnrolledCoursesID) . "'";

$query = "DELETE FROM enrolledin WHERE Course_ID IN ($ids)";
$result  = executeDMLQuery($query, $connection);
echo($result);