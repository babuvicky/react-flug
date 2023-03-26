import React from "react"

const Operation = ({numbers:[a,b]}) => {
    return (
        <div>Result: {a}{Op}{b} = {new Function
        (`retrun ${a}${Op}$(b)`)()} </div>
    )
}
export default Operation 