<?
include('partials/header.php');
?>
      <div class="dashboard">
        <samp>
            
           <?php
            if(isset($_SESSION['loginMessage'])){
                echo $_SESSION['loginMessage'];
                unset($_SESSION['loginMessage']);
            }


           ?>
        </samp>
        <h1>Dashbord</h1>
        <div class="logOutBtn">
            <a href="logOut.html">Log Out</a>

        </div>
          
      </div>

<?
include('partials/footer.php');
?>


