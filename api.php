<?php

    require_once('API/DB.php');

    $action = $_POST['action'];

    switch ($action) {
        case openConnection:
            $db = new DB();
            echo "goood";
            break;
        
        case closeConnection:
            $db->closeConection();
            break;
        
        case insert:
            // code to be executed if n=label3;
            break;
        
        case delete:
            // code to be executed if n=label3;
            break;
        
        case get:
            // code to be executed if n=label3;
            break;
        
        case change:
            // code to be executed if n=label3;
            break;
        default:
        //   code to be executed if n is different from all labels;
      }
    // $array = $_POST['params'];
    // $db = new DB();
    // $table = $array['table'];
    // echo $array;

    // var_dump($db->insertNewUser($table, $array));
    // $db->closeConection();
    

    // $data = array("username"=>"yarin", "userpassword"=>"yarin", "useremail"=>"class@gmail.com" , "userip"=>"127.1.1.1");

    // $db = new DB();

?>