import { useEffect, useState } from "react";

export default function EditServcieFromAdmin()
{
    const[name , setName] = useState("");
    const[price , setPrice] = useState("");
    const[beforeDiscount , setbeforeDiscount] = useState("");
    const[afterDiscount , setafterDiscount] = useState("");
    const[dentist , setDentist] = useState("");
    const[nurse , setNurse] = useState("");
    const[surgery , setSurgery] = useState('');
    const[xRay , setxRay] = useState("");
    const[nutirition , setNutirition] = useState("");
    const[ophthalmologist , setOphthalmologist] = useState("");

    useEffect(() =>{
        //get data from api before update 
    })
    function editService(e)
    {
        e.PreventDefault();
        //post data after update into api
    }
    return(
      <form className="parent-services">
        <div onSubmit={editService} className="sr1">
            <div className="sr1-ch">
                <h2>Section</h2>
                <div className="checkbox-group">
                    <div className="dentist">
                        <input id="dentist" type="checkbox" value={'Dentist'} onChange={(e) => setDentist(e.target.value)}/>
                        <label htmlFor="dentist">Dentist</label>
                    </div>
                    <div className="dentist">
                        <input id="nurse" type="checkbox" value={'Nurse'} onChange={(e) => setNurse(e.target.value)}/>
                        <label htmlFor="nurse">Nurse</label>
                    </div>
                    <div className="dentist">
                        <input id="plastic" type="checkbox" value={'Plastic surgery'} onChange={(e) => setSurgery(e.target.value)}/>
                        <label htmlFor="plastic">Plastic surgery</label>
                    </div>
                    <div className="dentist">
                        <input id="ray" type="checkbox" value={'Medical x ray'} onChange={(e) => setxRay(e.target.value)}/>
                        <label htmlFor="ray">Medical x ray</label>
                    </div>
                    <div className="dentist">
                        <input id="nut" type="checkbox" value={'Nutirition'} onChange={(e) => setNutirition(e.target.value)}/>
                        <label htmlFor="nut">Nutirition</label>
                    </div>
                    <div className="dentist">
                        <input id="oph" type="checkbox" value={'Ophthalmologist'} onChange={(e) => setOphthalmologist(e.target.value)}/>
                        <label htmlFor="oph">Ophthalmologist</label>
                    </div>
                </div>
            </div>
            <div className="sr1-ch2">
                <form>
                     <div className="group1">
                        <label htmlFor="namePro">Name</label>
                        <input id="namePro" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                     </div>
                     <div className="group2">
                        <label htmlFor="pricePro">Price</label>
                        <input id="pricePro" type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                     </div>
                     <div className="group3">
                        <label>Discount</label>
                        <div className="group3-ch">
                            <input type="text" value={beforeDiscount} onChange={(e) => setbeforeDiscount(e.target.value)}/>
                            <input type="text" value={afterDiscount} onChange={(e) => setafterDiscount(e.target.value)} />
                       </div>
                     </div>
                </form>
            </div>
        </div>
        <div className="sr2">
            <button>Edit Service</button>
        </div>
    </form>

    )
}