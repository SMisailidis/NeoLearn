<?php
require 'DbConnection.php';

$connection = dbConnect();

$courseId = $_POST["course_id"];
$newTitle = $_POST["new_title"];
$newDescription = $_POST["new_description"];
$curID = $_POST["curID"];
$pdfLink = $_POST["Pdf_Link"];

$query = "SELECT Pdf_Link FROM curriculum WHERE Course_ID = '$courseId' AND ID = '$curID'";
$result = mysqli_query($connection, $query);
$row = mysqli_fetch_assoc($result);
$existingPdfLink = $row['Pdf_Link'];

$allPdfLinks = array_filter(array_merge(explode(',', $existingPdfLink), explode(',', $pdfLink)));

$allPdfLinks = array_unique($allPdfLinks);

$newPdfLink = implode(',', $allPdfLinks);

$pdfLinkClause = !empty($newPdfLink) ? ", Pdf_Link = '$newPdfLink'" : "";

$query = "UPDATE curriculum SET Title = '$newTitle', Description = '$newDescription' $pdfLinkClause WHERE Course_ID = '$courseId' AND ID = '$curID'";
$queryResults = executeDMLQuery($query, $connection);

echo $queryResults;
?>