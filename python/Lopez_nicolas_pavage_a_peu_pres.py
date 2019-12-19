import turtle


def motif():
    for i in range(0,8):
        turtle.forward(50)
        turtle.right(60)

def frise():

    for i in range (10):
        motif()
        turtle.left(120)
x=-300
y=150
turtle.color('black')
turtle.up()
turtle.goto(-500,300)
turtle.down()
turtle.speed(0)

for v in range (8000):
    x = x + 50
    y = 50 - y
    turtle.up()
    turtle.goto(x,y)
    turtle.down()
    frise()
