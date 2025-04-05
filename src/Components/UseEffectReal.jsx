import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';

function UseEffectReal() {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetchData();

        // const interval = setInterval(()=>{
        //     console.log("Data Fetching");
            
        // }, 2000)

        // return()=>{
        //     console.log("Clear");
        //     clearInterval(interval);
        // }

    },[])

    const fetchData = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            setUser(response.data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Conditional Rendering */}
        {users.length>0 ?(
            users.map((user) => (
                <>
                <div key={user.id}className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition-transform transform hover:scale-105">
                    {/* <h2>{user.name}</h2> */}
                    <UserList user={user}/>
                </div>
                </>
            ))
        ):(<div>No Users</div>)}
    </div>
  )
}

export default UseEffectReal