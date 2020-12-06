<?php

class DB
{
    private $conn;
    private $servername = 'localhost';
    private $serverusername = 'root';
    private $serverpassword = '';
    private $servertablename = 'users';
    
    //execute the query and return status msg
    private function executeTheQuery($sql)
    {
        if (mysqli_query($this->conn, $sql)) 
        {
        $msg = "record updated successfully";
        } 
        else {
        $msg = "Error: " . $sql . "<br>" . mysqli_error($this->conn);
        }

        return $msg;
    }
    
    //execute the query to array and return the array - returning the array
    private function executeTheQueryToArray($sql)
    {
        $result = mysqli_query($this->conn, $sql);
        $arr = array();
        if (mysqli_num_rows($result) > 0) 
        {
            while($row = mysqli_fetch_assoc($result))
            {
                array_push($arr,$row);
            }
            return $arr;
        }
        else
        {
            return $arr;
        }
    }

    // open connection with DB - returning string
    public function __construct()
    {
        $this->conn = mysqli_connect($this->servername , $this->serverusername , $this->serverpassword , $this->servertablename);
        if (!$this->conn) {
        die("Connection failed: " . mysqli_connect_error());
        }

        return("connection is good");
    }

    // close connection with DB - returning string
    public function closeConection()
    {
        mysqli_close($this->conn);
        return("connection is colsed");
    }

    // creating new user- returning string
    public function insertNewUser($table, $username, $userpassword, $useremail, $userip )
    {
        $sql = "INSERT INTO $table (username, userpassword,useremail, userip)
        VALUES ('$username', '$userpassword', '$useremail', '$userip')";

        return $this->executeTheQuery($sql);
    }

    // deleteing user - returning string
    public function deleteUserById($table, $userid)
    {
        $sql = " DELETE FROM $table WHERE `id` = '$userid'";

        return $this->executeTheQuery($sql);
    }

    // get all user data by chosen field - returning array
    public function getDataByField($table, $field, $data)
    {
        $sql = "SELECT * FROM $table WHERE $field = $data";
        
        return $this->executeTheQueryToArray($sql);
    }

    // change one data by chosen field - returning string
    public function changeDataByField($table, $field, $data, $updatearray)
    {
        $fieldstochange = '';
        foreach($updatearray as $x => $x_value)
        {
            // if the first foreach
            reset($updatearray); 
            if ($x === key($updatearray))
            {
                $fieldstochange .=  $x . " = '" . $x_value . "'";
            }
            else
            {
                $fieldstochange .= "," . $x . " = '" . $x_value . "'";
            }
        }

        $sql = "UPDATE $table SET $fieldstochange WHERE $field = $data";;
        
        return $this->executeTheQuery($sql);
    }
}


?>