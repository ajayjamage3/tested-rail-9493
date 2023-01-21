let userId = sessionStorage.getItem("userId")
let token = sessionStorage.getItem("token")
document.querySelector("#proceed").addEventListener("click",()=>{
    let pincode = document.querySelector("#pincode").value
    let city = document.querySelector("#city").value
    let street = document.querySelector("#street").value + "," + document.querySelector("#homeadd").value
    let houseno = document.querySelector("#houseno").value
    if(pincode !== "" && city !== "" && street !== "" && houseno !=="" ){
        console.log({pincode,city,street,houseno})
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/address/${userId}`,{
            method:"PATCH",
            body:JSON.stringify({address:{pincode,city,street,houseno}}),
            headers:{
                "Content-type":"application/json",
                "Authorization":token
            }
        }).then(res=>res.json())
        .then(data=>{alert("address added succesfully")
            sessionStorage.setItem("address",JSON.stringify({pincode,city,street,houseno}))
            history.back()
        })
        .catch(err=>alert("Please try again"))
    }
    else{
        alert("All fields are required")
    }
   
})


