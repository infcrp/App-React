import React, { Component } from 'react';


const Registration= (props) =>  {

    
        const { users, xy } = props;
        console.log(xy);
        const userList = users.map(user => {
            if(user.age>40){
            return (
                <div className="register" key={user.id}>
                    <div>FirstName: {user.name} </div>
                    <div>Age: {user.age} </div>
                    <div>IsActiveUser: {user.active} </div>
                </div>
            )
            }
            else{
                return null;
            }
        })

        const userList1 = users.map(user=>{
            return user.age>45?(<div className="register" key={user.id}>
            <div>FirstName: {user.name} </div>
            <div>Age: {user.age} </div>
            <div>IsActiveUser: {user.active} </div>
        </div>):null;
        })

        return (
            <div className="usersList">
                <p> AnotherParam: {xy} </p>
            {userList1}
            </div>
        )
    
}

export default Registration;