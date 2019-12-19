function add (num1,num2)
{
    var resultat = num1 + num2;
    return resultat;
}

function sous (num1,num2)
{
    var resultat = num1 - num2;
    return resultat;
}
function fois (num1,num2)
{
    var resultat = num1 * num2;
    return resultat;
}
function div (num1,num2)
{
    var resultat = num1 / num2;
    return resultat;
}


var resAdd,resSous,resFois,resDiv;
var nb1 = parseFloat (prompt ("Saisissez un nombre"));
var nb2 = parseFloat (prompt("Saisissez un deuxième nombre"));

resAdd=add(nb1,nb2);
resSous=sous(nb1,nb2);
resFois=fois(nb1,nb2);
resDiv=div(nb1,nb2);

alert(`${nb1}+${nb2}=${resAdd}
${nb1}-${nb2}=${resSous}
${nb1}*${nb2}=${resFois}
${nb1}/${nb2}=${resDiv}
`);




