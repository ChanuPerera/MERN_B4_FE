import React, { useRef, useState } from "react";


function FocusInput() {


const inputRef = useRef(null);
const [count , setCount] = useState(0);
const renderCount = useRef(0);


renderCount.current += 1;


const handleFocus = () => {
    inputRef.current.focus();
}

    return(
        <div className="text-center mt-5 justify-center items-center flex flex-col min-h-screen">
            <h2> useRef Example: Focus the Input</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Click the button to focus me"
                className="p-3 text-[18px]"
            />


<button 
onClick={handleFocus}
    className="mt-5 p-3 bg-teal-600 text-white rounded-full"
>
Focus Input
</button>



<h2 className="mt-5 font-semibold">Render Counter</h2>

<p> button clicked : {count} times</p>
<p>component rendered: {renderCount.current} times</p>
<button onClick={() => setCount(count + 1)}>Increament</button>



        </div>

    );
}




export default FocusInput;