import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import OurServices from "./components/OurServices";
import OurProjects from "./components/OurProjects";
import OurTeam from "./components/OurTeam";
import OurClients from "./components/OurClients";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-12 mt-4 md:mx-32 lg:mx-44 lg:mt-0 app-">
        <div>
          {/* All components use to build this design */}
            <Navbar />             
            <HomePage />            
            <About />         
            <OurServices />            
            <OurTeam />        
            <OurProjects />      
            <OurClients />       
            <Footer />
            <div className="text-black m-5 text-center">
              &copy; Copyright 2018 Mendleson Communication Pty Ltd
            </div>
        </div>
    </div>
  );
}

export default App;
