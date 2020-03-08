var random = new Array;
function verify(test, ntest) {
    for (var i = 0; i < test.length; i++) {
        if (test[i] == ntest) {
            console.log("O n\u00FAmero aparece no indice " + i);
        }
    }
}
function popV(pop, ver) {
    for (var i = 0; i < 10; i++) {
        pop[i] = Math.floor(Math.random() * 10 + 1);
    }
    console.log(pop);
    verify(pop, ver);
}
popV(random, 2);
