import turtle

def deux_egaux(a,b,c):
    if a==b or b==c or c==a :
        return True
    else :
        return False

x = int(input("entrez x"))
y = int(input("entrez y"))
z = int(input("entrez z"))
res = deux_egaux(x,y,z)
if res==True :
   print("jejej")


