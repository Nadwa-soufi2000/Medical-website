import Productcard from "../../Components/Productcard";
import { ProductData } from "../../Components/ProductData";

export default function Payment()
{

    const ProductsPayment = ProductData.map(item => 
        <Productcard 
             id={item.id}
             img={item.img} 
             type={item.type}
             desc={item.desc}
             price={item.price}
          />);
    return(
        <div>
            <div className="par-payment">
                <div className="payment-ch"> 
                    {ProductsPayment[0]}
                    <h2 style={{color:'#EA1E1E'}}>Cancelled</h2>
                </div> 
                <div className="payment-ch"> 
                 {ProductsPayment[1]}
                 <h2  style={{color:'green'}}>Delivered</h2>
                </div> 
            </div>    
        </div>
    )
}