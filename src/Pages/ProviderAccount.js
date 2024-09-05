import { useState } from "react";
import {Link} from 'react-router-dom'
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";
import Footer from "../Components/Footer";
export default function ProviderAccount()
{
    const[Email , setEmail] = useState('');
    const[Password , setPassword] = useState('');
    const[confirm , setConfirm] =useState('');
    const[name , setName] = useState('');
    const[accsept , setAccsept] = useState(false);
    const[BankName , setBankName] = useState('');
    const[Ibancode , setIbanCode] = useState('');
    const[SwiftCode1 , setSwiftcode1] = useState('');
    const[SwiftCode2 , setSwiftCode2] = useState('');
    const[SwiftCode3 , setSwiftCode3] = useState('');
    const[SwiftCode4 , setSwiftCode4] = useState('');
    const[Pdf , setPdf] = useState('');
    function submit(e)
    {
        //e.Preventdefault();
        //setAccsept(true)
        
        //let ele=`${SwiftCode1}${SwiftCode2}${SwiftCode3}${SwiftCode4}`;
       // let intEle = parseInt(ele);

    }
    return(
        <div>
                 <Navbar/>
                 <div className="totalDiv2">
                    <Logo />
                  <div className="Div22">
                    <h1>Create Account As Provider</h1>
                    <form className="formStyle2" onSubmit={submit}>
                            <div className="block1">
                                <label htmlFor="1">User Name</label>
                                <input
                                    value={name}
                                    type="text"
                                    id="1" onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name..."
                                />

                            </div>
                           <div className="block2">
                              <label htmlFor="2">Email</label>
                               <input 
                                     value={Email}
                                     type="email" 
                                     id="2" onChange={(e) => setEmail(e.target.value)}
                                     placeholder="Enter your email..."
                                    />
                            </div>
                          <div className="block3">
                              <label htmlFor="3">Password</label>
                               <input 
                                     value={Password} 
                                     type="password" 
                                     id="3" 
                                     onChange={(e) => setPassword(e.target.value)} 
                                     placeholder="Enter your password..."
                                   />
                           </div>
                           <div className="block33">
                              <label></label>
                              <div className="block3-pp">
                                  <p style={{width:'356px',height:'19px',fontFamily:'sans-serif, Roboto',fontWeight:'500',fontSize:'12px'}}>Password must be contain letters and numbers and be 8 characters</p>
                              </div>
                           </div>
                           <div className="block4">
                              <label htmlFor="4">Confirm Password</label>
                               <input 
                                     value={confirm} 
                                     type="password" 
                                     id="4" 
                                     onChange={(e) => setConfirm(e.target.value)} 
                                     placeholder="Confirm your password..."
                                   />
                           </div>
                           <div className="block5">
                              <label htmlFor="5">Bank Name</label>
                               <input 
                                     value={BankName} 
                                     type="text" 
                                     id="5" 
                                     onChange={(e) => setBankName(e.target.value)} 
                                     placeholder="Enter bank name..."
                                   />
                           </div>
                           <div className="block6">
                              <label htmlFor="6">Iban code</label>
                               <input 
                                     value={Ibancode} 
                                     type="text" 
                                     id="6" 
                                     onChange={(e) => setIbanCode(e.target.value)} 
                                     placeholder="Enter iban code..."
                                   />
                           </div>
                           <div className="block7">
                              <label htmlFor="7">Swift code</label>
                            <div className="block7-ch1">
                              <div className="block7-ch2">
                                  <input 
                                     value={SwiftCode1} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setSwiftcode1(e.target.value)} 
                                   />
                                   <input 
                                     value={SwiftCode2} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setSwiftCode2(e.target.value)} 
                                   />
                                   <input 
                                     value={SwiftCode3} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setSwiftCode3(e.target.value)} 
                                   />
                                   <input 
                                     value={SwiftCode4} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setSwiftCode4(e.target.value)} 
                                   />
                              </div>
                             
                              </div>
                           </div>
                           <div className="block8">
                              <label className="notUp" htmlFor="8">Pdf file</label>
                               <input 
                                     type="file" 
                                     id="8" 
                                     onChange={(e) => setPdf(e.target.files[0])} 
                                   />
                                <label className="up" htmlFor="8">Upload</label>
                           </div>
                          <div className="DivButo2">
                            <label></label>
                            <button className="Buto2">Create Account</button>
                          </div>
                    </form>
                  </div>
            </div>
             <Footer />
        </div>
    )
}