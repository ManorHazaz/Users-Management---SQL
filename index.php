<?php

    require_once('API/api.php');

    $data = array("username"=>"yarin", "userpassword"=>"yarin", "useremail"=>"class@gmail.com" , "userip"=>"127.1.1.1");

    $db = new DB();
    var_dump($db->insertNewUser('users', $data));
    $db->closeConection();
    

?>