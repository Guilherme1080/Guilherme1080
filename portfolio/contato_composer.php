<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $celular = $_POST['celular'] ?? '';
    $assunto = $_POST['assunto'] ?? 'Mensagem do formulário';
    $mensagem = $_POST['mensagem'] ?? '';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'guilhermemiranda1080@gmail.com';
        $mail->Password   = 'jqbi xykk uuvw spis';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('guilhermemiranda1080@gmail.com', 'Portfolio');
        $mail->addAddress('guilhermemiranda1080@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $assunto;
        $mail->Body = "
            <strong>Nome:</strong> $nome<br>
            <strong>Email:</strong> $email<br>
            <strong>Celular:</strong> $celular<br>
            <strong>Mensagem:</strong><br>$mensagem
        ";

        $mail->send();

        echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
    }
}
?>
