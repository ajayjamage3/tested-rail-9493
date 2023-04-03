import{footer} from "./footer.js"

document.querySelector(".footer1").innerHTML = footer()
let sliders = document.querySelectorAll(".slides");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
document.querySelector(".prev").addEventListener("click",()=>{
    
})

sliders.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel()
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel()
});

function carousel() {

    if (counter === sliders.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = sliders.length - 1;
    }

    sliders.forEach(function (slides) {
        slides.style.transform = `translateX(-${counter * 100}%)`;
    });
};

document.querySelector(".prev").addEventListener("click",()=>{
    let ele = document.querySelector(".trending")
    ele.scrollLeft+=200
})
document.querySelector(".next").addEventListener("click",()=>{
    let ele = document.querySelector(".trending")
    ele.scrollLeft-=200
})


window.addEventListener("load",()=>{
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/render/show?category=fashion`)
    .then(res=>res.json())
    .then(data=>(display(data)))
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
    document.querySelector(".trending").innerHTML = newData.join(" ")
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