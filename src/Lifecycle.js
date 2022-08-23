import React, { useState } from 'react' //importamos el useState para poder crear un estado

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

  return (
    <div>
        <h1>Clicks c1: {counter1}</h1>
        <h1>Clicks c2: {counter2}</h1>

        <button onClick={() => setCounter1(counter1+1)}>
            Increment c1
        </button>

        <button onClick={() => setCounter2(counter2+1)}>
            Increment c2
        </button>
    </div>
  )
}

export {Lifecycle}