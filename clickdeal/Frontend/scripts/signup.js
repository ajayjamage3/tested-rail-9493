document.querySelector("#button").addEventListener("click",()=>{
    let name = document.querySelector("#name").value
    let email = document.querySelector("#Email").value
    let phone = document.querySelector("#mobile").value
    let gender = document.querySelector("#gender").value
    let password = document.querySelector("#password").value
    let age = document.querySelector("#age").value
    if(name != "" && email!= "" && phone!= "" && gender!= "" && age!= "" && password !=""){
        sessionStorage.setItem("userInfo",JSON.stringify({name,email,phone,gender,age,password}))
        window.location = "otp.html"
    }
    else{
        alert("Please fill complete form")
    }
   
})
