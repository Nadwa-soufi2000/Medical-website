import Doctorcard from "../Components/Doctorcard";
import { DoctorData } from "../Components/DoctorData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function DoctorDetailsPage()
{
    let doctorId = window.localStorage.getItem('key');
    return(
        <div>
            <Navbar/>
        <div className="rot">
            <div className="rot-ch">
                 <h3>Service Details</h3>
                 <div className="r1">
                    <p id="r1p1">Doctor Name</p>
                    <p id='r1p2'>{DoctorData[doctorId].header}</p>
                 </div>
                 <div className="r2">
                    <p id="r2p1">Doctor Location</p>
                    <p id="r2p2">{DoctorData[doctorId].text}</p>
                 </div>
                 <div className="r3">
                    <p id="r3p1">Date</p>
                    <p id="r3p2">17/11/2023</p>
                 </div>
                 <div className="r4">
                    <p id="r4p1">Price</p>
                    <p id="r4p2">200$</p>
                 </div>
                <button className="r5">Buy</button>
            </div>
            <div className="c2">
                  <div className="card">
                      <img src={DoctorData[doctorId].image} alt=""/>
                       <div className="card-ch">
                           <h3>{DoctorData[doctorId].header}</h3>
                           <p>{DoctorData[doctorId].text}</p>
                      </div>
                 </div>
             </div>
        </div>
     </div>
    )
}