<?php
include 'DbConnection.php';

$connection = dbConnect();

$studentID = $_POST["student_id"];
$courseTitle = $_POST["course_title"];

// Step 1: Get Course.ID based on Course.Title
$queryCourseID = "SELECT ID FROM Course WHERE Title = '$courseTitle'";
$courseIDResult = executeDMLQuery($queryCourseID, $connection);

if ($courseIDResult && count($courseIDResult) > 0) {
    $courseID = $courseIDResult[0]["ID"];

    // Step 2: Get Curriculum.Title based on Course.ID
    $query = "SELECT Curriculum.Title AS CurriculumTitle
              FROM EnrolledIn
              INNER JOIN Course ON EnrolledIn.Course_ID = Course.ID
              LEFT JOIN Curriculum ON Course.ID = Curriculum.Course_ID
              WHERE EnrolledIn.Stud_ID = '$studentID'
              AND Course.ID = '$courseID'";

    $queryResults = executeDMLQuery($query, $connection);

    echo json_encode($queryResults);
} else {
    // Handle the case where Course.ID is not found for the given Course.Title
    echo json_encode(array("error" => "Course ID not found for the given title."));
}
?>
