alert("test")

function tocaSom(idElemento){
    document.querySelector(idElemento).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length;contador++){
    const instrumento = listaDeTeclas[contador].classList
    console.log(instrumento[1])
    listaDeTeclas[contador].onclick = function(){
        tocaSom(`#som_${instrumento[1]}`);
    }
}