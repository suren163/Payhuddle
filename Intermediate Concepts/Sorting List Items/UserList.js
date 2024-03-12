import React, { useState } from 'react'

const UserList = ({data}) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const handleSort=(criteria)=>{
        if(sortBy === criteria)
        {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        }
        else
        {
            setSortBy(criteria);
            setSortOrder('asc');
        }
    }
    const sortedBy = [...data].sort((a, b)=>{
        if(sortBy === 'name')
        {
            return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        else
        {
            return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
        }
        return 0;
    })
  return (
    <div
    style={{
        margin: '3rem',
        border: '3px solid green',
        borderRadius: '1rem',
        padding: '3rem',
        fontSize: '1.3rem',
      }}
>
        <h1>User Data</h1>
        <button onClick={()=>handleSort('name')} style={{marginRight:'1.3rem'}}>Sort by Name</button>
        <button onClick={()=>handleSort('age')}>Sort by Age</button>
        {sortedBy.map((user) => (
            <ul>
                <li>{user.name} - {user.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList