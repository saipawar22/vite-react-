import { useState } from "react";

function AddUser(){
const[name,setName]=useState("");
const[age,setAge]=useState("");
const[email,setEmail]=useState("");

const createUser=async()=>{
    console.log(name,age,email);
    const url ="http://localhost:3000/users"
    const response =await fetch(url,{
        method: "Post",
        body: JSON.stringify({ name, age, email })
    });
    const data = await response.json();
   
    if(data){
        alert("User added successfully");
    }

}



    return(
        <div>
            <h1>Add newUser</h1>
    <input type="text"onChange=
        {(event)=>setName(event.target.value)}  placeholder=" enter name"/>
    <br/><br/>
        <input type="text" onChange=
        {(event)=>setAge(event.target.value)}  placeholder=" enter age"/>
         <br/><br/>
            <input type="text" onChange=
            {(event)=>setEmail(event.target.value)}  placeholder=" enter email"/>
             <br/><br/>
             <button onClick={createUser}>Add User</button>
        </div>
    )
} 
export default AddUser;