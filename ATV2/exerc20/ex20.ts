let random: Array<number> = new Array;

function verify(test: Array<number>, ntest: number) {
    for (let i: number = 0; i < test.length; i++) {
        if (test[i] == ntest) {
            console.log(`O número aparece no indice ${i}`);
        }
    }
}

function popV(pop: Array<number>, ver: number): void {
    for (let i = 0; i < 10; i++) {
        pop[i] = Math.floor(Math.random() * 10 + 1);
    }
    console.log(pop);
    verify(pop, ver);
}

popV(random, 2);
