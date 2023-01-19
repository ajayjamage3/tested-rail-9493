import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
let products = []
let date = new Date()
console.log(date)
document.querySelector("#head").innerHTML = navbar()
document.querySelector(".leftside").innerHTML = dropmenu()
document.querySelector(".footer1").innerHTML = footer()

document.querySelector(".menubar").addEventListener("mouseover",()=>{
    document.querySelector(".leftside").style.display = "block"
    document.querySelector(".menubar").style.backgroundColor = "white"
    document.querySelector(".bar1").style.backgroundColor = "#e40046"
    document.querySelector(".bar2").style.backgroundColor = "#e40046"
    document.querySelector(".bar3").style.backgroundColor = "#e40046"

})
document.querySelector(".menubar").addEventListener("mouseout",()=>{
    document.querySelector(".leftside").style.display = "none"
    document.querySelector(".menubar").style.backgroundColor = "#e40046"
    document.querySelector(".bar1").style.backgroundColor = "white"
    document.querySelector(".bar2").style.backgroundColor = "white"
    document.querySelector(".bar3").style.backgroundColor = "white"

})
let token = sessionStorage.getItem("token")
if(token){
    document.querySelector("#user_name").innerHTML = sessionStorage.getItem("username")
    document.querySelector("#login").style.display = "none"
    document.querySelector("#logout").style.display = "block"
}

document.querySelector("#logout").addEventListener("click",()=>{
    sessionStorage.clear()
    document.querySelector("#login").style.display = "block"
    document.querySelector("#logout").style.display = "none"
    window.location.reload()
})
document.querySelector(".logoimg").addEventListener("click",()=>{
    window.location = "index.html"
})

let userId = sessionStorage.getItem("userId")
window.addEventListener("load",()=>{
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/?userId=${userId}`,{
    headers:{
        "Authorization":token
    }
    }).then(res=>res.json())
    .then(data=>display(data))
    .catch(err=>console.log(err))
})
function display(data){
    data.map(ele=>{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show/?_id=${ele.productId}`,{
    }).then(res=>res.json())
    .then(data=>{products.push(data[0])
    showData(products)})
    .catch(err=>console.log(err))
})

}
function showData(products){
       let newCart = products.map(ele=>{
        return `
            <tr class ="carts">
            <td><div class="photo"><img src="${ele.image[0]}" alt=""><p>${ele.name}</p><p class="remove">X Remove</p></div></td>
            <td>${ele.price}</td> 
            <td><select  class="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option></select>
            </td>
            <td>Standard Delivery By </td>
            <td>${ele.price}</td>
            </tr>
        `
   })
   document.querySelector("#cart_body2").innerHTML = newCart.join(" ")
}
            
           
            