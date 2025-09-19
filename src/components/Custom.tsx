import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { text } from 'stream/consumers';

interface CustomProps {
    count: number;
    setCount: (count: number) => void;
}

const CustomComponent: React.FC<CustomProps> = ({ count, setCount }: CustomProps) => {

    const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];

    useEffect(() => {

    }, [count])

    const [array, setArray] = useState<number[]>([])
    const [array2, setArray2] = useState<number[]>([])

    const [counter, setCounter] = useState(0);
    const counterDouble = useMemo(() => counter * 2, [counter]);

    const increase = useCallback(() => {
        setCounter(counter + 1);
        setArray([...array, counter]);
        setArray2([...array2, counterDouble]);
    }, [counter, counterDouble, array, array2])


    return (
        <div style={{ alignItems: 'left', padding: 'left', textAlign: 'left'}}>
            <h1>{`Component - Custom`}</h1>
            <p>{`count: ${count}`}</p>
            <p>{`counter: ${counter}`}</p>
            <p>{`counterDouble: ${counterDouble}`}</p>
            <button
            style={{
                height: 20,
                width: 100
            }}
                onClick={increase}
            >
                {`Click`}
            </button>
            {fruits.map((fruit, index) => {
                return (<li key={index}>{`Fruit[${index}]: ${fruit}`}</li>)
            })}
            {array.map((element, index) => {return (<li>{`Counter[${index}]: ${element}`}</li>)})}
            {array2.map((element, index) => (<li>{`CounterDoubled[${index}]: ${element}`}</li>))}
        </div>
    )

};

export default CustomComponent;