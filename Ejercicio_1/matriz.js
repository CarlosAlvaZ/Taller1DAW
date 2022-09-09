const inDimensions = document.querySelector(".in-dimensions")
const inElements = document.querySelector(".in-elements")
const generate = document.querySelector(".generate")
const table = document.querySelector(".main-table")
const minmaxHtml = document.querySelector(".min-max")
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
    let {docFragment : fragment, min_max} = mostrar(new_matrix)
    
    // limpiando y anadiendo el fragmento de html a la tabla
    table.innerHTML = ''
    table.appendChild(fragment)

    // escribiendo los valores maximos y minimos
    let minmaxFragment = new DocumentFragment()
    let p1 = document.createElement('p')
    let text1 = document.createTextNode(`El numero menor es: ${min_max.min}`)
    p1.appendChild(text1)
    let p2 = document.createElement('p')
    let text2 = document.createTextNode(`El numero mayor es: ${min_max.max}`)
    p2.appendChild(text2)
    minmaxFragment.appendChild(p1)
    minmaxFragment.appendChild(p2)
    minmaxHtml.appendChild(minmaxFragment)
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
    let min_max = {min : 1, max : 1}

    let docFragment = new DocumentFragment()
    for(fila in arreglo){
        let tr = document.createElement('tr')
        for(columna in arreglo[fila]){
            let current_number = arreglo[fila][columna]
            let td = document.createElement('td')
            let text = document.createTextNode(current_number)
            td.dataset.num = current_number
            td.appendChild(text)
            tr.appendChild(td)

            // evaluacion min max
            if(current_number < min_max.max){
                continue
            }
            else{
                if(current_number > min_max.min){
                    min_max.min = current_number
                }
                else if(current_number > min_max.max){
                    min_max.max = current_number
                }
                else {
                    continue
                }
            }
        }
        docFragment.appendChild(tr)
    }
    console.log(docFragment)
    return {docFragment, min_max}
}