import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
let products = []
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 5)
let nextday = tomorrow.getDate()
let month = months[tomorrow.getMonth()]
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
    window.location="index.html"
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
    showData(products,ele._id)})
    .catch(err=>console.log(err))
})

}
function showData(products,id){
       let newCart = products.map(ele=>{
        return `
            <tr class ="carts" data-id = ${id}>
            <td><div class="photo"><img src="${ele.image[0]}" alt=""><p>${ele.name}</p><p class="remove" data-id = ${id}>X Remove</p></div></td>
            <td>${ele.price}</td> 
            <td><select  class="quantity" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option></select>
            </td>
            <td>Standard Delivery By ${nextday+" "+month}</td>
            <td class="price" >${ele.price}</td>
            </tr>
        `
   })
   document.querySelector("#cart_body2").innerHTML = newCart.join(" ")
   let removes = document.querySelectorAll(".remove")
   for(let rem of removes){
    rem.addEventListener("click",()=>{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/delete/${rem.dataset.id}`,{
            method:"DELETE",
            headers:{
                "Authorization":token
            }
            }).then(res=>res.json())
            .then(data=>{alert("removed from cart")
            window.location.reload()
        })
            .catch(err=>console.log(err))
    })
   }
   let total = 0
   let prices = document.querySelectorAll(".price")
            for(let pri of prices){
                    total+=Number(pri.innerText)
            }
            document.querySelector("#tot").innerText = total
            document.querySelector("#total").innerText = total
   let quantities = document.querySelectorAll(".carts")
   for(let qty of quantities){
        let pri = qty.children[4].innerText
        qty.children[2].addEventListener("change",()=>{
            let quant = qty.children[2].children[0].value
            let temp = pri
           qty.children[4].innerHTML = Number(quant)*Number(pri)
           total = 0
           for(let pri of prices){
                total+=Number(pri.innerText)
            }
            document.querySelector("#tot").innerText = total
            document.querySelector("#total").innerText = total
                    
        })
   }
   
}
document.querySelector("#pay").addEventListener("click",()=>{
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/?_id=${sessionStorage.getItem("userId")}`,{
            headers:{
                "Authorization":token
            }
            }).then(res=>res.json())
            .then(data=>{check(data)
            
        })
            .catch(err=>console.log(err))
})
            
function check(data){
    if(data[0].address){
       sessionStorage.setItem("address",JSON.stringify(data[0].address))
       window.location= "checkout.html"
    }
    else{
        window.location="address.html"
    }
}
            