
export default function Doctorcard(props)
{
    function details(id)
    {
        window.localStorage.setItem('key' , id);
        window.location.pathname = '/doctorDetails';
    }
    return(
        <div id={props.id} className="card" >
            <img onClick={() => details(props.id)} src={props.image} alt=""/>
            <div className="card-ch">
                <h3>{props.header}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}