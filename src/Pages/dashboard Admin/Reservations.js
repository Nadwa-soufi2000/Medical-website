import { Link } from "react-router-dom";
import { ReservationsData } from "../../Components/ReservationsData";
export default function Reservation()
{
    const ShowReservations = ReservationsData.map(
        item => 
             <tr>
                 <td data-table="Id :">{item.id}</td>
                 <td data-table="Name :">{item.Name}</td>
                 <td data-table="Profile :">{item["Cost&Discount"]}</td>
                 { item.Status === "Delivered" ?
                   <td style={{color:'green'}} data-table="Status :">{item.Status}</td>
                     : item.Status === "Cancelled" ?
                    <td style={{color:'#EA1E1E'}} data-table="Status :">{item.Status}</td>
                     :
                     <td style={{color:'#9BCDF0'}} data-table="Status :">{item.Status}</td>
                 }
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
                    <th>Cost&Discount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  {ShowReservations}
            </tbody>
        </table>
    </div>
    )
}