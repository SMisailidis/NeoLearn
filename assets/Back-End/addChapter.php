<?php
require 'DbConnection.php';

$courseID = $_POST["Course_ID"];
$ID = $_POST["ID"];
$title = $_POST["Title"];
$description = $_POST["Description"];
$videoLink = $_POST["Video_Link"];
$pdfLink = $_POST["Pdf_Link"];

$connection = dbConnect();

$query = "INSERT INTO Curriculum (Video_Link, Title, Course_ID, ID, Description, Pdf_Link) VALUES ('$videoLink', '$title', '$courseID', '$ID', '$description', '$pdfLink')";

$queryResult = executeDMLQuery($query, $connection);

echo($queryResult);
?>
