<?php
    include 'DbConnection.php';

    $state = $_POST["state"];
    $course_ID = $_POST["Course_ID"];
    $stud_ID = $_POST["Stud_ID"];

    $connection = dbConnect();

    if($state === "false") {
        $query = "DELETE FROM enrolledin WHERE Course_ID = '$course_ID' AND Stud_ID = '$stud_ID'";
    }
    else {
        $query = "INSERT INTO `enrolledin` (Stud_ID, Course_ID) VALUES ('$stud_ID', '$course_ID')";
    }

    $queryResult = executeDMLQuery($query, $connection);

    echo ($queryResult);
?>
