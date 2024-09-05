import { useState } from "react"

export default function EditProviderFromAdmin()
{
    const[userName , setUserName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[BankName , setBankName] = useState('');
    const[ibanCode , setIbanCode] = useState('');
    const[swift1 , setSwift1] = useState('');
    const[swift2 , setSwift2] = useState('');
    const[swift3 , setSwift3] = useState('');
    const[swift4 , setSwift4] = useState('');
    const[pdf , setPdf] = useState('');
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
                <div className="editBankName">
                    <label htmlFor="bankName">Bank Name:</label>
                    <input id="bankName" type="text" value={BankName} onChange={(e) => setBankName(e.target.value)}/>
                </div>
                <div className="editIbanCode">
                    <label htmlFor="iban">Iban Code:</label>
                    <input id="iban" type="text" value={ibanCode} onChange={(e) => setIbanCode(e.target.value)}/>
                </div>
                <div className="editSwift">
                    <label htmlFor="7">Swift code</label>
                       <div className="editSwift-ineer">
                          <div className="editSwift-ineer2">
                                <input  
                                   type="text" 
                                    id="7" 
                                    value={swift1} 
                                    onChange={(e) => setSwift1(e.target.value)} 
                                 />
                                 <input 
                                    type="text" 
                                    id="7" 
                                    value={swift2} 
                                    onChange={(e) => setSwift2(e.target.value)}
                                 />
                                 <input 
                                    type="text" 
                                    id="7"
                                    value={swift3}
                                    onChange={(e) => setSwift3(e.target.value)}
                                 />
                                 <input 
                                    type="text" 
                                    id="7" 
                                    value={swift4}
                                    onChange={(e) => setSwift4(e.target.value)}
                                 />
                          </div>
                     </div>
                </div>
                 <div className="pdf22">
                    <label className="esn22" >Pdf file:</label>
                     <input id="8" type="file" onChange={(e) => setPdf(e.target.files[0])}/>
                     <label htmlFor='8' className="appe22">Upload</label>
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