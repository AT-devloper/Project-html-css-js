function sin(){
    let sdata={
        Name : document.querySelector("#name").value,
        Email:document.querySelector("#email").value,
        City : document.querySelector("#city").value,
        Pass : document.querySelector("#pass").value,
    }

    localStorage.setItem("Sidata",JSON.stringify(sdata));
    let user =JSON.parse(localStorage.getItem('Sidata'));

    if(user.Name==""){ 

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Username",
    
        });
        
        return false;
    }
    
    else if(user.Email==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter enter email",
            });
       
        
        return false;
    }
    
    else if(!(user.Email.includes('@gmail.com'))){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter with @gmail.com",
            });
        
        return false 
    }
    
    else if(user.Pass==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter password",
        
            });
        return false 
    }

    else if(!(user.Pass.match(/[!@#$%^&*()_+]/))){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password have atleast 1 special charactor",
        
            });
        return false 
    }
    else if(pass.length>5 || pass.length<5){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password length must be 5 ",
        
            });
        return false 
    }

    Swal.fire({
        title: "Signup Complete",
        icon: "success",
        draggable: true
      });
    


    // console.log(user);

    location.href="logIn.html"
    return false
}

function log(){
       let Lname = document.querySelector("#lnmgm").value
       let Lpass = document.querySelector("#lpass").value

       let user =JSON.parse(localStorage.getItem('Sidata'));

    if(user.Email == Lname && user.Pass == Lpass){

        console.log(Lname,user.Pass)

        Swal.fire({
            title: "Login Complete",
            icon: "success",
            draggable: true
          });
    }
    
    else{
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Correct Email / Password",
      });
    return false
    }


    location.href="landing.html"
    return false
}
