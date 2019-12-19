from math import pi, cos, sin
long = float(input("nombre : "))
x0, y0 = 0, 0
xA, yA = long, y0
xB, yB = long * cos(pi/3), long * sin(pi/3)
xC, yC = - long * cos(pi/3), yB
xD, yD = long * cos(3*pi/3), long * sin(3*pi/3)
xE, yE = long * cos(4*pi/3), long * sin(4*pi/3)
xF, yF = long * cos(5*pi/3), long * sin(5*pi/3)
print(xA, yA)
print(xB, yB)
print(xC, yC)
print(xD, yD)
print(xE, yE)
print(xF, yF)