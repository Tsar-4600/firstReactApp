import { useState } from "react";
import './style.css';



function Counter(){
    let [count, setCount] = useState(0);


    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }



    return(
        <div className = "counter-wrapper">
            <h1>Счетчик!</h1>
            <h2>Счет: {count}</h2>
            <button onClick = {increase}>Увеличить</button>
            <br />
            <button onClick = {decrease}>Уменьшить</button>
        </div>

    );
}
export default Counter;