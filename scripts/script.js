var jogada = 0;

var tabuleiro =
    [['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']];

const box = document.querySelectorAll(".letra");

console.log(box);

for(var i = 0; i < 9; i++){
    box[i].addEventListener("click", function () {

        var currentBox = document.getElementById(this.id);

        if (jogada % 2 == 0) {
            currentBox.innerText = "X";
            jogada++;
        } else {
            currentBox.innerText = "O";
            jogada++;
        }
    
    });
}