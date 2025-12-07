import React, { useMemo, useState } from "react";

function HeavyLogicWithoutMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //// heavy calculation function
  const expensiveCalculation = (num) => {
    console.log("Calculating...");

    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }

    return total + num;
  };

  const calculatedValue = expensiveCalculation(count)

  return (
    <div className="text-center mt-[50px]">
      <h2>useMemo Example - Heavy Calculation</h2>
      <h3>Counted value from button : {count}</h3>
      <h3>Expensive Result by CAL value: {calculatedValue}</h3>

      <button onClick={() => setCount(count + 1)} className="mt-4 rounded-full bg-teal-500 px-4 py-2 mx-4">Increment Count</button>

      <div className="mt-[20px]">
        <input
          type="text"
          placeholder="Type.........."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default HeavyLogicWithoutMemo;
