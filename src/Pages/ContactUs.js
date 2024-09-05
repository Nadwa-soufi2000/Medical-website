import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function ContactUs()
{
    return(
        <div>
            <Navbar/>
            <div className="contact-par">
               <div className="cont-ch1">
                  <h2>Get In Touch</h2>
                  <span></span>
               </div>
               <div className='cont-ch2'><p className="cont-ch2">book an Appointment to treat right now.</p></div>
            </div>
            <div className="sec2">
                <div className="sec2-ch1">
                    <div className="part1">
                       <div className="part1-ch1">
                           <img src="Pictures/one.png" alt=""/>
                           <div className="part-ch1-ch1">
                              <h2>Office Address</h2>
                              <p>1441 Morris Ave, Union, Nj 07083</p>
                           </div>
                       </div>
                    </div>
                    <div className="gro">
                         <div className="part2">
                         <img src="Pictures/three.png" alt=""/>
                           <div className="pa2">
                              <h2>Office Timings</h2>
                              <p id='p1'>1441 Morris Ave, Union, Nj 07083</p>
                              <p id='p2'>Sunday Closed</p>
                           </div>
                         </div>
                         <div className="part3">
                            <img src="Pictures/one.png" alt=""/>
                           <div className="paa3">
                              <h2>Emai Address</h2>
                              <p>Smile01@gmail.com</p>
                           </div>
                         </div>
                         <div className="part4">
                           <img src="Pictures/tow.png" alt=""/>
                           <div className="paa4">
                              <h2>Phone Number</h2>
                              <p>0900-78601</p>
                           </div>
                        </div>
                        <div className="part5">
                             <img src="Pictures/four.png" alt=""/>
                             <div className="pa5">
                              <h2>Live chat</h2>
                              <p>+1-2064512559</p>
                             </div>
                        </div>
                  </div>
                </div>

                <div className="sec2-ch2">
                    <form>
                         <div className="div1">
                            <div className='ineer'>
                                <label>First Name</label>
                                <input type="text" placeholder="First Name..."/>
                            </div>
                            <div className='ineer'>
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name..."/>
                            </div>
                         </div>
                         <div className="div2">
                            <label>Email</label>
                            <input type="email" placeholder="you@company.com"/>
                         </div>
                         <div className="div3">
                            <label>Phone Number</label>
                            <input type="text" />
                         </div>
                         <div className="div4">
                            <label>Select Date</label>
                            <input type="date"/>
                         </div>
                         <div className="div5">
                            <label>Message</label>
                            <input type="text"/>
                         </div>
                         <button className='clik'>Book an Appointment</button>
                    </form>
                </div>
            </div>
            <div className='sec3'>
            <div className='last-sec'>
               <div className="last1">
                  <h2>Frequently Ask Question</h2>
                  <span></span>
               </div>
               <div className="last2"><p>we use only the best quality materials on the market in order to provide the best products to our patients.</p></div>
            </div>
            <div id='cla'>
            <div className="la11">
                    <p>. Do you offer non-profit discounts ?</p>
                    <img src="Pictures/t5.png" alt=""/>
                </div>
                <p className="la11-p">lorem ipsum dolor sit amet comehehe in convallis consetuler enim odeo enim jdhd cras placerat digissim aliquma massa volutpat non hack.</p>
            </div>
            <div className="last3">
                <div className="la1">
                    <p>. Do you offer non-profit discounts ?</p>
                    <img src="Pictures/t5.png" alt=""/>
                </div>
                <div className="la2">
                    <p>. can i see who reads my email campaigns ?</p>
                    <img src="Pictures/t5.png" alt=""/>
                </div>
                <div className="la3">
                    <p>. can i see who reads my email campaigns ?</p>
                    <img src="Pictures/t5.png" alt=""/>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}