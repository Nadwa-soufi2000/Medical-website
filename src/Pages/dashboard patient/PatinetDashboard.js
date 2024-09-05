import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Sidebar from './Sidebar'
import Footer from '../../Components/Footer'
export default function PatinetDashboard()
{
    return(
        <div>
            <Navbar/>
            <div className='pare'>
                <Sidebar/>
                <div className='ch22'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}