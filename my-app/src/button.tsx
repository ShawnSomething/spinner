import React from "react"

interface ButtonProps {
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({onClick}) => {
    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <p style={buttonStyle}>
            <button onClick = {onClick}>Click Me!</button>
        </p>
    )
}

export default Button