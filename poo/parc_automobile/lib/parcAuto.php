<?php

require_once 'bdd.php';

class ParcAuto
{
    protected $city = null;

    protected $name =null;

    /**
     * ParcAuto constructor
     * @param $id
     */
    public function __construct($id=null)
    {
        if (!empty($id)) {
            $db = BDD::getConnexion();
            $req = $db->query(('SELECT * FROM parcs WHERE id='.$id));
            $result = $req->fetch(PDO::FETCH_ASSOC);

            foreach ($result as $k=>$v)
            {
                $this->$k = $v;
            }
        }
    }

    public function getCity()
    {
        return $this->city;
    }

    public static function findOne($filters=[])
    {
        $db = BDD::getConnexion();
        $clauses = [];
        foreach ($filters as $k=>$v)
        {
            $clauses[]= $k."=".$v;
        }
        $where = "WHERE"
        $query=
    }

}
