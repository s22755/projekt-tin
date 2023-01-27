import './CarComp.css';

function CarComponent(props) {
    return (
        <div className="car-outer-container">
            <div className='center'>
                <img src = {props.imgsrc}/>
            </div>
            <div>
                <h3>{props.carName}</h3>
            </div>
            <div>
                <p>{props.carDesc}</p>
            </div>
            <div>
                <ul>
                    <li>{props.list[0]}</li>
                    <li>{props.list[1]}</li>
                    <li>{props.list[2]}</li>
                </ul>
            </div>
        </div>
    )

}

export default CarComponent;