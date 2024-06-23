import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);


    const increment = () =>{
        setCounter(counter+1);
    }

    const decrement = () =>{
        setCounter(counter-1);
    }

    const reset = () =>{
        setCounter(0);
    }

    const styles = {
        textAlign : "Center",
    }
    return (
        <div>
            <h1 style={styles}>Counter app</h1>

            <div className="display">
                {counter}
            </div>

            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;