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
    document.querySelector("#usermoredet").style.display = "none"
    document.querySelector("#fillproducts").style.display = "none"
    document.querySelector("#productDetails").style.display = "none"
    document.querySelector("#usermore2").style.display = "none"
    

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
        document.querySelector("#usermoredet").style.display = "none"
        document.querySelector("#fillproducts").style.display = "none"
        document.querySelector("#productDetails").style.display = "none"
        document.querySelector("#usermore2").style.display = "none"

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
               <label for="">HouseNo:-</label>
               <input type="text" class="houseno" value= "${ele.address.houseno}" data-id =${ele._id} readonly>  <br><br>
               <label for="">Landmark/Street:-</label>
               <input type="text" class="street" value= "${ele.address.street}" data-id =${ele._id} readonly>  <br><br>
               <label for="">City:-</label>
               <input type="text" class="city" value= "${ele.address.city}" data-id =${ele._id} readonly>  <br><br>
               <label for="">Pincode:-</label>
               <input type="text" class="pincode" value= "${ele.address.pincode}" data-id =${ele._id} readonly>  <br><br>
               <button class = "delete" data-id = ${ele._id}>Delete</button>
               <button class = "edit" data-id = ${ele._id}>Edit</button>
               <button class = "more" data-id = ${ele._id}>More</button>
               </div>`
            })
            document.querySelector("#editUser").innerHTML = newData.join("")
            document.querySelector(".edit").addEventListener("click",()=>{
                let ID = document.querySelector(".edit").dataset.id
                if(document.querySelector(".edit").innerText == "Edit"){
                    let inputs = document.querySelectorAll("input")
                    for(let input of inputs){
                        input.addEventListener("click",()=>{
                            input.removeAttribute("readOnly")
                        })
                    }
                    document.querySelector(".edit").innerText = "Save"
                }
                else{
                    document.querySelector(".edit").innerText = "Edit"
                    let name = document.querySelector(".name").value
                    let email = document.querySelector(".email").value
                    let phone = document.querySelector(".phone").value
                    let gender = document.querySelector(".gender").value
                    let age = document.querySelector(".age").value
                    let pincode = document.querySelector(".pincode").value
                    let city = document.querySelector(".city").value
                    let street = document.querySelector(".street").value 
                    let houseno = document.querySelector(".houseno").value
                   
                    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/user/address/${ID}`,{
                        method:"PATCH",
                        body:JSON.stringify({name,email,phone,gender,age,address:{pincode,city,street,houseno}}),
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
            document.querySelector(".more").addEventListener("click",async()=>{
                let userProduct = []
                let ID = document.querySelector(".more").dataset.id
                await fetch(`https://prussian-blue-butterfly-wig.cyclic.app/purchase/?userId=${ID}`,{
                    headers:{
                        "Authorization":token
                    }
                    }).then(res=>res.json())
                    .then(data=>{userMorePurchaseDetails(data)})
                    .catch(err=>console.log(err))})
        })
        .catch(err=>alert("something went"))
       
}



