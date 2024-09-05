import { useState } from "react";

export default function EditPatientFromAdmin()
{
    const[userName , setUserName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[Reason , setReason] = useState('');


  return(
              
    <form className="profile-edit3">
        <div className='editUser'>
            <label htmlFor="userName">User Name:</label>
            <input id="userName" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="editEmail">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="editPassword">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
         <div className="editReason">
            <label htmlFor="iban">Edit reason:</label>
            <input id="iban" type="text" value={Reason} onChange={(e) => setReason(e.target.value)}/>
        </div>
        <div className="editChange">
           <label></label>
           <button>Edit</button>
        </div>
    </form>

    )
}