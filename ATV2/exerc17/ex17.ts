  
let array: Array<number> = new Array;
let total:number = 0;
let media:number = 0;

function popular(): void {

    for (var i = 0; i < 50; i++) {
        array[i] = Math.floor(Math.random() * 100 + 1);
        total += array[i];
    }

    media = Math.floor(total / i)

    console.log(array)
    console.log(media)
}

popular();