function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);
           
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
    

   

}    


const listaDeTeclas = document.querySelectorAll('.tecla');

// let  contador = 0

// // enquanto

// while( contador < listaDeTeclas.length){

   // para
    for( let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

        tecla.onclick = function (){
        tocaSom(idAudio);
        };
    tecla.onkeydown = function(e){
        console.log(e)
        if(e.code === 'Space' || e.code === 'Enter' ){
        tecla.classList.add('ativa');
        }
    }    
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }

    }