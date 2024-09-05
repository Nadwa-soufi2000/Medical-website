import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar2 from "./Sidebar2";

export default function ProviderDashboard()
{
    return(
        <div>
            <Navbar/>
            <div className='pare2'>
                <Sidebar2/>
                <div className='ch222'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}