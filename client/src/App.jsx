import {BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;