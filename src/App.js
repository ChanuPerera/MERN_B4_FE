import logo from "./logo.svg";
import "./App.css";
// import LifeCycleDemo from './test/reactLifeClass';
import ReactFun from "./test/reactFun";
import SimpleCal from "./test/useStateEx";
import LifeCycleDemo from "./test/reactLifeClass";
import UseEffectEx from "./test/useEffectEx";
import ToDoList from "./test/toDo";
import Home from "./test/Home";
import { ThemeProvider } from "./context/ThemeContext";
import FocusInput from "./test/RefExample";
import LandingPage from "./main/Landing";
import StopWatch from "./test/useRefEx2";
import HeavyLogic from "./test/useMemoEx";
import HeavyLogicWithoutMemo from "./test/useMemoExNOTMEMO";
import UseCallBackEx from "./test/useCallBakcEx";

function App() {
  return (
    //
    <>
      {/* <LifeCycleDemo/>
      
      <ReactFun/>

      <SimpleCal/> */}

      {/* <UseEffectEx/> */}
      {/* <ToDoList/> */}
      {/* <ThemeProvider>
        <Home />
      </ThemeProvider> */}
      <LandingPage/>
      {/* <StopWatch/> */}
      {/* <HeavyLogic/> */}
      {/* <HeavyLogicWithoutMemo/> */}

      {/* <UseCallBackEx/> */}
    </>
  );
}

export default App;
