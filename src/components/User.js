import React from 'react'
import './style.css';
const User = ({user}) => {
   
    return (
        <div className="main">
            <h3 className="name"><strong>Name: {user.first_name} {user.last_name}</strong></h3>
            <p className="email"><strong>Email: {user.email}</strong></p>
            <img key={user.avatar} src={user.avatar} alt="user_pic"/>
            
        </div>
    )
}

export default User
