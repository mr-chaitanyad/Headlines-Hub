import React, { useState } from 'react'
import data from './data.json';

export default function Form() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      name,
      role,
    };

    setUsers([...users, newUser]);
    setName('');
    setRole('');
    console.log('User added:', newUser);
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
      <input type='text'
      name='t1' id='t1'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter Name'
      />
      
      <input type='text'
      name='t2' id='t2'
      value={role}
      onChange={(e)=>setRole(e.target.value)}
      placeholder='Enter Role'
      />
      <input type="submit" />
      </form>
      <ul>{
        users.map((member)=>{
            return <li key={member.id}>{member.id+" "+member.name+" "+member.role}</li>
        })
    }</ul>
    </div>
  )
}
