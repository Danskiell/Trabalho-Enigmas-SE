<?php
$servername = "localhost";  
$username = "root";         
$password = "";             
$dbname = "escola";         

// Criar a conexão
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar a conexão
if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}
?>
