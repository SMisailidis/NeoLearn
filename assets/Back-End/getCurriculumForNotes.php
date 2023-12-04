<?php
include 'DbConnection.php';

    $connection = dbConnect();

    $curID = $_POST["curr_id"];

    $query = "SELECT Curriculum.Title, Curriculum.Course_ID, Curriculum.Description FROM Curriculum WHERE ID = '$curID'";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult);

?>