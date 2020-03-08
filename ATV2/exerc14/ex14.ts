function cambio(valor: number): number {
    return valor * 4.62;
}

function converter(valor: number): void {
    console.log(cambio(valor));
}

converter(10.0);