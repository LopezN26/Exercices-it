function setCouleur(id)
{
    var carre = document.getElementById(id);
    if ( carre.style.backgroundColor=="blue" || carre.style.backgroundColor=="pink")
    {
        alert("case déjà jouée !");
    }
    else
    {
        n++;
            if (n%2==0)
            {
                
                carre.style.backgroundColor="blue";
                carre.innerText="X";
                tab[id-1]=carre.style.backgroundColor; //remplissage du tableau avec la couleur

            }
            else
            {
                carre.style.backgroundColor="pink";
                carre.innerText="O";
                tab[id-1]=carre.style.backgroundColor; //remplissage du tableau avec la couleur
            }
    }
    
}

function rejouer ()
{
    n=0;
    for (i=1;i<10;i++) //remplissage des cases en blanc et effacement des X et O
    {
        var carre = document.getElementById(`${i}`);
        carre.style.backgroundColor="white";
        carre.innerText="";
    }
    for (i=0;i<9;i++) // remplissage du tableau pour ne pas déclencher la fonction victoire au premier clic avec la valeur undefined
    {
        tab[i]=i;
    }
        
}

function victoire ()
{
       if ( (tab[0]==tab[1] && tab[1]==tab[2]) || (tab[3]==tab[4] && tab[4]==tab[5]) || (tab[6]==tab[7] && tab[7]==tab[8]) //test des lignes
           || (tab[0]==tab[3] && tab[3]==tab[6]) || (tab[1]==tab[4] && tab[4]==tab[7]) || (tab[2]==tab[5] && tab[5]==tab[8]) //test des colonnes
           || (tab[0]==tab[4] && tab[4]==tab[8]) || (tab[2]==tab[4] && tab[4]==tab[6])) //test des diagonales
        {
            if (n%2==0) //test de la derniere couleur placée
            {
                alert("Le joueur bleu a gagné, relance de la partie");
            }
            else
            {
                alert("Le joueur rose a gagné, relance de la partie");
            }
            rejouer();
        } 
        else
        {
            if (n==9) //si pas de gagnant et plateau rempli
            {
                alert("Egalite, relance d'une partie");
                rejouer();
            }
        }
    
}

var n = 0;
var tab = []; //creation d'un tableau pour stocker les couleurs de background
for (i=0;i<9;i++) // remplissage du tableau pour ne pas déclencher la fonction victoire au premier clic avec la valeur undefined
    {
        tab[i]=i;
    }
