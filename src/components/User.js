import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0);
    const [count0] = useState(1);
    return(
        
        <div className="user-card">
            <h1>COUNT: {count}</h1>
            <h1>COUNT: {count0}</h1>
            <h1>NAME: {props.name}</h1>
            <h2>LOCATION: CHANDIGARH</h2>
            <h3>CONTACT: @lakhwinder02</h3>
        </div>
    );
};

export default User;