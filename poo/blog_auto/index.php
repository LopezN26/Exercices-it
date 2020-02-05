<?php

require_once 'lib/blog.php';


$page1 = new Page(1);

/*$page1->getText();
$page1->getTitle();
$page1->getSlug();
$page1->getDate();
$page1->getLastEdit();*/


$page1->getDate();
echo "<br/>";


$pageCreated=Page::create([
    "title" => "myTitle",
    "slug" => "mon_url",
    "text" => "exemple de text"
]);

//liste les parc automobiles

// récupérer celui qui a le plus de voitures

//je l'interroge pour avoir le nombre de véhicules bleus

// je liste les plaques d'immatriculation des véhicules qui ne sont pas en panne