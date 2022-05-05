import visa from '../assets/images/visa.png';

function CreditCard(props) {
    // let logo = "";
    // if (props.creditCard.type === 'Visa') {
    //     logo = visa;
    // } else if (props.creditCard.type === 'Master Card') {
    //     logo = mastercard;
    // }

    let number = props.creditCard.number.slice(12);
    let expirationMonth = props.creditCard.expirationMonth;
    if (props.creditCard.expirationMonth < 10) {
        expirationMonth = `0${props.creditCard.expirationMonth}`;
    }
    let expirationYear = props.creditCard.expirationYear.toString().slice(2);
    const cardStyle = {
        backgroundColor: props.creditCard.bgColor
    }


    return (
        <div style={cardStyle} className="creditCard">
            <div className="row-1-logo">
            <img src={visa} alt='card type logo'/>
            </div>
            <div className="row-2-card-number">
                <div className="row-2-col-1">••••</div>
                <div className="row-2-col-2">••••</div>
                <div className="row-3-col-3">••••</div>
                <div className="row-4-col-4"><p>{number}</p></div>
            </div>
            <div className="row-3-details">
                <div className="row-3-row-1">
                    <p>Expires {expirationMonth}/{expirationYear}</p><p>{props.creditCard.bank}</p>
                </div>
                <div className="row-3-row-2">{props.creditCard.owner}</div>
            </div>
        </div>

    )
}

export default CreditCard;