import {Link} from 'react-router-dom';
export default function Navbar()
{
    function apper()
    {
        let listElement = document.querySelector('.list');
        listElement.classList.toggle('activeList');
    }
    return(
        <div className="par-navb">
        <div className="navb"> 
               <div onClick={apper} className='group-span'>
                   <span></span>
                   <span></span>
                   <span></span>
              </div>
            <ul className="list">
                <li><Link className='lin' to='/'>Home</Link></li>
                <li><Link className='lin' to='/filter'>Services</Link></li>
                <li><Link className='lin' to='/about'>About</Link></li>
                <li><Link className='lin' to='/contact'>Contact</Link></li>
                <li><Link className='lin' to='/firstPage'>Login</Link></li>
            </ul>
            <div className='navb-ch' >
                <img  src='/Pictures/ma.png' alt=''/>
                <input placeholder='search' type="text"/>
            </div>
            <div className='navb-ch2'>
                <h1><span>C</span>are</h1>
                <img src="/Pictures/images 1.png" alt=" "/>
            </div>
        </div>
        </div>
    )
}