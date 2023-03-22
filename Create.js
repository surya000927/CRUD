import { Fragment } from "react";
import { useState } from "react";

function Create() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [pin, setPin] = useState("")
    const [dist, setDist] = useState("")

    function saveData(){
        let data={name,mobile,address,pin,dist,email}
        // console.log(data)
        fetch('http://localhost:5000/Product',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },body:JSON.stringify(data)

        }).then((result)=>{
            result.json().then((resp)=>{
               
            })
        })
        window.location.reload();
    }
    
  return (
   <>
    <div className="App bg-secondary container-fluid py-4">
      <div className="text-center">
      <h2 >Insert Data From Here</h2>
      <from className="from-control">
        Name: <br/>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>  <br/>
        Email: <br/>
        <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        Mobile: <br/>
        <input type="number"  onChange={(e)=>{setMobile(e.target.value)}}/> <br/>
        Address: <br/>
        <input type="text"  onChange={(e)=>{setAddress(e.target.value)}}/> <br/>
        Pin Code: <br/>
        <input type="number"  onChange={(e)=>{setPin(e.target.value)}}/> <br/>
        Dist: <br/>
        <input type="text"  onChange={(e)=>{setDist(e.target.value)}}/> <br/> <br/>
        <button className="btn btn-success" onClick={saveData}>Submit</button>
      </from>
      </div>
     
    </div>
   </>
  );
}

export default Create;
