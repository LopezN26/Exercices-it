import turtle



def spirale (color, epaisseur):
    turtle.speed(0)
    r=3
    turtle.color(color)
    turtle.width(epaisseur)
    for i in range(100) :
        r = r+epaisseur/2
        turtle.circle(50*epaisseur-i,90)

spirale('blue',2)