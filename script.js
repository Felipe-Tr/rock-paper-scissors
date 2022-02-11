

function computerPlay(){
 var decision= Math.random()

 if(decision < .33){
    return "piedra"
 }
 else if (decision>.33 && .66 > decision){
 return "papel"
 }
else if(decision>.66){
    return "tijera"
}
}

function playRound(playerSelection, computerSelecion1){
var playerSelection = window.prompt("Listo para jugar, escoje piedra papel o tijera")
let computerSelecion = computerPlay();
let eleccion= playerSelection.toLowerCase();
var resultado="";


if (eleccion === computerSelecion){
    return resultado="Draw game, try again";
}
else{
if(eleccion==="piedra"){
    if(computerSelecion=== "papel"){
        return resultado=("You Lose! papel vence a piedra")
    }
    else if(computerSelecion=== "tijera"){
        return resultado=("You Win! piedra vence a tijera")
    }
} 
if(eleccion==="papel"){
    if(computerSelecion=== "piedra"){
        return resultado=("You Win! papel vence a piedra")
    }
    else if(computerSelecion=== "tijera"){
        return resultado=("You Lose! tijera vence a papel")
    }
} 

if(eleccion==="tijera"){
    if(computerSelecion=== "papel"){
        return resultado=("You Win! tijera vence a papel")
    }
    else if(computerSelecion=== "piedra"){
        return resultado=("You Lose! piedra vence a tijera")
    }
}

}
}

function game(){
 window.alert("juguemos una ronda de 5")

 let sumFvic=0;
 let sumFls=0;
    for (let index = 1; index <=5; index++) {
        
     var partida =playRound()

     console.log(partida)
     
    if (partida.includes("Win")){
       sumFvic=sumFvic+1
    }
    else if (partida.includes("Lose")){
        sumFls=sumFls+1
     }
    if(sumFvic>3){
      return  console.log("¡Has ganado! Bien jugado")
    }
    if(sumFls>3){
       return console.log("¡Has perdido! suerte para la proxima")
    }

    }
    if (sumFls > sumFvic){
        return  window.alert("Un juego reñido pero ¡Has perdido!")
    }
    else {
        return console.log("Un juego reñido pero ¡Has ganado!")
    }
}