<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "niranjankhanolkar88@gmail.com";
    $subject = "Exam Responses";
    $message = "";

    // Add form responses to the message
    foreach ($_POST as $key => $value) {
        $message .= ucfirst($key) . ": " . $value . "\n";
    }

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
