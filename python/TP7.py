import math
import turtle
r = 5
print("surface de ce cercle",math.pi*r**2,"cm²")



turtle.up() #levée stylo
#
turtle.shape('turtle') #
turtle.right(36)
#
turtle.color('red') #set color red
turtle.down() # repose du stylo
#
turtle.begin_fill() #
#
turtle.forward(200) #avancer 200 droite
turtle.right(144) #144°droite
turtle.forward(300) #tout droit
turtle.right(144) #
turtle.forward(300) #
turtle.right(144) #
turtle.forward(300) #
turtle.right(144) #
turtle.forward(300) #
turtle.right(144) #144°droite
turtle.forward(150)#
turtle.back(150)
turtle.end_fill() #
#
turtle.right(108)
#turtle.up()
#turtle.forward(50)
#turtle.down()
turtle.color('black')
turtle.circle(159)
turtle.hideturtle() #
turtle.done()