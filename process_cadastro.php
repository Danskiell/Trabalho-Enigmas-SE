<?php
// Incluir arquivo de conexão
include 'db.php';

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegar os dados do formulário
    $nome = $_POST['nome'];
    $rm = $_POST['rm'];

    // Inserir os dados no banco
    $sql = "INSERT INTO alunos (nome, rm) VALUES ('$nome', '$rm')";

    if (mysqli_query($conn, $sql)) {
        echo "Cadastro realizado com sucesso!";
        // Redirecionar para a primeira página de enigma
        header("Location: enigmas.html");
        exit();
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Fechar conexão
mysqli_close($conn);
?>
