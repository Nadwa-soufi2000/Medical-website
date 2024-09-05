import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

export default function ConfirmCode()
{
    const[Code1 , setCode1] = useState('');
    const[Code2 , setCode2] = useState('');
    const[Code3 , setCode3] = useState('');
    const[Code4 , setCode4] = useState('');
    const[Code5 , setCode5] = useState('');
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
                    <h1>Enter Code</h1>
                    <form className="formStyleCo" onSubmit={submit}>
                    <div className="block7">
                            <label htmlFor="7">Code:</label>
                            <div className="block7-ch1">
                              <div className="block7-ch2">
                                  <input 
                                     value={Code1} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setCode1(e.target.value)} 
                                   />
                                   <input 
                                     value={Code2} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setCode2(e.target.value)} 
                                   />
                                   <input 
                                     value={Code3} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setCode3(e.target.value)} 
                                   />
                                   <input 
                                     value={Code4} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setCode4(e.target.value)} 
                                   />
                                   <input 
                                     value={Code5} 
                                     type="text" 
                                     id="7" 
                                     onChange={(e) => setCode5(e.target.value)} 
                                   />
                              </div>
                             
                              </div>
                           </div>
                          
                          <div className="DivButo">
                            <label></label>
                            <button className="Buto">Confirm Code</button>
                          </div>
                    </form>
                  </div>
            </div>
            <Footer />
        </div>
    )
}