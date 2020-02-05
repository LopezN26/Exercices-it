<?php



//définir objet parc auto
// required_once ("./lib/parcAuto.php")
// définir objet  Voiture
require_once "lib/voiture.php";
require_once "lib/parcAuto.php";

$voiture1 = new Voiture(1);
//$voiture2 = new Voiture(2);
var_dump($voiture1);
//change color
/*echo $voiture1->getColor();
echo "<br/>";
if ($voiture1->paint("blue")) //si ce que la fonction renvoi = true
{
    echo "voiture repeinte";
}
else
{
    echo "voiture non repeinte";
}*/

/*echo $voiture1->getColor();
echo "<br/>";
$voiture1->paint("jauje");
unset($voiture1); //désintance de l'objet
$voiture1 = new Voiture(1);
echo $voiture1->getColor();*/

//change imat

/*echo "<br/>";
echo $voiture1->getImat();
echo "<br/>";
echo $voiture1->changeImat("UV 778 GG");
echo "<br/>";
unset($voiture1); //désintance de l'objet
$voiture1 = new Voiture(1);
echo $voiture1->getImat();*/

//

// CREATION VOITURE DEPUIS IMAT
/*$plate = 'UV 778 GG';

$voitureFromImat= Voiture::getFromImmat($plate);
var_dump($voitureFromImat);
echo $voitureFromImat->getColor();*/

// CREATION VOITURE METHODE STATIC
/*$voitureCreated= Voiture::create([
    'color' => 'unique',
    'imat'  => 'YX 666 XY',
    'imatpoi'  => 'YX 6666666 XY',
    'kkko' => 'fgjfg',
    'nbDoors' => '5'
]);
echo $voitureCreated->getColor();*/

//TROUVER TOUTES LES VOITURES AYANT CE CRITERE
//var_dump(Voiture::findAll(['couleur'=>'rouge','nbDoors'=>'5']));


$parc1=new ParcAuto(1);
var_dump($parc1);

//find one

// récupérer celui qui a le plus de voitures

//je l'interroge pour avoir le nombre de véhicules bleus

// je liste les plaques d'immatriculation des véhicules qui ne sont pas en panne