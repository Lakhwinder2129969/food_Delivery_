import React from 'react'
import User from './User';
import UserClass from './UserClass'

const About = () => {
  return (
    <div className="about">
        <h1>ABOUT US</h1>
        <h2>THIS IS REACT SERIES</h2>
        <User name= {"LAKHWINDER SINGH"}/>
        <UserClass name = {"LAKHWINDER SINGH" } location = {"CHANDIGARH "}/>
    </div>
  )
}

export default About;
