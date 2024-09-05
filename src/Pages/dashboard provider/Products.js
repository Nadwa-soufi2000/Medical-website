import { Link} from "react-router-dom"

export default function Products()
{
    
    return(
        <div className="parent-products">
            <div className="all-products">
                <div className="delandUp">
                  <Link style={{marginTop:'3px'}} to={`${1}`}><img src="/Pictures/update.png" alt=""/></Link> 
                    <img src="/Pictures/delete.png" alt=""/>
                </div>
                <div className="details">
                    <div className="pppho">
                         <img src="/Pictures/med.png" alt=""/>
                         <img src="/Pictures/med.png" alt=""/>
                    </div>
                    <div className="det1">
                        <h3>Name:</h3>
                        <p>Product</p>
                    </div>
                    <div className="det2">
                        <h3>Price:</h3>
                        <p>200$</p>
                    </div>
                    <div className="det3">
                        <h3>Discount:</h3>
                        <p>After 20$</p>
                        <p>Before 80$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}