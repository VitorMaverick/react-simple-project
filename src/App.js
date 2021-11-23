
import './App.css';
import Appbar from "./components/Appbar";
import Student from "./pages/Student";
import RegisterStudent from "./pages/RegisterStudent";

function App() {
  return (
  <div>
    <Appbar/>
      <RegisterStudent/>
	    <Student/>

  </div	>
  );
}

export default App;
