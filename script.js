
/////variables globles/////
var rondade5=1;
let sumFvic=0;
let sumFls=0;
///////////////////////////

////////////botones y sus eventos//////////
const btnpiedra= document.querySelector("#btnpiedra");
const btnpapel= document.querySelector("#btnpapel");
const btntijera= document.querySelector("#btntijera");
const btnrsaction= document.querySelector("#btnrsreload");
//////////eventos///////////////
btnpiedra.addEventListener("click", (e)=> {game(e.target.textContent)})
btnpapel.addEventListener("click", (e)=> {game(e.target.textContent)})
btntijera.addEventListener("click", (e)=> {game(e.target.textContent)})

//------------------------------------------------------//

///selecionando div y creando h3 para mostrar el resultado///
var divrs= document.querySelector("#rs");
const rsh3=document.createElement("h3")
const rsglobal = document.querySelector("#rsglobal");
const btnrs= document.createElement("button") 
btnrs.innerText="Jugar de nuevo"

//------------------------------------------------------//

////Seleccion automatica de la computadora///////
function computerPlay(){
    var decision= Math.random()
    if(decision < .33)return "piedra";
    else if (decision>.33 && .66 > decision) return "papel";
    else if(decision>.66) return "tijera";
   }
//------------------------------------------------------//

//////////////////////juego a una ronda individual que manda el rsultado//////////////
function playRound(playerSelection, computerSelecion1){
//var playerSelection = window.prompt("Listo para jugar, escoje piedra papel o tijera")//
    let computerSelecion = computerPlay();
    let eleccion= playerSelection.toLowerCase();
    var resultado="";
    if (eleccion === computerSelecion)return resultado="Draw game, try again, ronda "+rondade5+" de 5";
    else{
        if(eleccion==="piedra")
        {
            if(computerSelecion=== "papel"){
                return resultado=("la maquina eligio papel, You Lose! papel vence a piedra, ronda "+rondade5+" de 5")
            }
            else if(computerSelecion=== "tijera"){
                return resultado=("la maquina eligio tijera, You Win! piedra vence a tijera, ronda "+rondade5+" de 5")
            }
        } 

        if(eleccion==="papel")
            {
                if(computerSelecion=== "piedra"){
                    return resultado=("la maquina eligio piedra, You Win! papel vence a piedra, ronda "+rondade5+" de 5")
                }
                else if(computerSelecion=== "tijera"){
                    return resultado=("la maquina eligio tijera, You Lose! tijera vence a papel, ronda "+rondade5+" de 5")
                }
            } 

        if(eleccion==="tijera")
        {
            if(computerSelecion=== "papel"){
                return resultado=("la maquina eligio papel, You Win! tijera vence a papel, ronda "+rondade5+" de 5")
            }
            else if(computerSelecion=== "piedra"){
                return resultado=("la maquina eligio piedra, You Lose! piedra vence a tijera, ronda "+rondade5+" de 5")
            }
        }

    }
}
    ///------------------------------------------------------//

function game(playerSelection)
{
    //window.alert("juguemos una ronda de 5")

    // for (let index = 1; index <=5; index++) {        
    if (rondade5<=5){   
        var partida =playRound(playerSelection)
        if (partida.includes("Win"))sumFvic=sumFvic+1;
        else if (partida.includes("Lose"))sumFls=sumFls+1
        
    /*     if(sumFvic>3){
        rsglobal.innerText= "¡Has ganado! Bien jugado"
        }
        if(sumFls>3){
        rsglobal.innerText= "¡Has perdido! suerte para la proxima"
        } */
        rondade5=rondade5+1;
        rsh3.innerText=partida+" "+"maquina: "+sumFls+" tu: "+sumFvic;
        divrs.appendChild(rsh3)
        
        }
    // }
    if (rondade5==6){ 
        
        rsh3.innerText="ronda 5 de 5";
        divrs.appendChild(rsh3)
      
        if (sumFls > sumFvic){
           rsglobal.innerText= "Un juego reñido pero ¡Has perdido!"
           rsglobal.appendChild(btnrs)
           btnrs.addEventListener("click",()=>location.reload())
        }
        else if(sumFls < sumFvic) {
           rsglobal.innerText="Un juego reñido pero ¡Has ganado!"
           rsglobal.appendChild(btnrs)
           btnrs.addEventListener("click",()=>location.reload())
        }
        else {
            rsglobal.innerText="Un juego demasiado reñido pero ¡Has empatado!"
            rsglobal.appendChild(btnrs)
            btnrs.addEventListener("click",()=>location.reload())
        }
    }
}