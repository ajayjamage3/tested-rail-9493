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
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show/?_id=${sessionStorage.getItem("productId")}`,)
        .then(res=>res.json())
        .then(data=>
        showData(data[0]))
        .catch(err=>console.log(err))
})
function showData(ele){
       totalProduct = 1
        let newCart =     ` <tr class ="carts">
            <td><div class="photo"><img src="${ele.image[0]}" alt=""><p>${ele.name}</p></td>
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
        document.querySelector("#tot").innerText = ele.price
        document.querySelector("#subtot").innerText = ele.price
        document.querySelector("#youpay").innerText = ele.price
   document.querySelector("#cart_body2").innerHTML = newCart
   document.querySelector(".quantity").addEventListener("change",()=>{
    let num =  document.querySelector(".quantity").value
    let pri = ele.price
        document.querySelector("#tot").innerText = Number(num) *Number(pri)
        document.querySelector("#subtot").innerText = Number(num) *Number(pri)
        document.querySelector("#youpay").innerText = Number(num) *Number(pri)
        document.querySelector(".price").innerText = Number(num) *Number(pri)

   })
   summary(ele)
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
    let productId = [sessionStorage.getItem("productId")]
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
               alert("Order Placed Succesfully")
               window.location="index.html"
            })
            .catch(err=>console.log("something went wrong"))  
            }
    
})

function summary(ele){
    let newCart   = ` <div class ="summ">
            <p>${ele.name}</p> 
            <p>Price: ${ele.price}</p> 
            </div>
            <hr>
        `
document.querySelector("#sumproducts").innerHTML = newCart
document.querySelector("#topro").innerText = totalProduct
document.querySelector("#subtot").innerText = document.querySelector("#tot").innerText 
document.querySelector("#youpay").innerText = document.querySelector("#tot").innerText 
}
document.querySelector(".logoimg").addEventListener("click",()=>{
    window.location = "index.html"
})
