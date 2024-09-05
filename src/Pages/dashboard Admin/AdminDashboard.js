import { Outlet } from "react-router-dom";
import Sidebar3 from "./Sidebar3";

export default function AdminDashboard()
{
    return(
        <div>
         <div className='pare2'>
            <Sidebar3/>
            <div className='ch222'>
                <Outlet/>
            </div>
         </div>
      </div>
    )
}