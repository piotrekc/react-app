import React, { useMemo } from 'react';

interface UseMemoProps {
    count: number;
}

const UseMemo: React.FC<UseMemoProps> = ({ count }) => {
    console.log(`UseMemo - count: ${count}`);

    const counter = useMemo(() => count * 2, [count])

    return (
        <div>
            <h2>{`Component - UseMemo`}</h2>
            <p>{`Counter: ${counter}`}</p>
        </div>
    )
};

export default UseMemo;