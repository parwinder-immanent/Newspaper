import React  from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Navbaar3 from './HomeNav'

const Register = () => {

    const [inpval,setInp]=useState({
        name:"",
        age:"",
        email:"",
        password:""
    })






    const setData=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target
        setInp((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    const addinpdata =async(e)=>{
            e.preventDefault();
            const{name,email,age,password}=inpval;

        const res =await fetch("/register",{
            method:"POST",
            headers:{
                  "Content-Type":"application/json"  
                    },
                    body:JSON.stringify({
                    name,email,age,password            
                    })
        });
        const data =await res.json();
        console.log(data);
        if(res.status===422 || !data){
            alert("error");
            console.log("error");
        }else{
            alert("data added")
            console.log("dataadded")
        }
    }

    return (
        <div className="container">
            <Navbaar3/>
            <NavLink to="/login">home</NavLink>
            <form className='mt-4'>
                
                <div className='row'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">UserName </label>
                    <input type="text" class="form-control" name="name" value={inpval.name} onChange={setData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" class="form-control" name="age"  value={inpval.age} onChange={setData} id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" value={inpval.email} onChange={setData} id="exampleInputPassword1" />
                </div><div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value={inpval.password} onChange={setData} id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register