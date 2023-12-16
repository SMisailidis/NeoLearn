<?php
    include 'DbConnection.php';

    $ID = $_POST["ID"];

    $connection = dbConnect();

    $selectQuery = "SELECT DISTINCT student.First_Name, student.Last_Name, student.ID, student.Phone_Number, student.Email
    FROM student
    JOIN enrolledin ON student.ID = enrolledin.Stud_ID
    JOIN course ON enrolledin.Course_ID = course.ID
    JOIN teacher ON course.Teacher_ID = teacher.ID
    WHERE teacher.ID = '$ID'";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
