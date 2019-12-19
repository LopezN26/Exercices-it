
var n = prompt ("saisissez un nombre entre 1 et 3 inclus");

while (n<1 || n>3)
{
    var n = prompt ("on avait dit entre 1 et 3 inclus, recommencez");
}
alert("well done");