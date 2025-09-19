import { useState } from "react";

function useToggle2(initialValue: boolean = false) {

}

const useToggle = ((initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(!value);
    return [value, toggle];
});

export default useToggle;