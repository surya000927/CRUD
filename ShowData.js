import React from "react";
import {useState,useEffect} from "react";


function ShowData() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [pin, setPin] = useState("")
    const [dist, setDist] = useState("")
    const [id, setId] = useState()

    const [data, setData] = useState([])
    useEffect(() => {
    getUser();
    }, [])
    //console.log(data)

    function deleteData(id)
    {
          fetch(`http://localhost:5000/Product/${id}`,{
            method:'DELETE',

          }).then((result)=>{
            result.json().then((resp)=>{
            getUser();
            })
          })
        
        
    }

    function getUser(){
          fetch('http://localhost:5000/Product').then((result)=>{
              result.json().then((resp)=>{
                  setData(resp)
                  setName(resp[0].name)
                  setEmail(resp[0].email)
                  setMobile(resp[0].mobile)
                  setAddress(resp[0].address)
                  setPin(resp[0].pin)
                  setDist(resp[0].dist)
                  setId(resp[0].id)
              })
          })
      }

    function selectData(id){
        //alert(id)

       

        let item=data[id-1];
        setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile)
        setAddress(item.address)
        setPin(item.pin)
        setDist(item.dist)
        setId(item.id)

    }

    function updateData(){
        //console.log(name,email,mobile,address,pin,dist);
        let data = {name,email,mobile,address,pin,dist,id}
          //  console.log(data)
            fetch(`http://localhost:5000/Product/${id}`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },body:JSON.stringify(data)
    
              }).then((result)=>{
                result.json().then((resp)=>{
                getUser();
                })
              })
            
    }

  return (
   <>
    <div className="ShowData bg-secondary container-fluid py-4 text-center">
        
        <table className="table table-sm bg-primary table-bordered">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Pin</th>
                <th>Dist</th>
                <th>Operation</th>
                <th>Delete</th>
            </tr>
            {
                data.map((item)=>
                    <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.mobile}</th>
                <th>{item.address}</th>
                <th>{item.pin}</th>
                <th>{item.dist}</th>
                <td><button className="btn bg-warning" onClick={()=>selectData(item.id)}>EDIT</button></td>
                <td><button className="btn bg-danger"  onClick={()=>deleteData(item.id)}>DELETE</button></td>
            </tr>
                )
            }
        </table>
      
        <div className="App bg-secondary container-fluid py-4">
      <div className="text-center"  >
      <h2 >Update Data</h2>
      <from className="from-control">
        Name: <br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>  <br/>
        Email: <br/>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        Mobile: <br/>
        <input type="number"value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br/>
        Address: <br/>
        <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/> <br/>
        Pin Code: <br/>
        <input type="number" value={pin} onChange={(e)=>{setPin(e.target.value)}}/> <br/>
        Dist: <br/>
        <input type="text" value={dist} onChange={(e)=>{setDist(e.target.value)}}/> <br/> <br/>
        <button className="btn btn-success" onClick={updateData}>UPDATE</button>
      </from>
      </div>
     
    </div>

    </div>
   </>
  );
}

export default ShowData;
