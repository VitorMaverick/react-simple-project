
import './App.css';
import Appbar from "./components/Appbar";
import ButtonComp from "./components/ButtonComp";
import Student from "./components/Student";

function App() {
  return (
  <div>
    <Appbar/>
	<Student/>
	<ButtonComp name = "contador"/>
  </div	>
  );
}

export default App;