document.querySelector("#products").addEventListener("click",()=>{
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "none"
    document.querySelector("#producttable").style.display = "block"
    document.querySelector("#revenue").style.display = "none"
    document.querySelector("#editUser").style.display = "none"
    document.querySelector("#usermoredet").style.display = "none"
    document.querySelector("#fillproducts").style.display = "none"
    document.querySelector("#productDetails").style.display = "none"
    document.querySelector("#usermore2").style.display = "none"


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
   let allProducts = document.querySelectorAll(".productrow")
   for(let product of allProducts){
    product.addEventListener("click",()=>{
        document.querySelector("#usertable").style.display = "none"
        document.querySelector("#soldtable").style.display = "none"
        document.querySelector("#producttable").style.display = "none"
        document.querySelector("#revenue").style.display = "none"
        document.querySelector("#editUser").style.display = "none"
        document.querySelector("#usermoredet").style.display = "none"
        document.querySelector("#fillproducts").style.display = "none"
        document.querySelector("#productDetails").style.display = "block"
        document.querySelector("#usermore2").style.display = "none"

        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/?_id=${product.dataset.id}`,{
            headers:{
                "Authorization":token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let proDetails = `
            <div id="product" data-id=${product.dataset.id}>
                <p>Product Name:-</p>
                <textarea readonly data-id=${product.dataset.id} id="editedname">${data[0].name}</textarea> <br><br>
                
                <p>Images:-</p>
                <textarea readonly data-id=${product.dataset.id} id="editedurl">${data[0].image.join("\n")}</textarea> <br><br>

                <p>Category:-<p>
                <textarea readonly data-id=${product.dataset.id} id="editedcategory">${data[0].category}</textarea> <br><br>

                <p>Ratings:-<p>
                <textarea readonly data-id=${product.dataset.id} id="editedratings">${data[0].rating}</textarea> <br><br>

                <p>Price:-<p>
                <textarea readonly data-id=${product.dataset.id} id="editedprice">${data[0].price}</textarea> <br><br>

                <p>Desctription:-<p>
                <textarea readonly data-id=${product.dataset.id} id="editeddes">${data[0].des}</textarea> <br><br>

                <button id="editPro" data-id=${product.dataset.id}>Edit</button>
                <button id="deletePro" data-id=${product.dataset.id}>Delete</button>

            </div>` 
            document.querySelector("#productDetails").innerHTML = proDetails
            document.querySelector("#editPro").addEventListener("click",()=>{
                let ID = document.querySelector("#editPro").dataset.id
                if(document.querySelector("#editPro").innerText == "Edit"){
                    let inputs = document.querySelectorAll("textarea")
                    for(let input of inputs){
                        input.addEventListener("click",()=>{
                            input.removeAttribute("readOnly")
                        })
                    }
                    document.querySelector("#editPro").innerText = "Save"
                }
                else{
                    document.querySelector("#editPro").innerText = "Edit"
                    let name = document.querySelector("#editedname").value
                    let image = document.querySelector("#editedurl").value.split("\n")
                    let des = document.querySelector("#editeddes").value
                    let category = document.querySelector("#editedcategory").value
                    let price = document.querySelector("#editedprice").value
                    let rating = document.querySelector("#editedratings").value
                    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/update/${ID}`,{
                        method:"PATCH",
                        body:JSON.stringify({name,image,des,category,price,rating}),
                        headers:{
                            "Content-type":"application/json",
                            "Authorization":token
                        }
                    }).then(res=>res.json())
                    .then(data=>{alert("Edited Succesfully")})
                    .catch(err=>alert("Please try again"))
                }
            })
            document.querySelector("#deletePro").addEventListener("click",()=>{
                let ID = document.querySelector("#deletePro").dataset.id
                fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/delete/${ID}`,{
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
    })
   }
}

document.querySelector("#sell").addEventListener("click",()=>{
    products = []
    soldData = []
    document.querySelector("#producttable").style.display = "none"
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "block"
    document.querySelector("#revenue").style.display = "block"
    document.querySelector("#editUser").style.display = "none"
    document.querySelector("#usermoredet").style.display = "none"
    document.querySelector("#fillproducts").style.display = "none"
    document.querySelector("#productDetails").style.display = "none"
    document.querySelector("#usermore2").style.display = "none"

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

function  userMorePurchaseDetails(data){
    console.log(data)
    document.querySelector("#producttable").style.display = "none"
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "none"
    document.querySelector("#revenue").style.display = "none"
    document.querySelector("#editUser").style.display = "none"
    document.querySelector("#usermoredet").style.display = "block"
    document.querySelector("#fillproducts").style.display = "none"
    document.querySelector("#productDetails").style.display = "none"
    document.querySelector("#usermore2").style.display = "none"
   
    let newData = data.map(ele=>{
        return `
        <div class="activity">
            <p>Purchase Date:-${ele.Date}</p>
            <p>Card Details:-${ele.payment.card}</p>
            <p>Card Expiry Date:-${ele.payment.date}</p>
            <p>Total Bill:-${ele.payment.total}</p>
            <button class="see" data-id="${ele.productId}">See users product</button>
        </div>`
    })
    document.querySelector("#usermore1").innerHTML = newData.join(" ")
    let userProducts = document.querySelectorAll(".see")
    for(let products of userProducts){
        products.addEventListener("click",()=>{
        document.querySelector("#usermore2").style.display = "block"
            let boughtProductsList = []
            let boughtProducts = products.dataset.id.split(",")
            boughtProducts.map(ele=>{
                    fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/?_id=${ele}`,{
                        headers:{
                            "Authorization":token
                        }
                    })
                    .then(res=>res.json())
                    .then(data=>{boughtProductsList.push(data[0])
                        boughtProductsShow(boughtProductsList)
                    })
                    .catch(err=>alert("something went"))
                })
               
            })
    }
}
function boughtProductsShow(data){
    let renderBoughtProducts=data.map(ele=>{
        return `
            <tr class ="boughtPro" data-id = ${ele._id}>
                <td>${ele._id}</td>
                <td data-id = ${ele._id}>${ele.name}</td>
                <td><img src="${ele.image[0]}" alt=""></td>
                <td>${ele.rating}</td>
                <td style="text-align: justify;">${ele.des}</td>
                <td>Rs.${ele.price}</td>
                <td>${ele.category}</td>
            </tr>`
        })
            document.querySelector("#bought").innerHTML = renderBoughtProducts.join(" ")

}



