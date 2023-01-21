let token = sessionStorage.getItem("token")
let products = []
let soldData = []
document.querySelector("#name").innerText = sessionStorage.getItem("username")
document.querySelector("#name").addEventListener("click",()=>{
    sessionStorage.clear()
    window.location = "index.html"
})
document.querySelector("#users").addEventListener("click",()=>{
    document.querySelector("#producttable").style.display = "none"
    document.querySelector("#usertable").style.display = "block"
    document.querySelector("#soldtable").style.display = "none"
    document.querySelector("#revenue").style.display = "none"
    document.querySelector("#editUser").style.display = "none"
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/`,{
            headers:{
                "Authorization":token
            }
    })
    .then(res=>res.json())
    .then(data=>display(data))
    .catch(err=>alert("something went"))
})

function display(data){
    let newCart = data.map(ele=>{
        let add = "Houseno:"+ ele.address.houseno+","+ "City:" +ele.address.city+",\n"+ "Street:"+ele.address.street+", "+"Pincode:"+ele.address.pincode+"."
        return `
            <tr class ="userrow" data-id = ${ele._id}>
                <td data-id = ${ele._id} class="userid">${ele._id}</td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.phone}</td>
                <td>${ele.age}</td>
                <td>${ele.gender}</td>
                <td>${add}</td>
            </tr>
        `
   })
   document.querySelector("#userBody").innerHTML = newCart.join("")
   let allUsers = document.querySelectorAll(".userrow")
   for(let user of allUsers){
    user.addEventListener("click",()=>{
        document.querySelector("#producttable").style.display = "none"
        document.querySelector("#usertable").style.display = "none"
        document.querySelector("#soldtable").style.display = "none"
        document.querySelector("#revenue").style.display = "none"
        document.querySelector("#editUser").style.display = "block"

        editUser(user.dataset.id)
    })
   }
}

function editUser(id){
    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/?_id=${id}`,{
        headers:{
            "Authorization":token
        }
})
        .then(res=>res.json())
        .then(data=>{
            let newData = data.map(ele=>{
            let add = "Houseno:"+ ele.address.houseno+","+ "City:" +ele.address.city+",\n"+ "Street:"+ele.address.street+", "+"Pincode:"+ele.address.pincode+"."

               return `
               <div class = "userDetails">
               <label for="">Name:-</label>
               <input type="text" class="name" value= "${ele.name}" data-id =${ele._id} readonly> <br><br>
               <label for="">Email:-</label>
               <input type="text" class="email" value= "${ele.email}"  data-id =${ele._id} readonly> <br><br>
               <label for="">Phone:-</label>
               <input type="text" class="phone" value= "${ele.phone}" data-id =${ele._id} readonly> <br><br>
               <label for="">Age:-</label>
               <input type="text" class="age" value= "${ele.age}" data-id =${ele._id} readonly> <br><br>
               <label for="">Gender:-</label>
               <input type="text" class="gender" value= "${ele.gender}" data-id =${ele._id} readonly>  <br><br>
               <button class = "delete" data-id = ${ele._id}>Delete</button>
               <button class = "edit" data-id = ${ele._id}>EDIT</button>
               </div>`
            })
            document.querySelector("#editUser").innerHTML = newData.join("")
            document.querySelector(".edit").addEventListener("click",()=>{
                let ID = document.querySelector(".edit").dataset.id
                if(document.querySelector(".edit").innerText == "EDIT"){
                    let inputs = document.querySelectorAll("input")
                    for(let input of inputs){
                        input.addEventListener("click",()=>{
                            input.removeAttribute("readOnly")
                        })
                    }
                    document.querySelector(".edit").innerText = "SAVE"
                }
                else{
                    document.querySelector(".edit").innerText = "EDIT"
                    let name = document.querySelector(".name").value
                    let email = document.querySelector(".email").value
                    let phone = document.querySelector(".phone").value
                    let gender = document.querySelector(".gender").value
                    let age = document.querySelector(".age").value
                   
                    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/address/${ID}`,{
                        method:"PATCH",
                        body:JSON.stringify({name,email,phone,gender,age}),
                        headers:{
                            "Content-type":"application/json",
                            "Authorization":token
                        }
                    }).then(res=>res.json())
                    .then(data=>{alert("Edited Succesfully")})
                    .catch(err=>alert("Please try again"))
                }
            })
           
            document.querySelector(".delete").addEventListener("click",()=>{
                let ID = document.querySelector(".delete").dataset.id
                console.log(ID)
                fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/delete/${ID}`,{
                            method:"DELETE",
                            headers:{
                                "Content-type":"application/json",
                                "Authorization":token
                            }
                        }).then(res=>res.json())
                        .then(data=>{alert("Deleted Succesfully")})
                        .catch(err=>alert("Please try again"))
                    })
        })
        .catch(err=>alert("something went"))
       
}



document.querySelector("#products").addEventListener("click",()=>{
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "none"
    document.querySelector("#producttable").style.display = "block"
    document.querySelector("#revenue").style.display = "none"
    document.querySelector("#editUser").style.display = "none"

    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product`,{
            headers:{
                "Authorization":token
            }
    })
    .then(res=>res.json())
    .then(data=>displayproduct(data))
    .catch(err=>alert("something went"))
})
                    
function displayproduct(data){
    let newCart = data.map(ele=>{
        return `
            <tr class ="productrow" data-id = ${ele._id}>
                <td>${ele._id}</td>
                <td data-id = ${ele._id}>${ele.name}</td>
                <td><img src="${ele.image[0]}" alt=""></td>
                <td>${ele.rating}</td>
                <td style="text-align: justify;">${ele.des}</td>
                <td>Rs.${ele.price}</td>
                <td>${ele.category}</td>
            </tr>
        `
   })
   document.querySelector("#productBody").innerHTML = newCart.join("")
}


document.querySelector("#sell").addEventListener("click",()=>{
    products = []
    soldData = []
    document.querySelector("#producttable").style.display = "none"
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "block"
    document.querySelector("#revenue").style.display = "block"
    document.querySelector("#editUser").style.display = "none"

    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/purchase/`,{
            headers:{
                "Authorization":token
            }
    })
    .then(res=>res.json())
    .then(data=>displaysell(data))
    .catch(err=>alert("something went"))
})

function displaysell(data){
    let total = 0
    data.map(ele=>{
        total += Number(ele.payment.total)
        console.log(total)
        products.push(...ele.productId)
    })
   displaySoldData(products,total)
}
function displaySoldData(data,total){
    data.map(ele=>{
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/?_id=${ele}`,{
            headers:{
                "Authorization":token
            }
    })
    .then(res=>res.json())
    .then(data=>{soldData.push(data[0])
        renderData(soldData,total)
    })
    .catch(err=>alert("something went"))
    })
}

function renderData(data,total){
    let newData = data.map(ele=>{
        return `
            <tr class ="soldrow" data-id = ${ele._id}>
                <td>${ele._id}</td>
                <td data-id = ${ele._id}>${ele.name}</td>
                <td><img src="${ele.image[0]}" alt=""></td>
                <td>Rs.${ele.price}</td>
                <td>${ele.category}</td>
            </tr>
        `
    })
    document.querySelector("#soldBody").innerHTML = newData.join("")
    document.querySelector("#total").innerText = `Rs.${total}`
}