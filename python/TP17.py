import turtle

x=0
y=1
n=5

n=int(input("saisir le nombre de termes a afficher"))
for i in range(n) : #affiche les n premiers termes
    if i%2==0 : # test de parité pour faire les calculs un par un
        print(x)
        x=x+y
    else :
        print(y)
        y=x+y

x=0
y=1
v=int(input("saisir la valeur a ne pas depasser"))
while y<v or x<v : #affiche tous les termes inférieurs a la valeur v
    if x<v : #test pour vérifier que la condition n'a pas été invalidée pendant l'execution de la boucle while
        print (x)
    x=x+y
    if y<v : #test pour vérifier que la condition n'a pas été invalidée pendant l'execution de la boucle while
        print(y)
    y=x+y
