let turno=true // bandera para alternar
const cuadros = document.querySelectorAll(".cuadro");
function win(){
    //fila
    const fila1 = document.getElementById("a1").innerText;
    const fila2 = document.getElementById("b1").innerText;
    const fila3 = document.getElementById("c1").innerText;
    const filaGanadora1 = fila1 && fila1 === document.getElementById("a2").innerText && fila1 === document.getElementById("a3").innerText;
    const filaGanadora2 = fila2 && fila2 === document.getElementById("b2").innerText && fila2 === document.getElementById("b3").innerText;
    const filaGanadora3 = fila3 && fila3 === document.getElementById("c2").innerText && fila3 === document.getElementById("c3").innerText;
    //columna
    const columna1 = document.getElementById("a1").innerText;
    const columna2 = document.getElementById("a2").innerText;
    const columna3 = document.getElementById("a3").innerText;
    const columnaGanadora1 = columna1 && columna1 === document.getElementById("b1").innerText && columna1 === document.getElementById("c1").innerText;
    const columnaGanadora2 = columna2 && columna2 === document.getElementById("b2").innerText && columna2 === document.getElementById("c2").innerText;
    const columnaGanadora3 = columna3 && columna3 === document.getElementById("b3").innerText && columna3 === document.getElementById("c3").innerText;
    //diagonales
    const diagonal1 = document.getElementById("a1").innerText;
    const diagonalGanadora1 = diagonal1 && diagonal1 === document.getElementById("b2").innerText && diagonal1 === document.getElementById("c3").innerText;

    const diagonal2 = document.getElementById("a3").innerText;
    const diagonalGanadora2 = diagonal2 && diagonal2 === document.getElementById("b2").innerText && diagonal2 === document.getElementById("c1").innerText;

    if (filaGanadora1 || filaGanadora2 || filaGanadora3) {
        const ganador = filaGanadora1 ? fila1 : filaGanadora2 ? fila2 : fila3;
        let p = document.getElementById("mostrar");
        p.innerText = `¡${ganador} ha ganado!` ;
        return;
    }
    if (columnaGanadora1 || columnaGanadora2 || columnaGanadora3) {
        const ganador = columnaGanadora1 ? columna1 : columnaGanadora2 ? columna2 : columna3;
        let p = document.getElementById("mostrar");
        p.innerText = `¡${ganador} ha ganado!` ;
        return;
    }
    
    if (diagonalGanadora1 || diagonalGanadora2) {
        const ganador = diagonalGanadora1 ? diagonal1 : diagonal2;
        let p = document.getElementById("mostrar");
        p.innerText = `¡${ganador} ha ganado!` ;
        return;
    }
    empate();
}
function empate(){
    let empate = Array.from(cuadros).every(cuadro => cuadro.innerText !== ""); //convierto el nodelist cuadros en un array
    if(empate){ //every devuelve true si estan los cuadros vacios
        let p = document.getElementById("mostrar");
        p.innerText = `¡Empate!` ; 
    }
}
function equisocirculo(elemento) {
    if (elemento.target.innerText == ""){

    if(turno == true){
        elemento.target.innerText = "X";
        turno = false;
        let p = document.getElementById("mostrar");
        p.innerText = `Turno del jugador O` ; 
    }else{
        elemento.target.innerText = "O";
        turno =true;
        let p = document.getElementById("mostrar");
        p.innerText = `Turno del jugador X` ; 
        
    }
    win()
    }else{
        let p = document.getElementById("mostrar");
        p.innerText = `Esta celda ya esta usada` ;  
        }
}

function reiniciar(){
    turno = true;
    document.getElementById("mostrar").innerText = "Turno del jugador X";
    document.getElementById("a1").innerText = "";
    document.getElementById("b1").innerText = "";
    document.getElementById("c1").innerText = "";
    document.getElementById("a2").innerText = "";
    document.getElementById("b2").innerText = "";
    document.getElementById("c2").innerText = "";
    document.getElementById("a3").innerText = "";
    document.getElementById("b3").innerText = "";
    document.getElementById("c3").innerText = "";

}


cuadros.forEach(function (cuadro) {
    cuadro.addEventListener("click", equisocirculo);
});

const boton = document.getElementById("Reiniciar")
boton.addEventListener("click", reiniciar);
