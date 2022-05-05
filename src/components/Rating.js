function Rating(props) {
    let stars = '';
    fillStars();

    function fillStars() {
        let filledStars = Math.round(props.children);

        for (let i = 0; i < filledStars; i++) {
            stars += '☻'
        }

        for (let i = filledStars; i < 5; i++) {
            stars += '☺'
        }
    }

    return (
        <div className='Rating'>
            <p>{stars}</p>
        </div>
    )
}

export default Rating;