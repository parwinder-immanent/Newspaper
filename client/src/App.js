import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import Navbaar from './components/Navbaar';
// import Home from './components/Home';
import Home2 from './components/Home2';
import Register from './components/Register';
import Register2 from './components/Register2';
import Try from './components/Try'
import Login from './components/Login';
import { Routes ,Route} from "react-router-dom"
import Edit from './components/Edit';
import Detail from './components/Detail';
import Protected from './components/Protected';


function App() {
  return (
      <>
       
        {/* <Navbaar /> */}
        <Routes>
       <Route exact path="/home2" element={<Protected Component={Home2}/>} />
          {/* <Route exact path="/home" element={<Protected Component={Home}/>} /> */}
        
          <Route exact path="/register" element={<Register/>} />
          
          <Route exact path="/register2" element={<Register2/>} />
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/view/:id" element={<Detail/>} />
          <Route exact path="/try" element={<Try/>} />
          {/* <Protected path="/" Component={Login} /> */}
        </Routes>
        
      </>


  );
}

export default App;
