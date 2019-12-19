function enRouge()
{
    let sectionA = document.getElementById("sectiona");
    sectionA.children[0].style.color="red";
}

function enVert()
{
    let sectionA = document.getElementById("sectiona");
    sectionA.children[sectionA.children.length-1].style.color="green";
}

function enJaune()
{
    let all = document.body.children;
    for (i=0; i<all.length;i++)
    {
        if (all[i].tagName==="SECTION")
        {
            all[i].firstElementChild.style.color="yellow";
        }
    }
}


let all = document.body.children;



