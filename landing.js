function ri(){
    let Sdata={
    pick : document.querySelector("#pl").value,
    drop : document.querySelector("#dl").value
}


localStorage.setItem("Sldata",JSON.stringify(Sdata));
let user =JSON.parse(localStorage.getItem('Sldata'));

if(user.pick==""){ 
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please Enter pickup location",

  });
    // alert("Enter pickup location")
    
    return false;
}
else if(user.drop==""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter drop location",
    
      });

    
    // alert("Enter drop location")
   
    return false;
}


location.href="boking.html"
return false;

}



