function sin(){
    let Sdata={
        Name : document.querySelector("#name").value,
        Cont : document.querySelector("#cont").value,
        Email :document.querySelector("#email").value,
        City : document.querySelector("#city").value,
        Age : document.querySelector("#age").value,
        Gen : document.querySelector("#gender").value,
        Uname:document.querySelector("#uname").value,
        Pass : document.querySelector("#pass").value,
    }

    localStorage.setItem("Sidata",JSON.stringify(Sdata));
    let user =JSON.parse(localStorage.getItem('Sidata'));

    console.log(user);

    location.href="login.html"
    return false
}

function log(){
       let Lname = document.querySelector("#lnmgm").value
       let Lpass = document.querySelector("#lpass").value

       let user =JSON.parse(localStorage.getItem('Sidata'));

    if(user.Email==Lname&& user.Pass==Lpass){

        console.log(Lname,user.Pass)
        alert("WELCOME USER");
    }
    
    else{alert("fill correct email or passward")}
    return false
}
