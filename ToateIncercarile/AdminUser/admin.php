<?php

  requiere("Connection.php");

?>





<!DOCTYPE html>
<html lang="en">

<head>


    <meta  charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <title>Admin Page</title>
    <link rel="stylesheet"  href="styleAdmin.css">
   
  </head>
  <body>

    <div class="container">
        <div class="form">
            <form>
                <h2>Admin Login</h2>
                <form method="POST">
                <input type="text"  placeholder="Admin Name" name="AdminName">
                <input type="text"  placeholder="Password" name="AdminPass">
                <button type="submit" name="Signin">Login</button>
            
        </div>
        <div class="image">
            <img src="https://i.pinimg.com/564x/e6/e8/69/e6e8691e77bd66ca772d620f22d61d9b.jpg">
            
        </div>
    </div>
    </form>

    <?php
       if(isset($_POST['Signin']))
       {
         $query = "SELECT * FROM `admin_login` WHERE `Admin_Name` = '$_POST['AdminName']' AND  `Admin_Password` = '$_POST['AdmiPassword']'";
            $result=mysql_query($conn,$query);
            if (mysql_num_rows(  $result)==1) {
                session_start();
                $_SESSION['AdminLoginid'] = $_POST['AdminName'];
                header("location: AdminPanel.php ");

            }
            else
            {
                echo "<script>alert('Inncorect password');</script>";

            }

       }
    ?>
      
</body>
</html>