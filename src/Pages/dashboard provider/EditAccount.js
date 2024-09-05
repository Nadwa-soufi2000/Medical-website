import { useState } from "react"

export default function EditAccount()
{
    const[photo , setPhoto] = useState('');
     
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
             <form className="profile-edit3">
                <div className='editUser'>
                    <label htmlFor="userName">User Name:</label>
                    <input id="userName" type="text"/>
                </div>
                <div className="editEmail">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email"/>
                </div>
                <div className="editPassword">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password"/>
                </div>
                <div className="editBankName">
                    <label htmlFor="bankName">Bank Name:</label>
                    <input id="bankName" type="text"/>
                </div>
                <div className="editIbanCode">
                    <label htmlFor="iban">Iban Code:</label>
                    <input id="iban" type="text"/>
                </div>
                <div className="editSwift">
                    <label htmlFor="7">Swift code</label>
                       <div className="editSwift-ineer">
                          <div className="editSwift-ineer2">
                                <input  
                                   type="text" 
                                    id="7"  
                                 />
                                 <input 
                                    type="text" 
                                    id="7" 
                                 />
                                 <input 
                                    type="text" 
                                    id="7"
                                 />
                                 <input 
                                    type="text" 
                                    id="7" 
                                 />
                          </div>
                     </div>
                </div>
                 <div className="pdf22">
                    <label className="esn22" >Pdf file:</label>
                     <input id="8" type="file"/>
                     <label htmlFor='8' className="appe22">Upload</label>
                 </div>
                <div className="editChange">
                   <label></label>
                   <button>Edit Account</button>
                </div>
        </form>

        </div>
    )
}