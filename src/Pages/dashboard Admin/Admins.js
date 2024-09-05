import { Link } from "react-router-dom";
import { AdminsData } from "../../Components/AdminsData";
export default function Admins()
{
    const ShowAdmins = AdminsData.map(
        item => 
             <tr>
                 <td data-table="Id :">{item.id}</td>
                 <td data-table="Name :">{item.Name}</td>
                 { item.Status === "Active" ?
                   <td style={{color:'green'}} data-table="Status :">{item.Status}</td>
                      :
                    <td style={{color:'red'}} data-table="Status :">{item.Status}</td>
                 }
                 <td data-table="Action :" className="tdLink">
                     <Link to={`${1}`}  className="tdlink-ch"><img src="/Pictures/update2.png" alt=""/></Link>
                     <img style={{width:'13.33px' , height:'15px'}} src="/Pictures/Vr.png" alt=""/>
                 </td>
            </tr>
           );
    return(
        <div className="par-table2">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {ShowAdmins}
            </tbody>
        </table>
    </div>
    )
}