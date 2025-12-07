import React, { useState , useEffect} from "react";


const UseEffectEx = () => {

const [count , setCount] = useState(0);
const [text , setText] = useState("");


console.log("render ui");

/////// without dependency array
useEffect(() => {
    console.log(" useEffect - No Dep array - runs after every render")
})


//////////// empty dependency array
useEffect(() => {
    console.log(" useEffect[] - Empty Dep Array - runs only once after first render");
}, [])


//////////// with values in dependency array
useEffect(() => {
    console.log(" useEffect[count] - Values in Dep Array - runs when only count updates");
}, [count])



 const increment = () => {
        setCount(count + 1);
    }



    return(

<div className="bg-blue-200 p-5 rounded text-center m-5">
        <h2>UseEffect Example</h2>
        <p>Count : {count} </p>

        <button onClick={increment}>
            Increase Count
        </button>

   

   <div style={{ marginTop: 20}}>

    <input
        type="text"
        placeholder="Enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}

    />

    <p>You typed : {text}</p>

   </div>



    </div>

    );
}



export default UseEffectEx;