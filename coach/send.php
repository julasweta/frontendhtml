<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

/*функция преобразует все символы, которые пользователь попытается добавить в форму:*/
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);

/* функция декодирует url, если пользователь попытается его добавить в форму. */
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);

/* функцией мы удалим пробелы с начала и конца строки, если таковые имеются: */
 $name = trim($name);
 $email = trim($email);
 $phone = trim($phone);



 /* mail("на какой адрес отправить", "тема письма", "Сообщение (тело письма)","From: с какого email отправляется письмо
 \r\n");  */
 if (mail("julasweta@ukr.net", "Заявка с сайта COACHING",
  "ФИО:".$name.
  ". E-mail: ".$email.
  ". form Site: ".$phone.
  " ",
  "From: \r\n"))
 { echo '<div class="send" style="font-size: 30px; color: cyan;">Cообщение успешно отправлено</div>';
 } else {
 echo "при отправке сообщения возникли ошибки";
 }?>
