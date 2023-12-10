<?php
    include 'DbConnection.php';

    $firstName = $_POST['First_Name'];
    $lastName = $_POST['Last_Name'];
    $contactEmail = $_POST['Email'];
    $academicEmail = $_POST['Academic_Email'];
    $phoneNumber = $_POST['Phone_Number'];
    $dateOfBirth = $_POST['Birth_Date'];
    $username = $_POST['Username'];
    $table = $_POST['table'];
    $ID = $_POST['ID'];

    $connection = dbConnect();

    $query = "UPDATE $table SET First_Name = '$firstName', Last_Name = '$lastName', Username = '$username', Birth_Date = '$dateOfBirth', Phone_Number = '$phoneNumber', Email = '$contactEmail', Academic_Email = '$academicEmail' WHERE ID = '$ID'";


    $queryResult = executeDMLQuery($query, $connection);

    echo ($queryResult);
?>