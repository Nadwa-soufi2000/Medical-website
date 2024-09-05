import { useEffect, useState } from "react"

export default function EditProduct()
{
   const[NamePro , setNamePro] = useState('');
   const[PricePro , setPricePro] = useState('');
   const[BeforeDiscount , setBeforeDiscount] = useState('');
   const[AfterDiscount , setAfterDiscount] = useState('');
   const[PicOne , setpicOne] = useState('');
   const[PicTow , setpicTow] = useState('');


   useEffect(() =>{

      // get Product data from api and update it
      
   } ,[]);

   function ProductUpdate(e)
   {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Name' , NamePro);
        formData.append('Price' , PricePro);
        formData.append('Before' , BeforeDiscount);
        formData.append('After' , AfterDiscount);
        formData.append('Pic1' , PicOne);
        formData.append('Pic2' , PicTow);
      //post data after update 
   }
    return(
      <div className="grand">
        <form onSubmit={ProductUpdate} className="par-newPro">
          <div className="contr">
             <div className="group1">
                <label htmlFor="namePro">Name</label>
                <input id="namePro" type="text" value={NamePro} onChange={(e) => setNamePro(e.target.value)}/>
             </div>
             <div className="group2">
                <label htmlFor="pricePro">Price</label>
                <input id="pricePro" type="text" value={PricePro} onChange={(e) => setPricePro(e.target.value)}/>
             </div>
             <div className="group3">
                <label>Discount</label>
                <div className="group3-ch">
                    <input type="text" value={BeforeDiscount} onChange={(e) => setBeforeDiscount(e.target.value)}/>
                    <input type="text" value={AfterDiscount} onChange={(e) => setAfterDiscount(e.target.value)} />
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
            <div className="group5"><button>Edit Product</button></div> 
         </div>
        </form>
    </div>
    )
}