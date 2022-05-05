function IdCard(props) {
    return (
        <div className='id-card'>
            <div className='image'>
                <img src={props.user.picture} alt='user profile'/>
            </div>
            <div className='Details'>
                <p><strong>First name:</strong> {props.user.firstName}</p>
                <p><strong>Last name:</strong> {props.user.lastName}</p>
                <p><strong>Gender:</strong> {props.user.gender}</p>
                <p><strong>Height:</strong> {props.user.height}</p>
                <p><strong>Birth:</strong> {props.user.birth}</p>
            </div>
        </div>
    )
}

export default IdCard;