<?php

require_once 'bdd.php';
require_once 'parcAuto.php';

class Voiture
{
    public static $authorized_update=["color","nbDoors","imat"];
     /**
     * Voiture couleur
     * @var null
     */

    protected $color = null; //rend la couleur protéger

    /**
     * Voiture nb potes
     * @var null
     */

    protected $nbDoors = null;

    /**
     * Voiture imat
     * @var null
     */

    protected $imat = null;

    /**
     * Voiture couleur
     * @var null
     */

    protected $couleur =null;

    protected $idParcAuto =null;

    protected $id=null;

    /**
     * Voiture constructor
     * @param $id
    */
    public function __construct($id=null)
    {
        if (!empty($id)) {

            // requete BDD get properties for $id
            $db = BDD::getConnexion();
            $inst = $db->query('SELECT * FROM cars LEFT JOIN cars_color USING(color) WHERE id='.$id);
            //var_dump($inst);

            /*// exemple requete BDD recupere properties for $id
            $result = [
                'id'=>$id,
                'color'=>'blue',
                'nbDoors'=>3,
                'imat'=>'DG 875 YU'
            ];*/
            $result = $inst->fetch(PDO::FETCH_ASSOC);
            //var_dump($result);
            //on récupère les données requete et on les affect a ce propre objet
            foreach ($result as $k=>$v)
            {
                $this->$k = $v;
            }
            $this->ParcAuto=new ParcAuto($this->idParcAuto);
        }
    }

    public function getColor()
    {
        return $this->color;
    }

    public function paint($color)
    {
        $this->update('color',$color);

    }

    public function update($property,$value)
    {
        $properties = array_keys(get_object_vars($this));
        if(in_array($property,$properties))
        {
            $this->$property = $value;
        }
        return $this->__save();

    }

    function __save()
    {
        $db = BDD::getConnexion();
        $properties=array_keys(get_object_vars($this));
        $values=array_values(get_object_vars($this));
        $update=[];

        for ($i=0;$i<count($values);$i++)
        {
            if($properties[$i]=='id')
            {
                continue ;
            }
            //$update=$update.$properties[$i]."='".$values[$i]."' ";
            $update[]=$properties[$i]."='".$values[$i]."' "; //définir comme un tableau, puis implode avec une virgule
            /*if (!($i==count($values)-2))
                {
                    $update=$update.","; //substr_replace  strrchr
                }*/
            //Pour ne pas mettre de virgule a la fin de ma chaine, n'est psa dynamique
        }
        //substr_replace($update, "", strrchr($update, ","),1); //trouve la derniere virgule, et l'efface
        //substr_replace($update,"",-1); replace directement à la position -1 (on recule d'un par rapport au start, puis on va jusqu'a la fin et on met du vide)
        echo"update = ";
        var_dump($update);
        echo "<br/>";
        $query='UPDATE cars SET '.implode(", ",$update).' WHERE id='.$this->id;
        echo "query =".$query;
        echo "<br/>";
        /*$res = $db->query('UPDATE cars
                                    SET color="'.$this->color.'",
                                    imat="'.$this->imat.'",
                                    nbDoors="'.$this->nbDoors.'"
                                    WHERE id='.$this->id);*/
        $res = $db->query($query);
        echo 'var dump de get_object_vars';
        echo "<br/>";
        var_dump(get_object_vars($this));
        return !!($res && $res->rowCount()); //$res seul, marche aussi dans un if, si il existe alors on renvoit true

    }
    public function getImat()
    {
        return $this->imat;
    }

    public function changeImat($imat)
    {
        $this->update('imat',$imat);
    }

    /** instancie un objet à partir de sa plaque d'immat
    *@param $imat plaque d'imatriculation
    *@return Voiture
    *
    **/

    public static function getFromImmat($imat)
    {
        $db = BDD::getConnexion();// requete en BDD
        $query= "SELECT id FROM cars WHERE imat='".$imat."'";
        var_dump($query);
        $request = $db->query($query);
        $result = $request->fetch(PDO::FETCH_UNIQUE|PDO::FETCH_COLUMN);
        var_dump($result);
        return new Voiture($result);
    }

    public static function create($data)
    {
        $db = BDD::getConnexion();// requete en BDD
        $param=[];
        $value=[];
        foreach ($data as $key=>$val)
        {
            if (in_array($key,self::$authorized_update))
            {
                $param[]=$key;
                $value[]=$db->quote($val);
            }
        }
        $query= 'INSERT INTO cars ('.implode(",",$param).') VALUES ('.implode(",",$value).')';
        var_dump($query);
        $request = $db->query($query);
        $id = $db->lastInsertId(); //recup le dernier id modifier par la connexion en cours
        return new Voiture($id);
        //$query= "INSERT INTO cars ($param[i]'color','imat') VALUES  ('red');
    }

    public static function findAll($filters=[])

    {
        $db = BDD::getConnexion();
        $clauses=[];
        foreach ($filters as $key=>$value)
        {
            $clauses[]=$key."=".$db->quote($value);
        }
        $where="";
        if (!empty($clauses))
        {
            $where=" WHERE ".implode(" AND ",$clauses);
        }
        var_dump($where);
        $query="SELECT * FROM cars LEFT JOIN cars_color USING(color) ".$where;
        var_dump($query);
        $request =$db->query($query);

        //POUR RECHERCHER SANS FILTRES
        /*$db = BDD::getConnexion();// requete en BDD
        $request =$db->query("SELECT * FROM cars");
        //var_dump($request->fetchAll());
        $allCars=[];

        //METHODE 1 FETCH ALL, NUL SI PLEIN DE LIGNES DANS BDD
        /*$result=$request->fetchAll();
        foreach ($result as $car)
        {
            $allCars[]=new Voiture($car['id']);
        }*/

        //METHODE 2 WHILE FETCH, EVITE DE STOCKER TOUTES LES LIGNES DE TABLEAU,
        /*while ($row = $request->fetch(PDO::FETCH_ASSOC) )
        {
            $allCars[]= new Voiture($row['id']);
        }*/

        //METHODE 3 FETCH CLASS, QUI PRENDS LES PROP QU'IL A EN STOCK, ET CREE ET REMPLI LES PROPRIETES DE L'OBJET EN ULTILISANT LA CONSTRUCTEUR DE LA CLASSE VOITURE

        return $request->fetchAll(PDO::FETCH_CLASS,"Voiture"); //

        //return $allCars;*/
    }


}


// echo $maVoiture->color; Plus possible car la variable est protégée