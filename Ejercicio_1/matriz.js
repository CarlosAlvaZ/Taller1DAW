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

    // creando una nueva matriz usando crear_matriz()
    let new_matrix = crear_matriz(inDimensions.value, inElements.value)

    // creando un fragmento de html con todo el contenido de la matriz creada anteriormente
    let fragment = mostrar(new_matrix)
    
    // limpiando y anadiendo el fragmento de html a la tabla
    table.innerHTML = ''
    table.appendChild(fragment)

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

// Creando funcion para mostrar los elementos de la matriz
function mostrar(arreglo, target){
    let docFragment = new DocumentFragment()
    for(fila in arreglo){
        let tr = document.createElement('tr')
        for(columna in arreglo[fila]){
            let td = document.createElement('td')
            let text = document.createTextNode(arreglo[fila][columna])
            td.appendChild(text)
            tr.appendChild(td)
        }
        docFragment.appendChild(tr)
    }
    return docFragment
}

function min_max(numero, indice){
    let minimo = 0
    let maximo = 0
    let indice = [0, 0]
    if(numero == 1){
        minimo = numero
        min_indice = indice
    }
    else{
        if(numero < minimo){
            minimo = numero
            min_indice = indice
        }
        else if(numero > maximo){
            maximo = numero
            max_indice = indice
        }
    }
}