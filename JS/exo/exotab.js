function creaTab ()
{
    const tableau = [1,2,3,4,5,6,7,8,9,10];
    return tableau;
}

function affichTab (tableau)
{
    for (i=0;i<tableau.length;i++)
    {
        document.write(`A l'indice ${i} la case du tableau vaut ${tableau[i]}
        `);
    }
}

function dixFois (tableau)
{
    for (i=0;i<tableau.length;i++)
    {
        tableau[i]=(tableau[i]*10);
    }
}

const tab = creaTab();
affichTab(tab);
dixFois(tab);
affichTab(tab);






