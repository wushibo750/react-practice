// import logo from './logo.svg';
import Demo1 from "./components/Demo";
import Ademo from "./components/Demo/index1";
import HelloFn from "./components/Function";
import CComponent from "./components/Classcomponent";
import InputComponent from "./components/InputComponent";
import Fatherdata from "./components/Fatherdata";
import Router from "./components/Router/app/inde";
import './App.css';
//组件化必须要使用大写首字母
function App() {
  return (
    <div className="App">
     <Demo1/>
        <Ademo/>
        <HelloFn/>
        <CComponent/>
        <InputComponent/>
        <Fatherdata/>
        <Router/>
    </div>
  );
}

export default App;
