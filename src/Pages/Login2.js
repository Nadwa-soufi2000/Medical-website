import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";
import Footer from "../Components/Footer";

export default function Login2()
{
    const[Email , setEmail] = useState('');
    const[Password , setPassword] = useState('');
    const[EmailError , setEmailError] = useState(false);
    const[passwordError , setPasswordError] = useState(false);
    const[accsept , setAccsept] = useState(false);
    const nav = useNavigate();
    function submit(e)
    {
        //e.Preventdefault();
        //setAccsept(true);
         //post data into api
        nav('/providerDashboard');
    }
    return(
        <div>
            <Navbar/>
            <div className="totalDiv">
                    <Logo />
                  <div className="Div2">
                    <h1>Login</h1>
                    <form className="formStyle" onSubmit={submit}>
                           <div className="lab1">
                              <label htmlFor="1">Email</label>
                               <input 
                                     value={Email}
                                     type="email" 
                                     id="1" onChange={(e) => setEmail(e.target.value)}
                                     placeholder="Enter your email..."
                                    />
                            </div>
                           {accsept &&  EmailError && <p>Incorrect email</p>} 

                          <div className="lab2">
                              <label htmlFor="2">Password</label>
                               <input 
                                     value={Password} 
                                     type="password" 
                                     id="2" 
                                     onChange={(e) => setPassword(e.target.value)} 
                                     placeholder="Enter your password..."
                                   />
                           </div>
                          {accsept && passwordError && <p>Incorrect password</p>} 
                          <p className="Para">
                            <label></label>
                            <div className="reset">
                            <Link className="ParaLi1" to='/sendMessage'>Forget Password?</Link>
                            <Link className="ParaLi2" to='/reset'>Reset Password?</Link>
                            </div>
                          </p>
                          <div className="DivButo">
                            <label></label>
                            <button className="Buto">Login</button>
                          </div>
                    </form>
                  </div>
            </div>
            <Footer />
        </div>
    )
}