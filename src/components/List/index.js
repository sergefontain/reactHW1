import React from "react"
const List = ({ arr }) => {
    return (
        <ul>
            {arr.map((item) => (
                <li key={item.toString()}>{item}</li>
            ))}
        </ul>
    )
}

export default List
