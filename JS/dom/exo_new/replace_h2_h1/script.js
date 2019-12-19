function enBleu()
{
    let classeA = document.getElementsByClassName("classea");
    for (i=0; i<classeA.length;i++)
    {
        classeA[i].style.color='blue';
    }
}

function enVert()
{
    let classeB = document.getElementsByClassName("classeb");
    for (i=0; i<classeB.length;i++)
    {
        classeB[i].style.color='green';
    }
}

function enRouge()
{
    let sectionB = document.getElementById("sectionb");
    for (i=0;i<sectionB.children.length;i++)
    {
        if (sectionB.children[i].className==="classea")
        {
            sectionB.children[i].style.color="red";
        }
    }
}


let sectionB = document.getElementById("sectionb");

