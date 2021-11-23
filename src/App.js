
import './App.css';
import Appbar from "./components/Appbar";
import Student from "./pages/Student";
import RegisterStudent from "./pages/RegisterStudent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <Appbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/add' element={<RegisterStudent/>}/>
            <Route path='/list' element={<Student/>}/>

        </Routes>
      </Router>
  );
}

export default App;
