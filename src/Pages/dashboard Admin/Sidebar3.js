import { NavLink } from "react-router-dom"
export default function Sidebar3()
{
    return(
        <div className="side3">
            <div className="pers">
                <img src="/Pictures/icon2.png" alt=""/>
                <div className="pers-ch">
                    <h2>Mr.Happnees</h2>
                    <p>This is short and sweet description text.</p>
                </div>
            </div>
            <div className="asio">
                  <NavLink className='na' to='providers'>Providers Managment</NavLink>
                  <NavLink className='na' to='patients'>Patient Managment</NavLink>
                  <NavLink className='na' to='reports'>Sales Reports</NavLink>
                  <NavLink className='na' to='servicesManagment'>Services Managment</NavLink>
                  <NavLink className='na' to='productsManagment'>Products Managment</NavLink>
                  <NavLink className='na' to='reservation'>Reservation Managment</NavLink>
                  <NavLink className='na' to='adminManagment'>Admin Managment</NavLink>
                  <NavLink className='na' to='adminOptions'>Admin options</NavLink>
                  <NavLink className='na'>Logout</NavLink>
            </div>
        </div>
    )
}