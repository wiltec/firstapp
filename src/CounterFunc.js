import React, { useState } from 'react'

function CounterFunc(){

    const [count, setCount] = useState(0)

    return (
        <div className ="counter">
            <h3>{count}</h3>

            <div className="counter-button">
                <button onClick={() => setCount(count+1)}>Añadir</button>
                <button onClick={() => setCount(count-1)}>Quitar</button>
            </div>
        </div>
    )
}

export default CounterFunc