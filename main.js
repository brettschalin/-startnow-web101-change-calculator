

document.getElementById("calculate-change").onclick = function (e) {
    var due = document.getElementById("amount-due").value;
    var received = document.getElementById("amount-received").value;

    var results;
    if (received - due >= 0) {
        results = calculateChange(received - due);
        document.getElementById("cheapskate-output").innerHTML = "";
    }
    else {

        document.getElementById("cheapskate-output").innerHTML = "Not enough money paid.";
        return;
    }
    //Now to output everything...
    for (coin in results) {
        document.getElementById(coin + "-output").innerHTML = results[coin];
    }
}


function calculateChange(change) {
    //makes the mod calculations easier
    //I'm using a lot of Math.floor() calls because of floating point issues
    change = Math.round(change * 100);


    results = {};
    /*
    //For the bonus task. Decomment this and the accompanying HTML after the tests pass
    results["twenties"] = Math.floor(change / 2000);
    change %= 2000;

    results["tens"] = Math.floor(change / 1000);
    change %= 1000;

    results["fives"] = Math.floor(change / 500);
    change %= 500;

    results["twos"] = Math.floor(change / 200);
    change %= 200;
    */

    results["dollars"] = Math.floor(change / 100);
    change %= 100;

    results["quarters"] = Math.floor(change / 25);
    change %= 25;

    results["dimes"] = Math.floor(change / 10);
    change %= 10;

    results["nickels"] = Math.floor(change / 5);
    change %= 5;

    results["pennies"] = Math.round(change);

    return results;

}


