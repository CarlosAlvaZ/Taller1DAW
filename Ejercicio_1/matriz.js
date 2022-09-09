const inDimensions = document.querySelector(".in-dimensions")
const inElements = document.querySelector(".in-elements")
const generate = document.querySelector(".generate")
const table = document.querySelector(".main-table")
let range = 100

// Anadiendo un eventListener de tipo 'click' al elemento generate
generate.addEventListener('click', ()=>{

    // Evaluando si los datos necesarios estan presentes
    if(inDimensions.value == 0){
        inDimensions.focus()
        return
    }
    if(inElements.value == 0){
        inElements.focus()
        return
    }

    console.log(crear_matriz(inDimensions.value, inElements.value))

})


// Creando funcion crear_matriz que se vale de ciclos for para crear una matriz multidimensional
function crear_matriz(dimensiones, elementos){
    let matriz = []
    for(let i = 1; i <= dimensiones; i++){
        let aux = []
        for(let j = 1; j <= elementos; j++){
            let num = Math.round( Math.random() * range )
            aux.push(num)
        }
        matriz.push(aux)
    }
    return matriz
}