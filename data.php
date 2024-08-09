<?php
header('Content-Type: application/json');

$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "robot";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM move ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

$last_move = null;
if ($result->num_rows > 0) {
    // Output data of the last row
    $last_move = $result->fetch_assoc();
}

$conn->close();

echo json_encode($last_move);
?>
