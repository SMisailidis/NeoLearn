<?php

    include 'DbConnection.php';

    $firstName = $_POST["First_Name"];
    $lastName = $_POST["Last_Name"];
    $ID = $_POST["ID"];
    $BirthDate = $_POST["Birth_Date"];
    $PhoneNumber = $_POST["Phone_Number"];
    $Email = $_POST["Email"];
    $AcademicEmail = $_POST["Acad_Email"];
    $table = $_POST["Type"];

    $connection = dbConnect();

    $query = "INSERT INTO $table (First_Name, Last_Name, Username, ID, Password, Birth_Date, Phone_Number, Email, Academic_Email) VALUE ('$firstName', '$lastName', '$ID', '$ID', '$ID', '$BirthDate', '$PhoneNumber', '$Email', '$AcademicEmail')";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult)
?>