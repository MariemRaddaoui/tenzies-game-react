import React from "react"

export default function Die(props) {
    const style = {
        backgroundColor : props.die.isHeld ? "#59E391" : "transparent"
    }
    return (
        <div style={style} className="die-face" onClick={props.holdDice}>
            <h2 className="die-num">{props.die.value}</h2>
        </div>
    )
}