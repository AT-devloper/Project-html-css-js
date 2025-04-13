function ri(){
    let Sdata={
    pick : document.querySelector("#pl").value,
    drop : document.querySelector("#dl").value
}

localStorage.setItem("Sldata",JSON.stringify(Sdata));

let user =JSON.parse(localStorage.getItem('Sldata'));
return false

}