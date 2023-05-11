
const Box = ({ id, color, width, height, onButtonClick }) => {
    const style = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`
    }

    return (
        <div className="Box">
            <div style={style}>
            </div>
            <button id={id} onClick={onButtonClick}>X</button>
        </div>
    )
}

export default Box;