document.querySelector("#addProduct").addEventListener("click",()=>{
    document.querySelector("#producttable").style.display = "none"
    document.querySelector("#usertable").style.display = "none"
    document.querySelector("#soldtable").style.display = "none"
    document.querySelector("#revenue").style.display = "none"
    document.querySelector("#editUser").style.display = "none"
    document.querySelector("#usermoredet").style.display = "none"
    document.querySelector("#fillproducts").style.display = "block"
    document.querySelector("#productDetails").style.display = "none"
    document.querySelector("#usermore2").style.display = "none"

    let productForm = `
        <div id="productForm">
            <label>Product Name:-<label>
            <input type="text" placeholder="Enter Product Name" id="proName"> <br><br>

            <p>Images:-</p>
            <textarea placeholder="enter image url on new line" rows="15" cols="30" id='img_url'></textarea> <br><br>

            <label>Category:-<label>
            <input type="text" placeholder="Enter Product Category" id="procategory"> <br><br>

            <label>Ratings:-<label>
            <input type="text" placeholder="Enter Product Ratings" id="proratings"> <br><br>

            <label>Price:-<label>
            <input type="text" placeholder="Enter Product Price" id="proprice"> <br><br>

            <label>Desctription:-<label>
            <input type="text" placeholder="Enter Product Desctription" id="prodes"> <br><br>

            <button id="addproduct">Add</button>
        </div>`
    document.querySelector("#fillproducts").innerHTML = productForm
    document.querySelector("#addproduct").addEventListener("click",()=>{
        let name = document.querySelector("#proName").value
        let image = document.querySelector("#img_url").value.split("\n")
        let des = document.querySelector("#prodes").value
        let category = document.querySelector("#procategory").value
        let price = document.querySelector("#proprice").value
        let rating = document.querySelector("#proratings").value
        fetch(`https://prussian-blue-butterfly-wig.cyclic.app/product/create`,{
            method:"POST",
            body:JSON.stringify({name,image,des,category,price,rating}),
            headers:{
                "Content-type":"application/json",
                "Authorization":token
            }
        })
        .then(res=>res.json())
        .then(data=>{alert("Product added succesfully")
        document.querySelector("#proName").value = ""
        document.querySelector("#img_url").value = ""
        document.querySelector("#prodes").value = ""
        document.querySelector("#procategory").value = ""
        document.querySelector("#proprice").value = ""
        document.querySelector("#proratings").value = ""
    })
        .catch(err=>alert("Please try again"))
    })
})