import { useEffect, useState } from "react"

export default function UpdatePatient()
{
    const[name , setName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[photo , setPhoto] = useState('');

    useEffect(()=>{
         // get data from api and update it
    } ,[])

    function PatientUpdate(e)
    {
        e.PreventDefault();
    }


    return(
        <div className="profile-edit2">
             { photo
                   ?
                   <img src={URL.createObjectURL(photo)} alt=""/>
                    :
                   <img src='/Pictures/icon2.png' alt=''/>
              }
               <input className="file" id="edit" onChange={(e) => setPhoto(e.target.files[0])} type="file"/>
               <label className="labelFile" htmlFor="edit">Edit Photo</label>
              <form onSubmit={PatientUpdate} className="profile-edit3">
                     <div className='editUser'>
                         <label htmlFor="userName">User Name:</label>
                         <input id="userName" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                     </div>
                      <div className="editEmail">
                           <label htmlFor="email">Email:</label>
                           <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                     <div className="editPassword">
                          <label htmlFor="password">Password:</label>
                          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                     </div>
                     <div className="editChange">
                          <label></label>
                          <button>Edit Account</button>
                     </div>
              </form>
        </div>
    )
}