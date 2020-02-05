<?php

require_once 'bdd.php';

class Page
{

    protected $title;

    protected $slug;

    protected $text;

    protected $date;

    protected $lastEdit;
    /**
     * Page constructor
     * @value "title","slug","text"
     */
    protected $authorized_update = ["title","slug","text"];
    /**
     * Page constructor
     * @param $id
     */

    public function __construct($id)
    {
        // requete BDD get properties for $id
        $db = BDD::getConnexion();
        $request = $db->query('SELECT * FROM post WHERE id='.$id);

        $result = $request->fetch(PDO::FETCH_ASSOC);

            //remplacer par un ofr each
        $this->id = $result['id'];
        $this->title = $result['title'];
        $this->slug= $result['slug'];
        $this->text = $result['text'];
        $this->date = $result['date'];
        $this->lastEdit = $result['lastEdit'];

    }

    public function getTitle()
    {
        $this->getAll('title');
    }
    public function getSlug()
    {
        $this->getAll('slug');
    }
    public function getText()
    {
        $this->getAll('text');
    }
    public function getDate()
    {
        $this->getAll('date');
    }public function getLastEdit()
    {
        $this->getAll('lastEdit');
    }
    public function getAll($property)
    {
        echo $this->$property;
    }

    public function updateTitle($value)
    {
        $this->updateAll('title',$value);
    }
    public function updateText($value)
    {
        $this->updateAll('text',$value);
    }
    public function updateSlug($value)
    {
        $this->updateAll('slug',$value);
    }

public function updateAll($property,$value)
{
    $properties = array_keys(get_object_vars($this));
    if(in_array($property,$properties))
    {
        $this->$property = $value;
    }
    return $this->__save();
}

    public function __save()
    {
        $db = BDD::getConnexion();
        $properties=array_keys(get_object_vars($this));
        $values=array_values(get_object_vars($this));
        $update=[];
        for ($i=0;$i<count($values);$i++)
        {
            if ($properties[$i] == 'id') {
                continue;
            }
            $update[] = $properties[$i] . "='" . $values[$i] . "' ";

        }
        $query='UPDATE post SET '.implode(", ",$update).' WHERE id='.$this->id;
        //echo "query =".$query;
        $res = $db->query($query);

        return !!($res && $res->rowCount());
    }

    public static function create($data) // ENCOURS DE BUUUUUILD
    {
        $db = BDD::getConnexion();
        $param=[];
        $value=[];
        foreach ($data as $k=>$v)
        {
            if (in_array($k,self::$authrized_update))
            {
                $param[]=$k;
                $value[]=$db->quote($v);
            }

        }
    }
}