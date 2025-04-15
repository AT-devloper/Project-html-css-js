function sin(){
    let Sdata={
        Name : document.querySelector("#name").value,
        Cont : document.querySelector("#cont").value,
        Email:document.querySelector("#email").value,
        City : document.querySelector("#city").value,
        Pass : document.querySelector("#pass").value,
    }

    localStorage.setItem("Sidata",JSON.stringify(Sdata));
    let user =JSON.parse(localStorage.getItem('Sidata'));

    // console.log(user);
    location.href="login.html"
    return false
}

function log(){
       let Lname = document.querySelector("#lnmgm").value
       let Lpass = document.querySelector("#lpass").value

       let user =JSON.parse(localStorage.getItem('Sidata'));

    if(user.Email==Lname&& user.Pass==Lpass){

        console.log(Lname,user.Pass)
        Swal.fire({
            title: "LogIn Complete",
            icon: "success",
            draggable: true
          });
    }
    
    else{
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter correct Email or Password",
        footer: '<a href="#">Why do I have this issue?</a>',
      });}


    location.href="landing.html"
    return false
}
