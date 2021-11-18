import './App.css';
import AppBar from "./components/Appbar";
import Student from "./components/Student";
import ButtonComp from "./components/ButtonComp"
import {ButtonBtnClass} from "./components/ButtonBtnClass";

function App() {
  return (
    <div className="App">
        <AppBar/>
        <Student/>
        <ButtonBtnClass name="Save"/>

    </div>
  );
}

export default App;
