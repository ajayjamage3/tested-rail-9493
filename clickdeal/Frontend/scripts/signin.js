document.querySelector("#button").addEventListener("click",()=>{
    event.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    console.log({email,password})
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/login`,{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json())
    .then(data=>{if(data){
        console.log(data.userId[0])
        sessionStorage.setItem("token",data.token)
        sessionStorage.setItem("userId",data.userId[0]._id)
        sessionStorage.setItem("username",data.userId[0].name)
        if(email == "ajay@gmail.com"){
            alert("Alert Detected admin email redirecting to admin page")
            window.location = "admin.html"
        }
        else{
            alert("Logged in")
            window.location = "index.html"
        }
    }})
    .catch(err=>alert("Wrong username or password"))
})

document.querySelector("#button").addEventListener("click",()=>{
    event.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    console.log({email,password})
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/login`,{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json())
    .then(data=>{if(data){
        console.log(data.userId[0])
        sessionStorage.setItem("token",data.token)
        sessionStorage.setItem("userId",data.userId[0]._id)
        sessionStorage.setItem("username",data.userId[0].name)
        if(email == "ajay@gmail.com"){
            alert("Alert Detected admin email redirecting to admin page")
            window.location = "admin.html"
        }
        else{
            alert("Logged in")
            window.location = "index.html"
        }
    }})
    .catch(err=>alert(err))
})