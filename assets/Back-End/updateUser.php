<?php

    include 'DbConnection.php';

    $First_Name = $_POST["Fname"];
    $Last_Name = $_POST["Lname"];
    $phone_number = $_POST["userNumber"];
    $password = $_POST["userPass"];
    $email = $_POST["userEmail"];
    $AcEmail = $_POST["userAcEmail"];
    $table = $_POST["Type"];
    $ID = $_POST["ID"];

    $connection = dbConnect();

    $query = "UPDATE $table SET First_Name = '$First_Name', Last_Name = '$Last_Name', Phone_Number = '$phone_number',  Password = '$password', Email = '$email', Academic_Email = '$AcEmail' WHERE ID = '$ID'";

    $queryResult = executeDMLQuery($query, $connection);

    echo($queryResult)

?>