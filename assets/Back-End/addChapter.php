<?php
require 'DbConnection.php';

$courseID = $_POST["Course_ID"];
$ID = $_POST["chapterID"];
$title = $_POST["chapterTitle"];
$description = $_POST["chapterDesc"];
$videoLink = $_POST["Video_Link"];
$pdfLink = $_POST["Pdf_Link"];

$connection = dbConnect();

$query = "INSERT INTO Curriculum (Video_Link, Title, Course_ID, ID, Description, Pdf_Link) VALUES ('$videoLink', '$title', '$courseID', '$ID', '$description', '$pdfLink')";

$queryResult = executeDMLQuery($query, $connection);

echo($queryResult);
?>
