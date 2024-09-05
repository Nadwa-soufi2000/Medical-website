import { useEffect, useState } from "react";

export default function UpdateAdmin()
{
    const[nameAdmin , setNameAdmin] = useState('');
    const[emailAdmin , setEmailAdmin] = useState('');
    const[passwordAdmin , setPasswordAdmin] = useState('');

    useEffect(() => {
        // get data from api 
    }, []);

    function AdminUpdate(e)
    {
        e.PreventDefault();
    }
    return(
            <div className="profile-edit2">
                  <form onSubmit={AdminUpdate} className="profile-edit3">
                     <div className='editUser'>
                         <label htmlFor="userName">User Name:</label>
                         <input id="userName" type="text" value={nameAdmin} onChange={(e) => setNameAdmin(e.target.value)}/>
                     </div>
                      <div className="editEmail">
                           <label htmlFor="email">Email:</label>
                           <input id="email" type="email" value={emailAdmin} onChange={(e) => setEmailAdmin(e.target.value)}/>
                      </div>
                     <div className="editPassword">
                          <label htmlFor="password">Password:</label>
                          <input id="password" type="password" value={passwordAdmin} onChange={(e) => setPasswordAdmin(e.target.value)}/>
                     </div>
                     <div className="editChange">
                          <label></label>
                          <button>Edit Account</button>
                     </div>
                </form>
          </div>
    )
}