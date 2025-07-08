import { menuArray } from './data.js'

const menu = document.getElementById("menu")
const checkout = document.getElementById("checkout")
let cartItems = []
menu.addEventListener("click", function(e){
    if(e.target.id){
        if(!cartItems.includes(e.target.id)){
            cartItems.unshift(Number(e.target.id))
            renderItems()
        }
    }
})
function displayMenu(){
    let html = ''
    menuArray.forEach((menuItem) =>{
        let ingredients = menuItem.ingredients.map((item) =>{
            return `
            <span>${item}</span>`
        }).join(',')
        html += `<br>`
        html += `
        <div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <p class="text-[5rem]">${menuItem.emoji}</p>
                    <div>
                        <h1 class="text-xl">${menuItem.name}</h1>
                        <p class="text-gray-600">${ingredients}</p>
                        <p class="text-lg">$${menuItem.price}</p>
                    </div>
                </div>
                
                <button id="${menuItem.id}" class="text-[2rem] pr-8 font-thin">＋</button>  
                
            </div>
            <hr>
        </div>
        `
        
        
    })
    return html
}
function displayCart(){
    console.log(cartItems)
    let cartMaterials = menuArray.filter((item) =>{
        return cartItems.includes(item.id)
    })
    console.log(cartMaterials)
    let html = ``
    cartMaterials.forEach((item) =>{
        html +=  `
           <div>
              <h1>${item.name}</h1>
              <p>${item.price}</p>
           </div>
        `
    })
    return html
}
function render(){
    menu.innerHTML = displayMenu()
}
function renderItems(){
    checkout.innerHTML = displayCart()
}
render()