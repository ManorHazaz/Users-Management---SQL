<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <title>Test</title>
</head>
<body>
    <div class="container">
        <form method="post" class="form" action="#"> 
            <h1> sign in </h1>
            <input type="text" placeholder="Username"  class="text-input" name="username"> 
            <input type="text" placeholder="Password" class="text-input" name="userpassword">
            
            <input type="submit" name="signin" value="sign-in">
        </form>

        <span class="not-signedin"> don't have an account <a href="signup.php">sign up her</a> </span>
    </div>
</body>
<script src="scripts/main.js"></script>
</html>