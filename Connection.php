<?php

mysql_connect('localhost', 'root', 'password','database');

if(mysql_connect_error())
{
	echo "Conectarea nu se poate realiza!";

}

?>