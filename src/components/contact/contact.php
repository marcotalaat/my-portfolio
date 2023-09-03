<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

$msgStr = `Hi !, i hope you are doing well. I'm $first_name $last_name talking about $subject and this is my message:  $msg`;
$to = 'marcotalaat355@yahoo.com';

mail($email, $subjectm, $msgStr);

header("location: /");

exit;


