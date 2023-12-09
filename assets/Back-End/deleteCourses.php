<?php
include 'DbConnection.php';

$connection = dbConnect();


 $courseID = $_POST['course_ids'];
$ids = "'" . implode("', '", $courseID) . "'";

$query = "DELETE FROM Course WHERE ID IN ($ids)";
$result  = executeDMLQuery($query, $connection);
echo($result);





