import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";


function App() {
    return (
        <div className="app">
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    );
}

export default App;
