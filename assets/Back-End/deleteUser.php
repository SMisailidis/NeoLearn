<?php 

include 'DbConnection.php';

$ID = $_POST["userID"];
$table = $_POST["Type"];

$connection = dbConnect();

$query = "DELETE FROM $table WHERE ID = '$ID'";

$queryResult = executeDMLQuery($query, $connection);

echo($queryResult)


?>