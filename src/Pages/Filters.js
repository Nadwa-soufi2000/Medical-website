import { useState } from "react"
import DisplayMap from "../DisplayMap";
import { DoctorData } from "../Components/DoctorData";
import { ProductData } from "../Components/ProductData";
import {motion} from 'framer-motion'
export default function Filters()
{
    const[map , setMap] = useState(false);
    const[products , setProducts] = useState(false);
    const[doctors , setDoctors] = useState(false);
    const[searchResult , setSearchResult] = useState('');
    let ArrayResults = [];
    let ArrayResults2 = [];

    const Products = ProductData.map(item =>
                <div id={item.id}  className="pro-card">
                       <img src={item.img} alt=""/>
                       <button>Review</button>
                       <div className="pro-ch">
                          <p className='pa1'>{item.type}</p>
                          <p className='pa2'>type</p>
                      </div>
                       <p className="pa3">{item.desc}</p>
                       <p className="pa4">{item.price}</p>
                 </div>);
      
    const Doctors = DoctorData.map(ele =>
                 <div className="card" >
                         <img src={ele.image} alt=""/>
                         <div className="card-ch">
                             <h3>{ele.header}</h3>
                             <p>{ele.text}</p>
                         </div>
                </div>);

                for(let i=0 ; i<DoctorData.length ; i++)
                {
                    if(searchResult.toLowerCase() === DoctorData[i].header || searchResult.toLowerCase() === DoctorData[i].text)
                    {
                        ArrayResults[i] = DoctorData[i];
                    }
                }
                const showresults = ArrayResults.map(item =>
                    <div className="card" >
                    <img src={item.image} alt=""/>
                    <div className="card-ch">
                        <h3>{item.header}</h3>
                        <p>{item.text}</p>
                    </div>
                   </div>);

                for(let j=0 ; j<ProductData.length ; j++)
                {
                    if(searchResult.toLowerCase() === ProductData[j].type)
                    {
                        ArrayResults2[j] = ProductData[j];
                    }
                }
                const showresults2 = ArrayResults2.map(item =>
                    <div id={item.id}  className="pro-card">
                           <img src={item.img} alt=""/>
                           <button>Review</button>
                           <div className="pro-ch">
                              <p className='pa1'>{item.type}</p>
                              <p className='pa2'>type</p>
                          </div>
                           <p className="pa3">{item.desc}</p>
                           <p className="pa4">{item.price}</p>
                     </div>);
                    
    return(
        <div>
            <div style={{backgroundColor:'#22ACF1'}}>
            <div className="find">
                <motion.h1
                   initial={{x: -200}} 
                   animate={{x: 0}}
                   transition={{duration: 1}}
                >
                 Find Services
                </motion.h1>
                <div className="search">
                    <img className="im1" src="/Pictures/search.png" alt=""/>
                    <input type="text" 
                           placeholder="Search" 
                           value={searchResult} 
                           onChange={(e) => {setSearchResult(e.target.value); setMap(false); setDoctors(false); setProducts(false)}}/>
                    <img className="im2" onClick={() => { setMap(true) ; setDoctors(false) ; setProducts(false)}} src="/Pictures/Vectorgps.png" alt=""/>
                </div>
                <div className="filter">
                    <motion.button initial={{scale: 1.4}} animate={{scale: 1}} transition={{duration: 1}} onClick={() => { setMap(false) ; setDoctors(false) ; setProducts(true)}} >Find Services</motion.button>
                    <motion.button initial={{scale: 1.4}} animate={{scale: 1}} transition={{duration: 1}}  onClick={() => { setMap(false) ; setDoctors(true) ; setProducts(false)}}>Find Doctors</motion.button>
                </div>
            </div>
            </div>
            <div className="total-data">
                {map && !doctors && !products && <div style={{width:'92%' , margin:'20px auto'}}><DisplayMap/></div>} 
                {!map && !doctors && products &&   <div className="products-data">{Products}</div>}
                {!map && doctors && !products && <div className="doctors-data">{Doctors}</div> }
                {!map && !doctors && !products && ArrayResults.length>0 &&
                <div className="doctors-data">{showresults}</div>
                }
                {!map && !doctors && !products && ArrayResults2.length>0 && 
                    <div className="products-data">{showresults2}</div>
                }
            </div>
        </div>
    )
}