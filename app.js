let listaNumerosSorteados=[];
let numeroMaximo=10;
let numeroSecreto = generareNumeroSecreto();
let intentos=1;




function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos=== 1) ? `vez`: `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{
        //el ususario no acerto
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p','El numero secreeto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generareNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sortewamos todos los numeros 
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{
        //si el numero generado esta incluido en la lista     
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generareNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
        
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generareNumeroSecreto();
    console.log(numeroSecreto)
    intentos=1;
    

}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();

    //indicar mensaje de intervalo  de numeros 
    condicionesIniciales();

    //dehabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);


}

  
condicionesIniciales();