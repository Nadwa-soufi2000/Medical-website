import { Link } from "react-router-dom";
import { ProductsArray } from "../../Components/ProductsArray";
export default function ProductsManagment()
{
    const ShowProductsArray = ProductsArray.map(
        item => 
             <tr>
                 <td data-table="Id :">{item.id}</td>
                 <td data-table="Name :">{item.Name}</td>
                 <td data-table="Profile :">{item.Discount}</td>
                 <td data-table="Status :">{item.Cost}</td>
                 <td data-table="Action :" className="tdLink">
                     <Link to={`${1}`}  className="tdlink-ch"><img src="/Pictures/update2.png" alt=""/></Link>
                     <img style={{width:'13.33px' , height:'15px'}} src="/Pictures/Vr.png" alt=""/>
                 </td>
            </tr>
           );
    return(
        <div className="par-table">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Discount</th>
                    <th>Cost</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ShowProductsArray}
            </tbody>
        </table>
    </div>
    )
}