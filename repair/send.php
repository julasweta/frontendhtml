<?php
$name = $_POST['name'];
$email = $_POST['email'];
$site = $_POST['site'];
$page = $_POST['page'];

/*функция преобразует все символы, которые пользователь попытается добавить в форму:*/
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

/* функция декодирует url, если пользователь попытается его добавить в форму. */
$name = urldecode($name);
$email = urldecode($email);

/* функцией мы удалим пробелы с начала и конца строки, если таковые имеются: */
 $name = trim($name);
 $email = trim($email);



 /* mail("на какой адрес отправить", "тема письма", "Сообщение (тело письма)","From: с какого email отправляется письмо
 \r\n");  */
 if (mail("julasweta@ukr.net", "Заявка с сайта Repair",
  "ФИО:".$name.
  ". E-mail: ".$email.
  ". form Site: ".$site.
  ". Count Page: ".$page."",
  "From: \r\n"))
 { echo '<div class="send" style="font-size: 30px; color: cyan;">Cообщение успешно отправлено</div>';
 } else {
 echo "при отправке сообщения возникли ошибки";
 }?>
