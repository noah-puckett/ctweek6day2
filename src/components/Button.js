import React, { useState } from 'react';

function Button() {
    const [count, setCount] = useState(0);
    return (<> <button onClick={() => setCount(count + 1)}>PUSH IT FOR FUN AND PROFIT</button> <p>times you have PUSHED IT: {count} </p> </>);
}

export default Button;
