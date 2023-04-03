document.querySelector("#button").addEventListener("click",()=>{
    let name = document.querySelector("#name").value
    let email = document.querySelector("#Email").value
    let phone = document.querySelector("#mobile").value
    let gender = document.querySelector("#gender").value
    let password = document.querySelector("#password").value
    let age = document.querySelector("#age").value
    if(name != "" && email!= "" && phone!= "" && gender!= "" && age!= "" && password !=""){
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user?email=${email}`)
        .then(res=>res.json())
        .then(data=>{if(data.length>0){
            alert("You already have account please signin")
            window.location = "signin.html"
        }else{
            sessionStorage.setItem("userInfo",JSON.stringify({name,email,phone,gender,age,password}))
            window.location = "otp.html"
        }})
        .catch(err=>alert("something went"))
    }
    else{
        alert("Please fill complete form")
    }
   
})
