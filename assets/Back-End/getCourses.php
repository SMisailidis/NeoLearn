<?php
include 'DbConnection.php';

$connection = dbConnect();

$teacherid=$_POST["teacher_id"];

$query="SELECT * FROM Course WHERE Teacher_ID='$teacherid'";

$queryResults=executeDMLQuery($query,$connection);

echo($queryResults);
?>