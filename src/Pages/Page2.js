import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page2()
{
    return(
        <div>
            <Navbar/>
         <div className="grand-dggg">
           <div className="par-dggg">
            <div className="par2-dggg">
                     <div className="dggg">
                          <h1><span>C</span>are</h1>
                          <img src="Pictures/images 1.png" alt=" "/>
                     </div>  
                  </div>
            </div>
            <div className="par3-dggg">
             <Link className="dd" to='/logPatient'>Patient</Link>
             <Link className="dd" to='/logProvider'>Provider</Link>
            </div>
         </div>
            <Footer />
        </div>
    )
}