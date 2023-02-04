import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import NavBar from "./Component/Layout/Navbar";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import AddUser from "./Component/Users/Add";
import EditUser from "./Component/Users/Edit";
import View from "./Component/Users/View";

const App = () => {
  return(
    <Router>
   <div className="App">
    <NavBar/>
    <Routes>
       <Route  path="/" element={<Home/>}/> 
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/Users/Add" element={<AddUser/>}/>
      <Route  path="/Users/Edit/:id" element={<EditUser/>}/>
      <Route  path="/Users/:id" element={<View/>}/>
    </Routes>
   </div>
    </Router>

  );
}

export default App;
