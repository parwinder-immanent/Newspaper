import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [inpval, setInp] = useState({

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

    const submitData = async (e) => {
        e.preventDefault();
        const { email, password } = inpval;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 404 || !data.email) {

            alert("error");
            console.log("error");

        }
        else {
            alert(" Login successful")
            console.log("login sucessfull")
        }
    }
    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    {/* <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">UserName </label>
                    <input type="text" class="form-control" name="name" value={inpval.name} onChange={setData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" class="form-control" name="age"  value={inpval.age} onChange={setData} id="exampleInputPassword1" />
                </div> */}
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" value={inpval.email} onChange={setData} id="exampleInputPassword1" />
                    </div><div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" value={inpval.password} onChange={setData} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={submitData} class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login