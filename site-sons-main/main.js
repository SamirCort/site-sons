function tocaSom(){
    
document.querySelector('#som_tecla_pom').play();

}
const listadeTeclas=document.querySelectorAll('.tecla')

listadeTeclas[0].onclick=tocaSom

let contador = 0;
while (contador < listadeTeclas.length){

  listadeTeclas[contador].onclick = tocaSom

  contador = contador + 1;
}

function somaValores(a,b){
  console.log(a+b)
}

 

