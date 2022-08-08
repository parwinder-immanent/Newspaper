import React from "react"
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent'


const Detail = () => {


    return (
        <div className="container mt-3">
            <h1 style={{fontWeight:400}}>welcome abc</h1>
            <Card sx={{minWidth:275}}>
                <CardContent>
                    <div className="left_view">
                        <img src="/profile.png" style={{width:50}} alt="profile"/>
                        <h3 className="mt-3">Name: <span style={{fontWeight:400}}>Harsh </span></h3>
                        <h3 className="mt-3">Age: <span>45 </span></h3>
                        <p> Email:<span>Harsh@gmal.ocm</span></p>
                    </div>
                    <div className="right_view col-lg-6 col-md-6 col-12">
                        <div className=".add_btn">
                        <button className="btn btn-primary mx-2">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </div> 
                    </div>
                </CardContent>
            </Card>
        </div>
    )

}
export default Detail