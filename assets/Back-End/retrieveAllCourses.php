<?php
    include 'DbConnection.php';

    $connection = dbConnect();

    $selectQuery = "SELECT course.*, teacher.First_Name, teacher.Last_Name FROM course JOIN teacher ON course.Teacher_ID = teacher.ID";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
