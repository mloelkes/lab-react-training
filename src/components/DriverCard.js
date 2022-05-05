import Rating from './Rating';

function DriverCard(props) {
    return (
        <div className='DriverCard'>
            <div className='col-1'>
                <img src={props.img} alt='profile'/>
            </div>
            <div className='col-2'>
                <h1>{props.name}</h1>
                <span><Rating>{props.rating}</Rating></span>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;