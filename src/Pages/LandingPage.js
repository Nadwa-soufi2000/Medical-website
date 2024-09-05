import Navbar from "../Components/Navbar";
import {DoctorData} from '../Components/DoctorData';
import { ProductData } from "../Components/ProductData";
import Doctorcard from "../Components/Doctorcard";
import Productcard from "../Components/Productcard";
import Clientcard from "../Components/Clientcard";
import Footer from "../Components/Footer";
import { useState } from "react";

export default function LandingPage()
{
    const[doctorsListNum  , setDoctorsListNum] = useState(0);
    const[ProductsListNum , setProductsListNum] = useState(0);
    function last()
    {
        if(doctorsListNum <= showDoctors.length-4)
        {
            setDoctorsListNum((prev) => prev + 4);
        }
       
    }
    function first()
    {
        if(doctorsListNum > 0)
         setDoctorsListNum((prev) => prev - 4);
    }
    function lastPro()
    {
        if(ProductsListNum <= showProducts.length-4)
        {
            setProductsListNum((prev) => prev + 4);
        }
    }
    function firstPro()
    {
        if(ProductsListNum > 0)
         setProductsListNum((prev) => prev - 4);
    }
    const showDoctors = DoctorData.map(item => 
            <Doctorcard 
                 id={item.id}
                 image={item.image} 
                 header={item.header}
                 text={item.text}
               />);

     const showProducts = ProductData.map(item => 
            <Productcard 
                 id={item.id}
                 img={item.img} 
                 type={item.type}
                 desc={item.desc}
                 price={item.price}
              />);
    return(
        <div>
            <Navbar/>
            <div style={{}}  className="first">
                <div className="fir">
                <div className="first-ch1">
                    <h2>Lorem ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. 
                  </p>
                  <button>Get Startsd</button>
                </div>
                </div>
                <img src="Pictures/vbn 1.png" alt=""/>
            </div>
            <div style={{backgroundColor:'#E6F6FE'}}>
            <div style={{}} className="second">
                <div className="c1">
                    <h2>Meet Our Specialists</h2>
                    <img src="Pictures/Vector.png" alt=""/>
                    <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div className="c2">
                     {showDoctors[doctorsListNum]}
                     {showDoctors[doctorsListNum + 1]}
                     {showDoctors[doctorsListNum + 2]}
                     {showDoctors[doctorsListNum + 3]}
                </div>
                <div className="icon">
                    <img onClick={last} id='rig' src="Pictures/right.png" alt=""/>
                    <img onClick={first} id='lef' src="Pictures/left.png" alt=""/>
                </div>
            </div>
            </div>
            <div style={{}} className="third">
                 <div className="c11">
                      <h2>Services</h2>
                      <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div className="c2">
                     {showProducts[ProductsListNum]}
                     {showProducts[ProductsListNum + 1]}
                     {showProducts[ProductsListNum + 2]}
                     {showProducts[ProductsListNum + 3]}
                </div>
                <div className="icon">
                    <img onClick={lastPro} id='rig' src="Pictures/right.png" alt=""/>
                    <img onClick={firstPro} id='lef' src="Pictures/left.png" alt=""/>
                </div>
            </div>
            <div style={{backgroundColor:'#E6F6FE'}}>
            <div className='four'>
                <h2>Find Services</h2>
                <div className="four-ch">
                     <img src="/Pictures/ma.png" alt=""/>
                     <input type="text" placeholder="Search..."/>
                </div>
            </div>
            </div>
            <div className="fife">
                <div className="fife-ch1">
                    <h2>Our Happy Clients</h2>
                    <img src='Pictures/Vector.png' alt=""/>
                    <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div className="fife-ch2">
                    <Clientcard pic='Pictures/Ellipse 3.png' tit='Thomas daniel'/>
                    <Clientcard pic='Pictures/Ell.png' tit='Alena Alex'/>
                    <Clientcard pic='Pictures/Ellse 3.png' tit='Thomas edison'/>
                </div>
            </div>
            <div style={{backgroundColor:'#E6F6FE'}}>
            <div className="sex" style={{backgroundColor:'#E6F6FE',paddingTop:'25px',marginTop:'25px'}}>
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
            </div>
        </div>
    )
}