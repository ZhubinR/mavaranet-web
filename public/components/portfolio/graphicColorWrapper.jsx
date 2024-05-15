
const GraphicColorWrapper = ({color}) => {
    return (
        <div className="color-box">
            <div className="color" style={{ backgroundColor: color }}></div>
            <span>
                {color}
            </span>
        </div>
    )
}

export default GraphicColorWrapper