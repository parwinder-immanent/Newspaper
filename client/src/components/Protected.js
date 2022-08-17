import React from 'react';
import{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 function Protected(props){
    const navigate = useNavigate();
    const {Component}=props;
   
    useEffect(() => {
      let login=localStorage.getItem('token-info');
      if(!login){
      
        navigate('/')
      }
      else{
        console.log("fdkjglfj")
      }
    
      
    });
    
    return(
       
    <div>
        <Component />
    </div>
       
    )
    }

export default Protected;