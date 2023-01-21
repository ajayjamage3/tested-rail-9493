let userId = sessionStorage.getItem("userId")
let token = sessionStorage.getItem("token")
let products = []
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const today = new Date() 
console.log(today)
let totalProduct = 0
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 5)
let nextday = tomorrow.getDate()
let month = months[tomorrow.getMonth()]
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
       totalProduct = products.length
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
            summary(products)
                    
        })
   }
   summary(products)
   
}
let add = ""
let address = JSON.parse(sessionStorage.getItem("address"))
add = "Houseno:"+ address.houseno+","+ "City:" +address.city+",\n"+ "Street:"+address.street+", "+"Pincode:"+address.pincode+"."
 console.log(add)
document.querySelector("#user").innerText = sessionStorage.getItem("username")
document.querySelector("#useradd").innerText = add

document.querySelector("#pay").addEventListener("click",()=>{
    let bill = document.querySelector("#tot").innerText
    document.querySelector("#cart_body").style.display = "none"
    document.querySelector("#bill").style.display = "none"
    document.querySelector("#rev").style.backgroundColor = "rgb(249,250,251)"
    document.querySelector("#rev2").style.color = "black"
    
    document.querySelector("#methodDiv").style.display = "flex"
    document.querySelector("#bill").style.display = "none"
    document.querySelector("#makepay").style.backgroundColor = "rgb(51,51,51)"
    document.querySelector("#pay2").style.color = "white"
    document.querySelector("#paybutton").value = `PAY Rs. ${bill}`

})
document.querySelector("#paybutton").addEventListener("click",async()=>{
    let card = document.querySelector("#cardnum").value
    let date = document.querySelector("#expdate").value
    let total = document.querySelector("#tot").innerText
    let cvv = document.querySelector("#cvv").value
    let productId = []
    let cart = []
   await fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/?userId=${userId}`,{
    headers:{
        "Authorization":token
    }
    }).then(res=>res.json())
    .then(data=>{data.map(ele=>{
        productId.push(ele.productId)
        cart.push(ele._id)
    })
console.log(cart)})
    .catch(err=>console.log("something went wrong"))
    if(card == "" || date == "" || cvv==""){
        alert("all fields are mandatory")
    }
    else{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/purchase/create`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({userId,productId,Date:new Date(),payment:{card,date,total}})
            }).then(res=>res.json())
            .then(data=>{
                cart.map(ele=>{
                    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/delete/${ele}`,{
                        method:"DELETE",
                        headers:{
                            "Authorization":token
                        }
                        }).then(res=>res.json())
                        .then(data=>{console.log(data)
                    })
                        .catch(err=>console.log(err))
                })
               alert("Order Placed Succesfully")
               window.location="index.html"
            })
            .catch(err=>console.log("something went wrong"))  
            }
    
})

function summary(product){
    console.log(product)
    let newCart = product.map(ele=>{
        return `
            <div class ="summ">
            <p>${ele.name}</p> 
            <p>Price: ${ele.price}</p> 
            </div>
            <hr>
        `
})
document.querySelector("#sumproducts").innerHTML = newCart.join("")
document.querySelector("#topro").innerText = totalProduct
document.querySelector("#subtot").innerText = document.querySelector("#tot").innerText 
document.querySelector("#youpay").innerText = document.querySelector("#tot").innerText 
}
document.querySelector(".logoimg").addEventListener("click",()=>{
    window.location = "index.html"
})
document.querySelector("#account").addEventListener("click",()=>{
    if(token){
        window.location = "userinfo.html"
    }
    else{
        alert("please login")
    }
})
document.querySelector("#orders").addEventListener("click",()=>{
    if(token){
        window.location = "userinfo.html"
    }
    else{
        alert("please login")
    }
})