import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
let product = []
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

let all = document.querySelectorAll("p")
for(let cat of all){
    cat.addEventListener("click",()=>{
        sessionStorage.setItem("category",cat.innerText)
        window.location = "product.html"
    })
}

let userId = sessionStorage.getItem("userId")
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

window.addEventListener("load",()=>{
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/?_id=${userId}`,{
            headers:{
                "Authorization":token
            }
    })
    .then(res=>res.json())
    .then(data=>document.querySelector("#username").innerText = data[0].email)
    .catch(err=>alert("something went"))
})


document.querySelector("#order").addEventListener("click",async()=>{
    document.querySelector("#detail1").style.display = "block"
    document.querySelector("#detail2").style.display = "none"
    document.querySelector("#detail3").style.display = "none"
    document.querySelector("#order").style.color = "red"
    document.querySelector("#address").style.color = "black"
    await fetch(`https://prussian-blue-butterfly-wig.cyclic.app/purchase/?userId=${userId}`,{
        headers:{
            "Authorization":token
        }
        }).then(res=>res.json())
        .then(data=>{data.map(ele=>{
           product.push(...ele.productId)
        })})
        .catch(err=>console.log(err))
        if(product.length == 0){
            document.querySelector("#od").innerHTML = `<h3>NO ORDERS AVAILABLE</h3>`
        }
        else{
            display(product)
        }
})
document.querySelector("#address").addEventListener("click",()=>{
    document.querySelector("#detail1").style.display = "none"
    document.querySelector("#detail2").style.display = "none"
    document.querySelector("#detail3").style.display = "block"
    document.querySelector("#address").style.color = "red"
    document.querySelector("#order").style.color = "black"

    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/?_id=${userId}`,{
        headers:{
            "Authorization":token
        }
        }).then(res=>res.json())
        .then(data=>showAddress(data[0].address))
        .catch(err=>console.log(err))
})

async function display(data){
   await data.map(async ele=>{
        await fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show/?_id=${ele}`)
        .then(res=>res.json())
        .then( data=> {products.push(data[0])
            showData(products)
        })
        .catch(err=>console.log(err))
    })
  
}

function showData(products){
    let newCart = products.map(ele=>{
     return `
         <div class ="carts">
         <img src="${ele.image[0]}" alt="">
         <h5>${ele.name}</h5>
         <h5>Price:${ele.price}<h5> 
         </div>
     `
})
document.querySelector("#od").innerHTML = newCart.join(" ")
}

function showAddress(data){
    let add = `
    <div class ="add">
    <h5>Houseno.:${data.houseno}, </h5>
    <h5>City:${data.city},</h5>
    <h5>Landmark/Street::${data.street},<h5>
    <h5>Pincode:${data.pincode}<h5> 
    <button id="adedit">Edit</button>
    </div>
`
document.querySelector("#addD").innerHTML = add
document.querySelector("#adedit").addEventListener("click",()=>{
    window.location = "address.html"
})
}