import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
    const loadedUsers = useLoaderData();
    // for set others
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) =>{

        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/user/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully')
                // remove the user from UI
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
    }
    return (
        <div>
            <h3>Users:{loadedUsers.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            users.map(user =>  <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button 
                                    onClick={()=> handleDelete(user._id)} 
                                    className="btn"
                                    >X</button>
                                </td>
                            </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;