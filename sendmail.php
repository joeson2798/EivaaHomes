<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  $to = "joeson2798@gmail.com";  // ✅ Change this to your email
  $subject = "New Enquiry from $name";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email\r\nReply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    // Send back inline JS to alert and reset form
    echo "<script>
      alert('Message sent successfully!');
      window.location.href = 'index.html';
    </script>";
  } else {
    echo "<script>
      alert('Message failed. Please try again.');
     window.location.href = 'index.html';
    </script>";
  }
}
?>
