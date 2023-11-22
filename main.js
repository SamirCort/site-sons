function tocaSom(idElemento){
      document.querySelector(idElemento).play()
}

let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla')

while (contador < listaDeTeclas.length){

    const Instrumento = listaDeTeclas[contador].classList
    console.log(Instrumento)
    listaDeTeclas[contador].onclick = function (){
    
        tocaSom(`#som_${Instrumento}`);
    }
    
    
    contador = contador + 1;
}