import turtle

angle = 110
turtle.speed(0)
turtle.color("blue")
for i in range(100) :
    for j in range(80) : # 67 ou 80 sont des valeurs esthétiques
        turtle.forward(120) # mettre 40 si la boucle vaut 67, 100 si la boucle est de 100
        turtle.left(angle)
        angle = 170 - angle
    turtle.right(120)
    turtle.forward(60)
turtle.hideturtle()