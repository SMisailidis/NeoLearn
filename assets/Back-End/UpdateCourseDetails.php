<?php
include 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];
$newTitle = $_POST["new_title"];
$newDescription = $_POST["new_description"];
$newCategory = $_POST["new_category"];
$newObjectives = $_POST["new_objectives"]; 
$newPrerequisites = $_POST["new_prerequisites"]; 

$query = "UPDATE Course SET Title = '$newTitle', Description = '$newDescription', 
          Category = '$newCategory', Objectives = '$newObjectives', Prerequisities = '$newPrerequisites'
          WHERE ID = '$courseId'";

$queryResults = executeDMLQuery($query, $connection);

echo($queryResults);
?>
