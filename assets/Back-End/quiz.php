<?php 
    include 'DbConnection.php';

     $selectedCurriculumID = $_POST['curr_id'];

    $connection = dbConnect();
    

    $query = "SELECT * FROM quiz where Curr_ID = '$selectedCurriculumID' ";

    $queryResult = executeDMLQuery($query,$connection);

    echo($queryResult);

?>