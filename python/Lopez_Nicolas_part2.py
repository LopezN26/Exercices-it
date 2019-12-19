def fibo(v,test):
    """Calcule les termes de la suite de Fibbonacci jusqu'à ce que la valeur dépasse
     v, puis affiche toutes les valeurs qui lui sont strictements inférieures """
    x=0
    y=1
    if test==1:
        n = int(input("saisir le nombre de termes a afficher pour vérification"))
        for i in range(n):  # affiche les n premiers termes
            if i % 2 == 0:  # test de parité pour faire les calculs un par un
                print(x)
                x = x + y
            else:
                print(y)
                y = x + y
    x=0
    y=1
    if v<0:
        print("le numéro d'indicie ne peut etre négatif ")
    elif v==0:
        print("Le terme d'indice 0 de la suite de Fibbonacci vaut 0")
    elif v==1:
        print("Le terme d'indice 1 de la suite de Fibbonacci vaut 1")
    else :
        for i in range(v-1):  # affiche les n premiers termes
            if i % 2 == 0:  # test de parité pour faire les calculs un par un
                #print(x)
                x = x + y
                res=x
            else:
                #print(y)
                y = x + y
                res=y
        print("Le terme d'indice {} de la suite de Fibbonacci vaut".format(v),res) #imprime le résultat de la derniere opération effectuée, celle d'indice n

#afficher les valeurs de 0 à 100 de la suite fibo puis afficher la nième valeur

n=int(input("saisir l'indice du terme voulu"))
t=int(input("si vous voulez afficher n termes de la suite pour vérfier les calculs, tapez 1"))#
fibo(n,t) #on passe 100 en paramètre pour répondre à la consigne, remplacer par n une fois le bon fonctionnement testé


