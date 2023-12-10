<?php
    if (!empty($_FILES['files']['name'][0])) {
        $uploadPath = '../documents/';
        $success = true;

        foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
            $filename = $_FILES['files']['name'][$key];
            $location = $uploadPath . $filename;

            if (!move_uploaded_file($tmp_name, $location)) {
                $success = false;
                break;
            }
        }

        $response = $success ?
            json_encode([
                'success' => true,
                'message' => 'Files uploaded successfully!',
            ]) :
            json_encode([
                'success' => false,
                'message' => 'Something unexpected happened, try again!',
            ]);

        echo $response;
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'No files were uploaded.',
        ]);
    }
?>
