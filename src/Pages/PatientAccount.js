import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function PatientAccount()
{
    const[Email , setEmail] = useState('');
    const[Password , setPassword] = useState('');
    const[EmailError , setEmailError] = useState(false);
    const[passwordError , setPasswordError] = useState(false);
    const[confirm , setConfirm] =useState('');
    const[name , setName] = useState('');
    const[accsept , setAccsept] = useState(false);
    let nav = useNavigate();
    function submit(e)
    {
        
        nav('/patientDashboard');
    }
    return (
               <div>
                   <Navbar/>
                 <div className="totalDiv">
                    <Logo />
                  <div className="Div22">
                    <h1>Create Account As Patient</h1>
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
                           {accsept &&  EmailError && <p>Incorrect email</p>} 

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

                          {accsept && passwordError && <p>Incorrect password</p>} 
                          <p className="Para">
                            <label></label>
                            <div>
                            <Link className="ParaLi1" to='/sendMessage'>Forget Password?</Link>
                            <Link className="ParaLi2" to='/Reset'>Reset Password?</Link>
                            </div>
                          </p>
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