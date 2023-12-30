<?php
include 'DbConnection.php';

if (isset($_POST['question'], $_POST['option1'], $_POST['option2'], $_POST['option3'], $_POST['option4'], $_POST['answer'])) {

    $question = $_POST['question'];
    $option1 = $_POST['option1'];
    $option2 = $_POST['option2'];
    $option3 = $_POST['option3'];
    $option4 = $_POST['option4'];
    $answer = $_POST['answer'];
    $chapter = $_POST['curID'];

    $connection = dbConnect();

    $query = "INSERT INTO quiz (Curr_ID, Question, Option1, Option2, Option3, Option4, Correct_Answer, Answered) VALUES ('$chapter', '$question', '$option1', '$option2', '$option3', '$option4', '$answer', 0)";



    $queryResult = executeDMLQuery($query,$connection);

} else {

    echo json_encode(['success' => false, 'error' => 'Missing required parameters']);
}
?>
