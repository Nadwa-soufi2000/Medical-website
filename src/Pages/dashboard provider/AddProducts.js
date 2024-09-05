import { useNavigate } from "react-router-dom"

export default function AddProducts()
{
    let nav = useNavigate();
    function move()
    {
        nav('/providerDashboard/newProduct');
    }
    return(
        <div className="par-addPro">
             <div onClick={move} className="addPro">
               <p className="pIcon"> + </p>
               <p className="pNotIcon">Add product</p>
                </div>
        </div>
    )
}