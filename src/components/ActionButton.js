const ActionButton = (props) => {

    return (
        <button className={props.styling} onClick={props.onClick}>{props.buttonText}</button>
    )

}

export default ActionButton