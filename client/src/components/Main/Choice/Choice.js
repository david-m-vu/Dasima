import "./Choice.css";

const Choice = (props) => {
    const handleClick = (e) => {
        props.onMakeChoice(e.target.id);
    }

    return (
        <div className="Choice">
            <div className="choices">
                {props.imageChoices.map((image) => {
                    return <img src={image.link} onClick={handleClick} alt="" id={image.id} key={image.id} />
                })}
            </div>
            <h1 id="cancelButton" onClick={() => props.onCancel()}>✖</h1>
        </div>
    )
}

export default Choice;