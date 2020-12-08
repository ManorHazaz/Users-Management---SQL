<?php

    require_once('API/DB.php');

    $arr = $_POST;
    $array = array();

    foreach ($arr as $key => $value) 
    {
        switch ($key) 
        {
            case 'action':
                $action = $value;
            break;
            
            case 'table':
                $table = $value;
            break;

            case 'field':
                $field = $value;
            break;

            case 'data':
                $data = $value;
            break;
            
            default:
            $array[$key] = $value;
        }
    }

    switch ($action) {
        case 'insert':
            $db = new DB();
            $msg = $db->insert($table, $array);
            echo $msg;
            break;
        
        case 'delete':
            $db = new DB();
            $msg = $db->delete($table, $field, $data);
            echo $msg;
            break;
        
        case 'get':
            $db = new DB();
            $msg = $db->get($table, $field, $data);
            print_r($msg);
            break;
        
        case 'update':
            $db = new DB();
            $msg = $db->update($table, $field, $data, $array);
            echo $msg;
            break;
        default:
            echo 'diff';
      }
?>