import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
let products = []
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
let selectedProduct = sessionStorage.getItem("productId")
window.addEventListener("load",()=>{
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show/?_id=${selectedProduct}`)
    .then(res=>res.json())
    .then(data=>{
        display(data[0])
    })
})
let star5 = `<div id="rating5">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</div>`
let star4 = `<div id="rating5">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa-regular fa-star"></span>
</div>`
let star3 = `<div id="rating5">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
</div>`
let star2 = `<div id="rating5">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
</div>`
let star1 = `<div id="rating5">
<span class="fa fa-star checked"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
<span class="fa-regular fa-star"></span>
</div>`
function display(data){
    let images = data.image
    let imgs = images.map(ele=>{
        return ` <img src="${ele}" alt="" class="selected_product">`
    })
    let des = ""
    let rating = ""
    if(data.des){
        des = data.des
    }
    else{
        des = data.name
    }
    if(Number(data.rating)>=5){
        rating = star5
    }
    else if(Number(data.rating)<5 && Number(data.rating)>=4){
        rating = star4
    }
    else if(Number(data.rating)<4 && Number(data.rating)>=3){
        rating = star3
    }
    else if(Number(data.rating)<3 && Number(data.rating)>=2){
        rating = star2
    }
    else{
        rating = star1
    }
    let newData = `<p id="name">${data.name}</p>
    <p id="pro_rate">${rating}</p> 
    <p id="pro_price">Rs.${data.price}</p>
    <p id="des">Description:${des}</p>
    <div id="buttons">
    <button id="cart">ADD TO CART</button>
    <button id="buy">BUY NOW</button>
    </div>
    `
    document.querySelector("#pro_det").innerHTML=newData
    document.querySelector("#small_img").innerHTML = imgs.join(" ")
    let allimages = document.querySelectorAll(".selected_product")
    for(let img of allimages){
        img.addEventListener("mouseover",()=>{
            document.querySelector(".selected").src = img.src
          
            
        })
    }
    let productId = selectedProduct
    let userId = sessionStorage.getItem("userId")
    document.querySelector(".selected").src=  images[0]
    document.querySelector("#cart").addEventListener("click",()=>{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/?productId=${productId}&userId=${userId}`,{
            headers:{
                "Authorization":token
            }
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.length == 0){
            fetch(`https://prussian-blue-butterfly-wig.cyclic.app/cart/create/`,{
                method:"POST",
                body:JSON.stringify({productId}),
                headers:{
                    "Content-type":"application/json",
                    "Authorization":token
                }
            })
            .then(res=>res.json())
            .then(data=>{
               alert("Added to cart")
            }).catch(err=>alert(err))
           }
           else{
            alert("product aleady in the cart")
           }
        }).catch(err=>alert("please login"))

        
    
    })
}

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