import React from "react";

export const Button = ({onClick, className, name}) => {
    return (
        <>
            <button onClick={onClick} className={className}>
                {name}
            </button>
        </>
    )
}