<?php
include 'DbConnection.php';

$connection = dbConnect();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $courseIDs = $_POST['course_ids'];

    foreach ($courseIDs as $courseID) {
        $query = "DELETE FROM Course WHERE ID = '$courseID'";
        executeDMLQuery($query, $connection);
    }

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Invalid request method']);
}




