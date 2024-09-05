export default function Productcard(props)
{
    function detailsPro(id)
    {
        window.localStorage.setItem('key2' , id);
        window.location.pathname = '/productDetails'
    }
    return(
        <div id={props.id} onClick={() => detailsPro(props.id)} className="pro-card">
            <img src={props.img} alt=""/>
            <button>Review</button>
            <div className="pro-ch">
                <p className='pa1'>{props.type}</p>
                <p className='pa2'>type</p>
            </div>
            <p className="pa3">{props.desc}</p>
            <p className="pa4">{props.price}</p>
        </div>
    )
}