import { menuArray } from './data.js'

const menu = document.getElementById("menu")
const checkout = document.getElementById("checkout")
const completeOrderBtn = document.getElementById("complete-order")
const orderConfirm = document.getElementById("order-modal")
document.addEventListener("click", function(e){
    if(e.target.id === "close-modal"){
        orderConfirm.classList.add("hidden")
    }
})
completeOrderBtn.addEventListener("click", function(){
    if(cartItems.length != 0){
        orderConfirm.classList.remove("hidden")
        orderConfirm.innerHTML = `
            <div class="bg-white p-6 rounded text-center shadow-xl w-3/4">
                <h2 class="text-2xl font-bold mb-2 text-violet-700">Thank You!</h2>
                <p class="text-gray-700 mb-4">Your order has been placed.</p>
                <button id="close-modal" class="bg-violet-500 text-white px-4 py-1 rounded">Close</button>
            </div>`
    }
})

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
                    <p class="text-[2.5rem]">${menuItem.emoji}</p>
                    <div>
                        <h1 class="text-lg leading-none">${menuItem.name}</h1>
                        <p class="text-gray-600">${ingredients}</p>
                        <p class="text-sm">$${menuItem.price}</p>
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
    // console.log(cartItems)
    let cartMaterials = menuArray.filter((item) =>{
        return cartItems.includes(item.id)
    })
    console.log(cartMaterials)
    let html = ``
    let totalPrice = 0
    if(cartMaterials.length != 0){
        completeOrderBtn.classList.remove("hidden")
    }
    html += '<h1 class="text-center leading-none">Your Order</h1>'
    cartMaterials.forEach((item) =>{
        html +=  `
           <div class="flex justify-between mx-7 my-5 leading-none">
              <div class="flex">
                <p>${item.emoji}&nbsp&nbsp</p>
                <h1>${item.name}</h1>
              </div>
              <p>$${item.price}</p>
           </div>
        `
        totalPrice += item.price
    })
    html += `
       <hr class="border-t border-gray-400 my-2 mx-6 leading-none">
       <div class="flex justify-between mx-7 my-1">
          <h1>Total Amount</h1>
          <p>$${totalPrice}</p>
       </div>
       `
    return html
}


function render(){
    menu.innerHTML = displayMenu()
}
function renderItems(){
    checkout.innerHTML = displayCart()
}
render()