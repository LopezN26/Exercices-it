var donnees =
{
    "debug":"on",
    "title":"Sample Konfabulator",
    "name":"mace windu",
    "width":"500",
    "height":"500",
    "src":"Images/Sun.png",
    "hOffset":"250",
    "vOffset":"250",
    "alignement":"center"
};

//var tab2 =JSON.parse(tab);
var tab = document.getElementsByTagName("table")[0];
for (i in donnees)
{
    console.log(i);
    console.log(donnees[i]);
    var l= document.createElement("tr");
    var c1=document.createElement("th");
    c1.innerText=i;
    var c2=document.createElement("td");
    c2.innerText=donnees[i];

    tab.appendChild(l);
    l.appendChild(c1);
    l.appendChild(c2);
}




//c1l1.appendChild();






