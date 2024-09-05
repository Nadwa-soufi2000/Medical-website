import { useState } from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";
import Footer from "../Components/Footer";

export default function ResetPassword()
{
    const[newPassword , setNew] = useState('');
    const[Password , setPassword] = useState('');
    function submit(e)
    {
        e.Preventdefault();

    }
   
    return(
       
        <div>
            <Navbar/>
            <div className="totalDiv">
                    <Logo />
                  <div className="Div2">
                    <h1>Reset Password</h1>
                    <form className="formStyles" onSubmit={submit}>
                           <div className="lab1ss">
                              <label htmlFor="1">New Password</label>
                               <input 
                                     value={newPassword}
                                     type="email" 
                                     id="1" onChange={(e) => setNew(e.target.value)}
                                     placeholder="Enter your email..."
                                    />
                            </div>

                          <div className="lab2ss">
                              <label htmlFor="2">Confirm Password</label>
                               <input 
                                     value={Password} 
                                     type="password" 
                                     id="2" 
                                     onChange={(e) => setPassword(e.target.value)} 
                                     placeholder="Enter your password..."
                                   />
                           </div>
                          <div className="DivButoss">
                            <label></label>
                            <button className="Buto">Reset Password</button>
                          </div>
                    </form>
                  </div>
            </div>
            <Footer />
        </div>
    )
}