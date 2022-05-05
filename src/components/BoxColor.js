function BoxColor(props) {
    const color = `rgb(${props.r},${props.g},${props.b}`
    const boxColorStyle = {
        backgroundColor: color
    }

    return (
        <div style={boxColorStyle} className="boxColor">
            <p>{color}</p>
        </div>
    )
}

export default BoxColor;