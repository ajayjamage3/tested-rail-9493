import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
let category = sessionStorage.getItem("category")
console.log(category)
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

window.addEventListener("load",()=>{
    if(category =="Blush" || category == "Bronzer" || category == "fashion" || category == "lipstic" || category =="powerbank"){
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show?category=${category}`)
        .then(res=>res.json())
        .then(data=>{
            products = data
            display(data)
        })
    }
    else{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show`)
        .then(res=>res.json())
        .then(data=>{
            products = data
            display(data)
        })
    }
   
})
function display(data){
    let newData =  data.map(item=>{
        return `
        <div class = "product" data-id= ${item._id}>
        <p class="title_click">${item.name}</p>
        <img src="${item.image[0]}" alt=""height="250" class = "info" data-id= ${item._id}>
        <p>Price : ₹${item.price}</p>
        <p>Rating : ${item.rating}</p>
        </div>
        `
    })
    document.querySelector("#pro_details").innerHTML = newData.join(" ")
    let all_products = document.querySelectorAll(".product")
    for(let product of all_products){
        product.addEventListener("click",()=>{
            sessionStorage.setItem("productId",product.dataset.id)
            window.location = "details.html"
        })
    }
}
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

document.querySelector("#range").addEventListener("change",()=>{
    let val = document.querySelector("#range").value
    document.querySelector("#max").innerHTML = `Rs.${val}`
    let newData = products.filter(ele=>{
        return Number(ele.price)<=Number(val)
    })
    display(newData)
})

let radio = document.querySelectorAll(".radio")
for(let ele of radio){
    ele.addEventListener("change",()=>{
        if(ele.value == "low"){
            products.sort(function(a, b){return Number(a.price) - Number(b.price)});
        }
        else if(ele.value == "high"){
            products.sort(function(a, b){return Number(b.price) - Number(a.price)});
        }
        else{
            products.sort(function(a, b){return Number(b.rating) - Number(a.rating)});
        }
        display(products)
    })
}

document.querySelector("#go").addEventListener("click",()=>{
    let low = document.querySelector("#lowl").value
    let high = document.querySelector("#highl").value
    let newData = products.filter(ele=>{
        return (Number(ele.price)>=Number(low)  && Number(ele.price)<=Number(high))
    })
    display(newData)
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

document.querySelector("#srhbtn").addEventListener("click",()=>{
   let searchValue =  document.querySelector("#search").value
   console.log(searchValue)
   fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/search/?search=${searchValue}`)
   .then(res=>res.json())
   .then(data=>{
       display(data)
   })
})