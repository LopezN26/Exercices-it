import random

num = random.randint(0,12)
ncouleur = random.randint(1,2)
if ncouleur==1 :
    couleur = "rouge"
else :
    couleur = "noire"
pari = int(input("Pour parier sur le numéro sortant, taper 1,\n Pour parier sur la parité tapez 2\n Pour parier sur la couleur tapez 3 \n Choix :"))
mise=int(input("Choisissez combien vous voulez miser : "))

if pari==1 :
    numJ=int(input("Choississez un numero entre 0 et 12 : "))

    print ("Le numéro sortant est le ",num,"de couleur",couleur)
    if num==numJ :
        mise=mise*12
        print ("Vous avez gagné, vous multipliez votre mise par 12 ! \n vous avez maintenant",mise, "euros")
    else :
        print("Vous perdez votre mise")
elif pari==2 :
    parite = int(input("Choississez 1 pour paire, 2 pour impair"))
    print("Le numéro sortant est le ", num, "de couleur", couleur)
    if num%2==0 and parite==1 :
        mise=2*mise
        print ("Vous avez gagné, vous multipliez votre mise par 2 ! \n vous avez maintenant",mise, "euros")
    elif num % 2 != 0 and parite == 2:
        mise = 2 * mise
        print("Vous avez gagné, vous multipliez votre mise par 2 ! \n vous avez maintenant", mise, "euros")
    else :
        print("Vous perdez votre mise")
elif pari==3 :
    nCouleurJ = int(input("Choississez 1 pour rouge, 2 pour noire"))
    if nCouleurJ==1 :
        couleurJ = "rouge"
    else :
        couleurJ = "noire"
    print("Le numéro sortant est le ", num, "de couleur", couleur)
    if couleur==couleurJ :
        mise = 2 * mise
        print("Vous avez gagné, vous multipliez votre mise par 2 ! \n vous avez maintenant", mise, "euros")
    else :
        print("Vous perdez votre mise")