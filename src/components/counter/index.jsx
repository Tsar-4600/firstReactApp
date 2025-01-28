import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0);


    const increase = () => {
        setCount(count + 1);
    }


    return(
        <>
            <h1>Счетчик!</h1>
            <h2>Счет: {count}</h2>
            <button onClick = {increase}>Увеличить</button>
            <br />
            <button>Уменьшить</button>
        </>

    );
}
export default Counter;