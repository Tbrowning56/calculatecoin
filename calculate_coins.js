
document.getElementById("calculate").addEventListener("click", function calc(){
    var cents = 0;
    var quarter = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    cents = parseInt(document.getElementById("cents").value);   
    if (cents >=0 && cents<= 99){
        if (cents >= 25){
            quarter = Math.trunc(cents/25);
            cents%=25;
        }
        if (cents >= 10){
            dimes = Math.trunc(cents/10);
            cents%=10;
        }
        if (cents >= 5){
            nickels = Math.trunc(cents/5);
            cents%=5;
        }
        if (cents >= 1){
            pennies = cents;
        }
        document.getElementById("quarters").value = quarter;
        document.getElementById("dimes").value = dimes;
        document.getElementById("nickels").value = nickels;
        document.getElementById("pennies").value = pennies;
    }
});
