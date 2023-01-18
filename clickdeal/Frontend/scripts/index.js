import { dropmenu, navbar} from "./navbar.js"
import{footer} from "./footer.js"
// document.querySelector("#head").innerHTML = navbar()
// document.querySelector(".leftside").innerHTML = dropmenu()
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
    ele.scrollLeft-=200
})
document.querySelector(".next").addEventListener("click",()=>{
    let ele = document.querySelector(".trending")
    ele.scrollLeft+=200
})

// document.querySelector(".menubar").addEventListener("mouseover",()=>{
//     document.querySelector(".leftside").style.display = "block"
//     document.querySelector(".menubar").style.backgroundColor = "white"
//     document.querySelector(".bar1").style.backgroundColor = "#e40046"
//     document.querySelector(".bar2").style.backgroundColor = "#e40046"
//     document.querySelector(".bar3").style.backgroundColor = "#e40046"

// })
// document.querySelector(".menubar").addEventListener("mouseout",()=>{
//     document.querySelector(".leftside").style.display = "none"
//     document.querySelector(".menubar").style.backgroundColor = "#e40046"
//     document.querySelector(".bar1").style.backgroundColor = "white"
//     document.querySelector(".bar2").style.backgroundColor = "white"
//     document.querySelector(".bar3").style.backgroundColor = "white"

// })

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
}

