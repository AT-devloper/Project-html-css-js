
let fetchData= async()=>{

    let url="http://localhost:3000/user"
   
    let res = await fetch(url,{method:"GET"})

    let data = await res.json()

    console.log(data);

    let dfile=document.querySelector("#datafile")

    data.map((e)=>{
        dfile.innerHTML+=`
        <tr>

        <td>${e.name}</td>
        <td>${e.contact}</td>
        <td onclick="Del('${e.id}')"> Delete </td>
        <td onclick="Ffill('${e.id}')"> Edit </td>
        
        </tr>
        
        `}
    )}

    let Del=(id)=>{
            let url=`http://localhost:3000/user/${id}`
            fetch(url,{method:"DELETE"})
    }



    let book=()=>{

        let inpname = document.querySelector('#nam').value
        let inpcont = document.querySelector("#con").value
      
        
      
        let url="http://localhost:3000/user"

        fetch(url ,{
            method :"POST",
            headers :{
                "Content-Type":"appliction/json"
            },
            body : JSON.stringify({
                    "name": inpname ,
                    "contact": inpcont,
                    
            })
        })

        location.href="show.html"
        return false
    }

    let Ffill=async(id)=>{

      let url=`http://localhost:3000/user/${id}`
      let response=await fetch(url,{method:"GET"})
      let data=await response.json()

      console.log(data);

      let Fmdata=document.querySelector("#showdata")
      Fmdata.innerHTML=` 
      
      Name : <input type="text" id="upname" value="${data.name}"> <br><br>
     
      Contact : <input type="text" id="upcont" value="${data.contact}"> <br><br>
     
      
      <input type="submit" value="Edited" onclick="return Fupdate('${data.id}')">
    
      `

  }
  
let Fupdate =(id)=>{
      let inpname = document.querySelector('#upname').value
    
      let inpcont = document.querySelector("#upcont").value
     
      
      let url=`http://localhost:3000/user/${id}`

      fetch(url ,{
          method :"PUT",
          headers :{
              "Content-Type":"appliction/json"
          },
          body : JSON.stringify({
                  "name": inpname ,
               
                  "contact": inpcont,
               
              })
      })
}



