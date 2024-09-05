import { NavLink } from "react-router-dom";

export default function Sidebar()
{
    return(
        <div className="sidebar">
            <img src="/Pictures/icon1.png" alt=""/>
            <NavLink  className='navl' to='updatePatient'>Edit Account</NavLink>
            <NavLink  className='navl' to='payment'>Payment</NavLink>
            <NavLink  className='navl' to='cart'>Cart</NavLink>
            <button  className='navl' to='logout'>Logout</button>
        </div>
    )
}