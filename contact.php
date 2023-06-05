<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_subject = "New Form Submission";

    $email_body = "Name: $name\nEmail: $email\nMessage: $message";

    $to = "immanuel.peter1@gmail.com";

    $headers = "From: $email \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact.html");