var array = new Array;
var total = 0;
var media = 0;
function popular() {
    for (var i = 0; i < 50; i++) {
        array[i] = Math.floor(Math.random() * 100 + 1);
        total += array[i];
    }
    media = Math.floor(total / i);
    console.log(array);
    console.log(media);
}
popular();
