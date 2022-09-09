const list = document.querySelector(".list")
const template_element = document.querySelector("#template-element")
const addForm = document.querySelector(".add-form")
const inputs = addForm.querySelector(".inputs")

const inId = inputs.querySelector("#inId")
const inTitle = inputs.querySelector("#inTitle")
const inAuthName = inputs.querySelector("#inAuthName")
const inAuthLast = inputs.querySelector("#inAuthLast")
const inCat = inputs.querySelector("#inCat")
const inPrice = inputs.querySelector("#inPrice")
const inImage = inputs.querySelector("#inImage")
const add_button = inputs.querySelector(".add-button")

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
    
    const data = new GetBookData(
        inId,
        inTitle,
        inAuthName,
        inAuthLast,
        inCat,
        inPrice,
        inImage
    ).getData()
    console.log(data)
    // let uploaded = upload(file)
    // list.appendChild(uploaded)
})

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