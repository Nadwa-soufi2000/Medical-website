import Navbar from "../Components/Navbar";
import { ProductData } from "../Components/ProductData"
export default function ProductDetailsPage()
{
    let ProId = window.localStorage.getItem('key2');
    return(
     <div>
         <Navbar/>
        <div className="rot2">
            <div className="rot-ch">
                 <h3>Product Details</h3>
                 <div className="r1">
                    <p id="r1p1">Service Name</p>
                    <p id='r1p2'>{ProductData[ProId-1].type}</p>
                 </div>
                 <div className="r2">
                    <p id="r2p1">Service Provider</p>
                    <p id="r2p2">{ProductData[ProId-1].type}</p>
                 </div>
                 <div className="r3">
                    <p id="r3p1">Date</p>
                    <p id="r3p2">17/11/2023</p>
                 </div>
                 <div className="r4">
                    <p id="r4p1">Cost</p>
                    <p id="r4p2">200$</p>
                 </div>
                <button className="r5">Buy</button>
            </div>
            <div className="pic-product">
                <img src={ProductData[ProId-1].img} alt=""/>
               <img src={ProductData[ProId-1].img} alt=""/>
            </div>
        </div>
     </div>
    )
}