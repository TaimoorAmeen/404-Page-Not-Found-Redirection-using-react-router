import {Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";

const App = () => {  
  return(
    <div>

      <Navbar/>
    
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/login" element={ <Login/>}/>
        {/* if the page will not be found then this will be opened */}
        {/* <Route path="/*" element={ <PageNotFound/> }/> */}

        {/* it will be re-redirected here's how we do redirection
            if anyone else enters the wrong page then it will be re-directed
            to the home page or any link we give here in the following
        */}
        {/* 
            here we will use Navigate which is a built-in feature in react-router
            and our path will be the same ="/*" as we did in the page not
            found 
        */}
        <Route path="/*" element={<Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App;
