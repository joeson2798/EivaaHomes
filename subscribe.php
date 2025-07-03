<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['subscriber_email'])) {
    $email = trim($_POST['subscriber_email']);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = fopen('subscribers.csv', 'a');
        fputcsv($file, [$email, date('Y-m-d H:i:s')]);
        fclose($file);
        // Redirect back with success flag
        header("Location: " . $_SERVER['HTTP_REFERER'] . "?subscribed=1");
        exit();
    } else {
        // Redirect back with error flag
        header("Location: " . $_SERVER['HTTP_REFERER'] . "?subscribed=0");
        exit();
    }
}
?>