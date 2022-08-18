import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";


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
