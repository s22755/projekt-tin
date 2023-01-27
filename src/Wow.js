import './Wow.css';

function Wow(props) {
    return (
        <div className="wow" style={{top: props.y, left: props.x}}>
            <h1>wow <br/>{props.text}</h1>
        </div>
    );
}

export default Wow;