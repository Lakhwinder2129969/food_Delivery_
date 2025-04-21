import React from "react";

class UserClass extends React.Component{
     constructor(props){
        super(props)
        this.state = {
            count: 0,
            count0: 1,
        };

        console.log(props);
     }

    render(){
        const { name , location } = this.props;
        const {count , count0 } = this.state;
    return(
        <div className="user-card">
            <h1>COUNT: {count}</h1>
            <h1>COUNT: {count0}</h1>
            <h1>NAME: {name}</h1>
            <h2>LOCATION: {location}</h2>
            <h3>CONTACT: @lakhwinder02</h3>
        </div>
    );
}
}

export default UserClass;