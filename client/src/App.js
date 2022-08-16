import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Home2 from './components/Home2';
import Register from './components/Register';
import Login from './components/Login';
import { Routes ,Route} from "react-router-dom"
import Edit from './components/Edit';
import Detail from './components/Detail';



function App() {
  return (
      <>
       
        {/* <Navbaar /> */}
        <Routes>
       <Route exact path="/home2" element={<Home2/>} />
          <Route exact path="/" element={<Home/>} />
        
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/view/:id" element={<Detail/>} />
        </Routes>
        
      </>


  );
}

export default App;
