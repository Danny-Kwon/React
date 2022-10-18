import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MIN_CAPACITY = -5;
function Accommodate(props) {
    const [isEmpty, setIsEmpty] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called.");
        console.log(`isEmpty: ${isEmpty}`);
    });
    useEffect(() => {
        setIsEmpty(count <= MIN_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);
    return (
        <div style={{ padding: 16 }}>
            <p>{`현재 카운터 값은 ${count} 입니다.`}</p>
            <button onClick={increaseCount} style={{color: "red"}}>+1</button>
            <button onClick={decreaseCount} style={{color: "blue"}}disabled={isEmpty}>-1</button>
            {isEmpty && <p style={{color: "blue"}}>수가 너무 적습니다.</p>}
        </div>
    );
}
export default Accommodate;