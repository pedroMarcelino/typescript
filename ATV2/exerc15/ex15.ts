function nPrimo(inp: number):string {
    let div:number = 0;

    for (let i = inp; i >= 1; i--) {
        if (inp % i == 0) {
            div++
        }
    }

    if (div == 2) {
        return "O número é primo";
    } else {
        return "O número não é primo";
    }
}

console.log(nPrimo(10));