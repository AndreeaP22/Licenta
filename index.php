<?php

session_start();

if (isset($_SESSION["user_id"])) {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";
            
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
           <link rel="stylesheet"  href="styleLogin.css">

</head>
<body>
    
   
<div class="container">
     <div class="img>">
   <h2>Welcome to The Coffee House</h2>

   

    <?php if (isset($user)): ?>
        
        <p>Hello <?= htmlspecialchars($user["name"]) ?></p>
        
        <p><a href="logout.php">Log out</a></p>
            <a href="loginPage.html"><button>Go to vizit the site</button></a>
        
    <?php else: ?>
        
        <p><a href="login.php">Log in</a> or <a href="signup.html">sign up</a></p>
        
    <?php endif; ?>

   
           <!--<p><a href="AdminPage.html">Admin Page</a></p>-->
           <p><a href="RegisterAdmin.html">Admin Page</a></p>


         

    
  </div>
</div>  
</body>
</html>
    
    
    
    
    
    
    
    
    
    
    