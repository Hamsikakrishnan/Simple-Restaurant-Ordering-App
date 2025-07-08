import { menuArray } from './data.js'


const menu = document.getElementById("menu")


function displayMenu(){
    let html = ''
    menuArray.forEach((menuItem) =>{
        html += `
        <div>
            <h1>${menuItem.name}</h1>
            <p>${menuItem.price}</p>
            <p>${menuItem.emoji}</p>
        </div>
        `
    })
    return html
}

function render(){
    menu.innerHTML = displayMenu()
}

render()