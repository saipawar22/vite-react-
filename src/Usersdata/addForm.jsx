import { useActionState } from "react";

function AddForm(){
   const handleLogin=(prevData, formData)=>{
    let name=formData.get("name");
let password=formData.get("password");
let regex=/^[A-Za-z0-9]+$/i;


   if(name.length>5){
    
   }else if(regex.test(password)){
    console.log(name ,password);
   }

   }

   

   
   const[data,action,pending]=useActionState(handleLogin)
   

    return(
        <div>
            <form action={action}>
                <input type="text"  name="name" placeholder="enter name" />
                <br /><br />
                <input type="password" name="password" placeholder="enter password" />
                <br /><br />
                <button>login</button>
            </form>
        </div>
    )
} 
export default  AddForm;