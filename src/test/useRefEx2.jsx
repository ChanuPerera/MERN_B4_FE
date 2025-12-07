import React, {  useRef, useState } from "react";


function StopWatch() {
const [time , setTime] = useState(0);
const intervalRef = useRef(null);
const startTimer = () => {
    if(intervalRef.current !== null) return;

    intervalRef.current = setInterval(() =>{
        setTime((prevTime) => prevTime + 1);
    }, 1000)
}
const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
}
const resetTimer = () =>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
}


// const myName = (name) => {
//     alert("my name is" + name);
// }

return(
    <div className="text-center mt-[50px]">
        <h2>useRef example 2 - StopWatch</h2>
        <h3>{time}</h3>
        <button onClick={startTimer} className="mt-4 rounded-full bg-teal-500 px-4 py-2 mx-4">Start</button>
        <button onClick={stopTimer} className="mt-4 rounded-full bg-red-500  px-4 py-2 mx-4">Stop</button>
        <button onClick={resetTimer} className="mt-4 rounded-full bg-amber-500  px-4 py-2 mx-4">Reset</button>


        {/* <button onClick={() => myName("KASUN")} className="mt-4 rounded-full bg-purple-500  px-4 py-2 mx-4">Show my Name</button> */}


    </div>
    )

}





export default StopWatch;