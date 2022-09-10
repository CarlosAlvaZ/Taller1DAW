const list = document.querySelector(".list")
const template_element = document.querySelector("#template-element")
const addForm = document.querySelector(".add-form")
const inputs = addForm.querySelector(".inputs")
const toggler = document.querySelector(".toggle-button")

const inId = inputs.querySelector("#inId")
const inTitle = inputs.querySelector("#inTitle")
const inAuthName = inputs.querySelector("#inAuthName")
const inAuthLast = inputs.querySelector("#inAuthLast")
const inCat = inputs.querySelector("#inCat")
const inPrice = inputs.querySelector("#inPrice")
const inImage = inputs.querySelector("#inImage")
const add_button = inputs.querySelector(".add-button")

class GetBookData {
    constructor(id, title, name, last, cat, price, image){
        this.id = id.value
        this.title = title.value
        this.name = name.value
        this.last = last.value
        this.cat = cat.value
        this.price = price.value
        this.image = image.files[0]
    }
    
    getData(){
        return {
            id: this.id, 
            title: this.title,
            name: this.name,
            last: this.last,
            cat: this.cat,
            price: this.price,
            image: this.image
        }
    }
}

// Declarando la funcion upload, la cual crea un lector de archivos para poder extraer
// la imagen añadida desde el formulario.
function upload(file){
    let img = document.createElement("img")
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("load", e=>{
        img.setAttribute("src", e.target.result)
        img.setAttribute("alt", "cover")
    })
    return img
}


function crearPresentacion(data, temp){
    const template = temp.content.cloneNode(true)
    const bookElement = template.querySelector(".book-element")
    const img = bookElement.querySelector(".img")
    const id = bookElement.querySelector(".id")
    const title = bookElement.querySelector(".title")
    const auth = bookElement.querySelector(".auth")
    const cat = bookElement.querySelector(".cat")
    const price = bookElement.querySelector(".price")

    let uploadedImage = upload(data.image)
    let textId = document.createTextNode(data.id)
    let textTitle = document.createTextNode(data.title)
    let textName = document.createTextNode(data.name)
    let textLast = document.createTextNode(data.last)
    let textCat = document.createTextNode(data.cat)
    let textPrice = document.createTextNode(data.price)
    
    img.appendChild(uploadedImage)
    id.appendChild(textId)
    title.appendChild(textTitle)
    auth.appendChild(textName)
    auth.appendChild(textLast)
    cat.appendChild(textCat)
    price.appendChild(textPrice)
    
    return bookElement
}

function reset(args = []){
    args.forEach(element => {
        element.value = ""
    });
}

add_button.addEventListener("click", ()=>{
    if(inId.value == ""){
        inId.focus()
        return
    }
    else if(inTitle.value == ""){
        inTitle.focus()
        return
    }
    else if(inAuthName.value == ""){
        inAuthName.focus()
        return
    }
    else if(inAuthLast.value == ""){
        inAuthLast.focus()
        return
    }
    else if(inCat.value == ""){
        inCat.focus()
        return
    }
    else if(inPrice.value == ""){
        inPrice.focus()
        return
    }
    else if(inImage.files[0] == undefined){
        inImage.focus()
        return
    }
    const data = new GetBookData(
        inId,
        inTitle,
        inAuthName,
        inAuthLast,
        inCat,
        inPrice,
        inImage
    ).getData()
    
    list.appendChild( crearPresentacion(data, template_element) )
    reset([inId, inTitle, inAuthName, inAuthLast, inCat, inPrice])
})

toggler.addEventListener("click", ()=>{
    addForm.classList.toggle("hidden")
})