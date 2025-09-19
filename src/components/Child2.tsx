
import React from "react";

interface Child2Props {
    count: number;
    onButtonClick: (text: string) => void;
}

const Child2: React.FC<Child2Props> = ({ count, onButtonClick }) => {

    return (
        <div>
            <h1>Child2</h1>
            <button onClick={() => onButtonClick(`Child2 - count: ${count}`)}/>
        </div>
    )
}

export default Child2;