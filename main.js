alert("test")

function tocaSom(idElemento){
    document.querySelector(idElemento).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length){
    const instrumento = listaDeTeclas[contador].classList
    console.log(instrumento[1])
    listaDeTeclas[contador].onclick = function(){
        tocaSom(`#som_${instrumento[1]}`);
    }
    contador = contador + 1;
}