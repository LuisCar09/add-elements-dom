 // Aquí tu código
const addButton = document.getElementById('agregar')
const uNorderedList = document.getElementById('lista')

addButton.addEventListener('click',() =>{
    const item = prompt('Ingrese tarea pendiente')
    const itemList = document.createElement('li')
    if (item.length > 1) {
        itemList.innerText = item
        uNorderedList.appendChild(itemList)
    }else{
        alert('Debes ingresar una tarea')
    }
})