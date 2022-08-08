import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary"> Add data</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Password</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className="d-flex justify-content-between"> 
                                <button className="btn btn-success">Read</button>
                                <button className="btn btn-primary">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home