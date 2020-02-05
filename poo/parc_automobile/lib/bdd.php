<?php

class BDD {

    public static $_instance = null ;

    static function getConnexion ()
    {
        if (self::$_instance==null)
        {
            self::$_instance = new PDO ("mysql:host=localhost;dbname=parcAuto2",'root','0000');
        }
        return self::$_instance;
    }
}
