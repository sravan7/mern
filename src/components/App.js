import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h6> click button to increa count {count}</h6>
            <button onClick={() => { setCount(count + 1); }} > click </button>
        </div>
    );
}
export default App;