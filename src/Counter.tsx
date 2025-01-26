import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>You clicked {count} times</p></>
    );
}
