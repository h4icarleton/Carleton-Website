import "./Card.css"

const CardFront = (props) => {
    return(
        <div className = "Card">
            <div className = "CardFront">
                <h1>{props.children}</h1>
                <button onClick = {(e) => props.handleClick(e)}> flip</button>
            </div>
        </div>
        
    )
}

const CardBack = (props) => {
    return(
        <div className = "Card">
            <div className = "CardBack">
                <p>{props.children}</p>
                <button onClick = {(e) => props.handleClick(e)}> flip </button>
            </div>
        </div>
    )
}

export {CardFront, CardBack};