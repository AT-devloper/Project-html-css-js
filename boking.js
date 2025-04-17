
// function ok(){

// let ddata={
//     name : document.querySelector("#nam").value,
//     cont : document.querySelector("#con").value
// }

// localStorage.setItem("Sddata",JSON.stringify(ddata));
// let deta =JSON.parse(localStorage.getItem('Sddata'));

// if(deta.name==""){ 

//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please Enter Name",

//     });
    
//     return false;
// }

// else if(deta.cont==""){
//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please Enter contact number",
//         });
//     // alert("Enter drop location")
    
//     return false;
// }

// else if(isNaN(deta.cont)){
//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please Enter Contact in number",
    
//         });
    
//     return false 
// }

// else if(deta.cont.length>10 || deta.cont.length<10){
//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please Enter 10 digit number",
    
//         });
//     return false 
// }

// Swal.fire({
//     title: "Booking Complete",
//     icon: "success",
//     draggable: true
//   });


//   return false
// }


let fetchData=async()=>{

let url="http://localhost:3000/user"
let respo=await fetch(url,{method:"GET"})
let data=await respo.json()
console.log(data);


let fil=document.querySelector("#datafile")

data.map((e)=>{
fil.innerHTML+=`

<tr>
<td>${e.name}</td>
<td>${e.contact}</td>

<td onclick="Del('${e.id}')">Del</td>

<td onclick="Fifi('${e.id}')">Edit</td>

</tr>

`
})}

let Del=(id)=>{
let url=`http://localhost:3000/user/${id}`
fetch(url,{method:"DELETE"})
location.reload()
}

let book=()=>{

let inpname = document.querySelector('#nam').value
let inpcont = document.querySelector('#con').value


let ddata={
    name : document.querySelector("#nam").value,
    cont : document.querySelector("#con").value
}

localStorage.setItem("Sddata",JSON.stringify(ddata));
let deta =JSON.parse(localStorage.getItem('Sddata'));

if(deta.name==""){ 

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Name",

    });
    
    return false;
}

else if(deta.cont==""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter contact number",
        });
    // alert("Enter drop location")
    
    return false;
}

else if(isNaN(deta.cont)){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Contact in number",
    
        });
    
    return false 
}

else if(deta.cont.length>10 || deta.cont.length<10){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter 10 digit number",
    
        });
    return false 
}

Swal.fire({
    title: "Booking Complete",
    icon: "success",
    draggable: true
  });

let url="http://localhost:3000/user"

fetch(url,{
    method:"POST",
    headers :{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "name":inpname,
        "contact":inpcont,

    })
})



location.href="show.html"
return false
}

let Fifi=async(id)=>{
let url=`http://localhost:3000/user/${id}`
let response=await fetch(url,{methood:"GET"})
let data = await response.json()

console.log(data);

let fomdt = document.querySelector("#showdata")
fomdt.innerHTML = `
<br><br>
Name : <input type="text" id="upname" value="${data.name}"> Contact : <input type="text" id="upcont" value="${data.contact}"><br><br>
<input type="submit" id="bt" value="Edited" onclick="return Fup('${data.id}')">
`
}

let Fup = (id)=>{
let inpname = document.querySelector('#upname').value
let inpcont = document.querySelector('#upcont').value

let url=`http://localhost:3000/user/${id}`

fetch(url,{
    method:"PUT",
    headers :{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "name":inpname,
        "contact":inpcont,

    })
});
location.reload()
}
