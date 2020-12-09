<?php

    require_once('DB.php');
    require_once('HTTP.php');

    $action = $_GET['action'];

    // "GETTING" and "POSTTING" the data
    if($action == 'get')
    {
        $arr = array();
        parse_str($_SERVER['QUERY_STRING'], $arr);
    }
    else
    {
        $arr = $_POST;

    }
    $array = array();

    // order the data in values
    foreach ($arr as $key => $value) 
    {
        switch ($key) 
        {            
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

    // calling the DB functions according the action + validate empty data
    switch ($action) {
        case 'insert':

            if(empty($table) || empty($array))
            {
                $msg = "The server could not understand the request due to invalid syntax.";
                HTTP::create('400' , $msg);
                break;
            }

            $db = new DB();
            $msg = $db->insert($table, $array);
            HTTP::create('201' , $msg);
            break;
        
        case 'delete':

            if(empty($table) || empty($field) || empty($data))
            {
                $msg = "The server could not understand the request due to invalid syntax.";
                HTTP::create('400' , $msg);
                break;
            }

            $db = new DB();
            $msg = $db->delete($table, $field, $data);
            HTTP::create('200' , $msg);
            break;
        
        case 'get':

            if(empty($table) || empty($field) || empty($data))
            {
                $msg = "The server could not understand the request due to invalid syntax.";
                HTTP::create('400' , $msg);
                break;
            }

            $db = new DB();
            $msg = $db->get($table, $field, $data);
            HTTP::create('200' , $msg);
            break;
        
        case 'update':

            if(empty($table) || empty($field) || empty($data) || empty($array))
            {
                $msg = "The server could not understand the request due to invalid syntax.";
                HTTP::create('400' , $msg);
                break;
            }

            $db = new DB();
            $msg = $db->update($table, $field, $data, $array);
            HTTP::create('200' , $msg);
            break;
            
        default:
            $msg = "The server could not understand the request due to invalid syntax.";
            HTTP::create('400' , $msg);
            break;
      }
?>