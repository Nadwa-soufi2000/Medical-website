import { NavLink } from "react-router-dom";

export default function Sidebar2()
{
    return(
        <div className='sidebar2'>
            <img src="/Pictures/icon1.png" alt=""/>
            <NavLink className='navll' to='providerAccount'>Account</NavLink>
            <NavLink className='navll' to='updateProvider'>Edit Account</NavLink>
            <NavLink className='navll' to='addServices'>Service managment</NavLink>
            <NavLink className='navll' to='addProducts'>Product managment</NavLink>
            <button  className='navll'>Logout</button>
        </div>
    )
}