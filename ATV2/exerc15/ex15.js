function nPrimo(inp) {
    var div = 0;
    for (var i = inp; i >= 1; i--) {
        if (inp % i == 0) {
            div++;
        }
    }
    if (div == 2) {
        return "O número é primo";
    }
    else {
        return "O número não é primo";
    }
}
console.log(nPrimo(10));
