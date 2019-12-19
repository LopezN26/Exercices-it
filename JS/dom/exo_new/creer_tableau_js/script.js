var tableau = document.createElement("table"); //création tableau
document.body.appendChild(tableau); //insertion ligne 1 body

var ligne1 = document.createElement("tr"); //création ligne1
tableau.appendChild(ligne1); //insertion ligne 1 du tableau
var case1ligne1 = document.createElement("td"); //création case 1 ligne 1
case1ligne1.innerHTML="AAA";
ligne1.appendChild(case1ligne1);//insertion de la case 1 de ligne 1
var case2ligne1 = document.createElement("td"); //création case 2 ligne 1
case2ligne1.innerHTML="BBB";
ligne1.appendChild(case2ligne1);//insertion de la case 2 de ligne 1

var ligne2 = document.createElement("tr"); //création ligne2
tableau.appendChild(ligne2); //insertion ligne 2 du tableau
var case1ligne2 = document.createElement("td"); //création case 1 ligne 2
case1ligne2.innerHTML="CCC";
ligne2.appendChild(case1ligne2);//insertion de la case 1 de ligne 2
var case2ligne2 = document.createElement("td"); //création case 2 ligne 2
case2ligne2.innerHTML="DDD";
ligne2.appendChild(case2ligne2);//insertion de la case 2 de ligne 2


