function ri(){
    let Sdata={
    pick : document.querySelector("#pl").value,
    drop : document.querySelector("#dl").value
}

localStorage.setItem("Sldata",JSON.stringify(Sdata));



location.href="boking.html"
return false

}


function book(){
    let user =JSON.parse(localStorage.getItem('Sldata'));

    let bpick=document.querySelector("#pic");
    bpick.innerHTML=document.querySelector(user.pick);

    let bdro=document.querySelector("#dro");
    bdro.innerHTML=document.querySelector(user.drop);

    
return false
}



