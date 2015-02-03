<?php
//change this to false when in Prod
$result = false;


$email = $_POST['email'];
$name = $_POST['name'];
$question = $_POST['question'];

if (!empty($email) && !empty($name) && !empty($question) && empty($_POST['honeypot'])) {
	$from = $email;
	$to = 'gameshop-rosario@hotmail.com';
	//$to = 'javierlandini@gmail.com';

	$headers = 'From: gameshop@game-shop.com.ar' . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$subject = 'Contacto desde sitio Web';
	$body = "Nombre: $name\r\n";
	$body .= "Mail: $from\r\n";
	$body .= "Mensaje:\r\n$question";

	//uncomment in Prod
	$result = mail($to, $subject, $body, $headers);
}

$response = array('success' => $result, 'data' => $_POST);
echo json_encode($response);
?>