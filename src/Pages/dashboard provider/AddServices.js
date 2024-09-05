import { useNavigate } from "react-router-dom";

export default function AddServices()
{
    let nav = useNavigate();
    function move()
    {
        nav('/providerDashboard/newService');
    }
    return(
        <div className="par-addPro">
             <div onClick={move} className="addPro">
                   <p className="pIcon"> + </p>
                   <p className="pNotIcon">Add Service</p>
             </div>
        </div>
    )
}