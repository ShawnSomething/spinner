import React from "react";

interface CounterProps {
    count: number
}

const Counter: React.FC<CounterProps> = ({count}) => {
    const counterDisplay = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

return (
    <h2 style={counterDisplay}>
        <p>Spun {count} times!</p>
    </h2>
    
)
}

export default Counter