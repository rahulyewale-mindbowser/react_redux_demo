import React from 'react'

export const User = ({users}) => {
  return (
    <div>
        <h1>Users List </h1>
        <table border="1" align='center'>
            <thead>
                <tr>
                    <th> UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            {
                users.map((user,index)=>(
                    <tbody key={index}>
                        <tr>
                            <td >{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    </div>
  )
}
