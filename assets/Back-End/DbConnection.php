<?php

    function dbConnect() {
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "neolearn";
    
        $connection = mysqli_connect($host, $username, $password, $database);
    
        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }
    
        return $connection;
    }
    
    function executeDMLQuery($sql, $connection) {
        if (strpos($sql, 'SELECT') !== false) {
            // Handle SELECT queries
            $result = mysqli_query($connection, $sql) or die("Query failed");
    
            $initData = array();
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    $initData[] = $row;
                }
            }
    
            if(!empty($initData)) {
                $data = array();
                $data['data'] = $initData;
                $data['success'] = true;
                echo json_encode($data);
            }
        } else {
            // Handle other types of queries (UPDATE, INSERT, DELETE)
            if (mysqli_query($connection, $sql)) {
                $affectedRows = mysqli_affected_rows($connection);
                echo json_encode(array(
                    'success' => true,
                    'message' => 'Query executed successfully',
                    'affected_rows' => $affectedRows
                ));
            } else {
                $error = mysqli_error($connection);
                echo json_encode(array(
                    'success' => false,
                    'message' => 'Query execution failed: ' . $error,
                    'affected_rows' => 0
                ));
            }
        }
    
        mysqli_close($connection);
    }
    
    
    

?>
