<?php

class DB
{
    private $conn;
    private $server = 'sql106.epizy.com';
    private $username = 'epiz_27522808';
    private $password = '4QY6c4lIDlmom2';
    private $db = 'epiz_27522808_infinityData';
    
    // open connection with DB - returning string
    public function __construct()
    {
        $this->conn = mysqli_connect($this->server , $this->username , $this->password , $this->db);
        if (!$this->conn) {
        die("Connection failed: " . mysqli_connect_error());
        }

        return("connection is good");
    }

    //execute the query and return status msg
    private function query($sql)
    {
        if (mysqli_query($this->conn, $sql)) 
        {
            $msg = 'record updated successfully';
        } 
        else 
        {
            $msg = 'error';
        }

        return $msg;

        // return (mysqli_query($this->conn, $sql)); 
    }

    //execute the query and return boolean if exist
    private function queryToBool($sql)
    {
        $result = mysqli_query($this->conn, $sql);
        if (mysqli_num_rows($result)) 
        {
            return true;
        }
        return false;
    }
    
    //execute the query to array and return the array - returning the array
    private function queryToArray($sql)
    {
        $result = mysqli_query($this->conn, $sql);
        $arr = array();
        if (mysqli_num_rows($result) > 0 ) 
        {
            while($row = mysqli_fetch_assoc($result))
            {
                array_push($arr,$row);
            }
            return $arr;
        }
    }

    // close connection with DB - returning string
    public function close()
    {
        mysqli_close($this->conn);
        return("connection is colsed");
    }

    // create new row- returning string
    public function insert($table, $data )
    {
        $fields = '';
        $datas = '';
        foreach($data as $x => $x_value)
        {
            // if the first foreach
            reset($data); 
            if ($x === key($data))
            {
                $fields .=  $x;
                $datas .= "'" . $x_value . "'";
            }
            else
            {
                $fields .= "," . $x;
                $datas .= ", '" . $x_value . "'";
            }
        }
        $sql = "INSERT INTO $table ($fields) VALUES ($datas)";

        return $this->query($sql);
    }

    // delete row - returning string
    public function delete($table, $field, $data)
    {
        $sql = " DELETE FROM $table WHERE $field = '$data'";

        return $this->query($sql);
    }

    // cheack if exist in DB - returning boolean
    public function isExist($table, $field, $data)
    {
        $sql = "SELECT * FROM $table WHERE $field = '$data' LIMIT 1";
        
        return $this->queryToBool($sql);
    }

    // get all row data by chosen field - returning array
    public function get($table, $field = '', $data = '')
    {
        if($field == '' && $data == '')
        {
            $sql = "SELECT `username` , `usercreatedat` , `useremail` FROM $table";
        }
        else
        {
            $sql = "SELECT `username` , `usercreatedat` , `useremail` FROM $table WHERE $field = '$data'";
        }
        
        return $this->queryToArray($sql);
    }

    // cheack if username and password match
    public function login($table, $username, $password)
    {
        $sql = "SELECT * FROM $table WHERE username = '$username' AND userpassword = '$password'";

        return $this->queryToBool($sql);
    }

    // change data by chosen field - returning string
    public function update($table, $field, $data, $updateArray)
    {
        $fieldsToChange = '';
        foreach($updateArray as $x => $x_value)
        {
            // if the first foreach
            reset($updateArray); 
            if ($x === key($updateArray))
            {
                $fieldsToChange .=  $x . " = '" . $x_value . "'";
            }
            else
            {
                $fieldsToChange .= " , " . $x . " = '" . $x_value . "'";
            }
        }

        $sql = "UPDATE $table SET $fieldsToChange WHERE $field = '$data'";;
        
        return $this->query($sql);
    }

    // get all the table columns 
    // use it in order to validate the request before sending request to the sql
    public function show($table)
    {
        $sql = "SHOW COLUMNS FROM $table";
        
        return $this->query($queryToArray); 
    }
}


?>