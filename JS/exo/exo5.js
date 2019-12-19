
var n = prompt ("saisissez un nombre entre 10 et 20 inclus");

while (n<10 || n>20)
{
    if (n<10)
    {
        var n = prompt ("trop petit, on avait dit entre 10 et 20 inclus, recommencez");
    }
    if (n>20)
    {
        var n = prompt ("trop grand, on avait dit entre 10 et 20 inclus, recommencez");
    }
    
}
alert("well done");