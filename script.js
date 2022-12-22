var form = document.querySelector(".adicionar")
var list = document.querySelector(".lista")
var items = JSON.parse(localStorage.getItem("items")) || []


items.forEach((element)=>{
    createItem(element)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = e.target.elements['nome']
    let quantity = e.target.elements['quantidade']
    const currentItem = {
        name: name.value,
        quantity: quantity.value
    }
    const itemExist = items.find(element => element.name === name.value)

    if(itemExist){ 
        currentItem.id = itemExist.id
        updateItem(currentItem)

        console.log('existe');
    }else{ 
        currentItem.id = items.length
        createItem(currentItem)
        items.push(currentItem)
    }

    localStorage.setItem("items", JSON.stringify(items))
    
    name.value = ""
    quantity.value = ""
})

function createItem(item) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const quantityItem = document.createElement("strong");
    quantityItem.innerHTML = item.quantity;

    newItem.dataset.id = item.id  

    newItem.appendChild(quantityItem);
    newItem.innerHTML += item.name;

    list.appendChild(newItem);
}


function updateItem(item){ 
    console.log(document.querySelector("[data-id='"+item.id+"']").firstChild.innerHTML = item.quantity)
}



