import React from "react";
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Edit = () => {
    //  const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
   const [inpval, setInp] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    })
    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target
        setInp((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const { id } = useParams("");
    console.log(id);
    const getdata = async () => {


        const res = await fetch(`/getindividualuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        }, []);
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {

            console.log("error");
        } else {
            setInp(data);
            console.log("Get Data")
        }
    }
    useEffect(() => {
        getdata();
    },[]);

const updateuser=async(e)=>{
    e.preventDefault();
    const {name,email,age,password}=inpval;
    const res2 =await fetch(`/updateuser/${id}`,{
        method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                    name,email,age,password
            })
    });
    const data2=await res2.json();
    console.log(data2);
    if(res2.status===422||!data2){
        alert("fill the data")
    }else{
        alert("data added");
    }
}


    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">UserName </label>
                        <input type="text" class="form-control" name="name" value={inpval.name} onChange={setData} id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="text" class="form-control" name="age" value={inpval.age} onChange={setData} id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" value={inpval.email} onChange={setData} id="exampleInputPassword1" />
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" value={inpval.password} onChange={setData} id="exampleInputPassword1" />
                    </div> */}
                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Edit