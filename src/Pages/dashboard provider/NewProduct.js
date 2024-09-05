import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function NewProduct()
{
    const[namePro , setNamePro] = useState('');
    const[pricePro , setPricePro] = useState('');
    const[beforeDiscount , setBeforeDiscount] = useState('');
    const[afterDiscount , setAfterDiscount] = useState('');
    const[picOne , setpicOne] = useState('');
    const[picTow , setpicTow] = useState('');
    const nav = useNavigate();
    function AddProduct()
    { 
        const formData = new FormData();
        formData.append('Name' , namePro);
        formData.append('Price' , pricePro);
        formData.append('Before' , beforeDiscount);
        formData.append('After' , afterDiscount);
        formData.append('Pic1' , picOne);
        formData.append('Pic2' , picTow);
        //post data into api
         nav('/providerDashboard/products');
    }
    return(
        <div className="grand">
            <form onSubmit={AddProduct}  className="par-newPro">
              <div className="contr">
                 <div className="group1">
                    <label htmlFor="namePro">Name</label>
                    <input id="namePro" type="text" value={namePro} onChange={(e) => setNamePro(e.target.value)}/>
                 </div>
                 <div className="group2">
                    <label htmlFor="pricePro">Price</label>
                    <input id="pricePro" type="text" value={pricePro} onChange={(e) => setPricePro(e.target.value)}/>
                 </div>
                 <div className="group3">
                    <label>Discount</label>
                    <div className="group3-ch">
                        <input type="text" value={beforeDiscount} onChange={(e) => setBeforeDiscount(e.target.value)}/>
                        <input type="text" value={afterDiscount} onChange={(e) => setAfterDiscount(e.target.value)} />
                    </div>
                 </div>
                 <div className="group4">
                    <label>Add Photos</label>
                    <div className="group4-ch">
                        <input type="file" id="photo1" onChange={(e) => setpicOne(e.target.files[0])}/>
                        <label htmlFor="photo1">Upload Photo</label>

                        <input type="file" id="photo2" onChange={(e) => setpicTow(e.target.files[1])}/>
                        <label htmlFor="photo2">Upload Photo</label>
                    </div>
                 </div>
                <div className="group5"><button>Add Products</button></div> 
             </div>
            </form>
        </div>
    )
}