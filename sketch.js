
function setup() {
  createCanvas(500, 400);
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltainiciocarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

console.log('Jogo feito por gabu')
console.log('no curso da alura')
