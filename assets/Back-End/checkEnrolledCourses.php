<?php
    include 'DbConnection.php';

    $stud_ID = $_POST["ID"];

    $connection = dbConnect();

    $selectQuery = "SELECT enrolledin.Course_ID FROM enrolledin WHERE enrolledin.Stud_ID = '$stud_ID'";

    $queryResult = executeDMLQuery($selectQuery, $connection);

    echo ($queryResult);
?>
