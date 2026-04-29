import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import XizmatKorsatish from "./components/XizmatKorsatish";
import Yozilish from "./components/Yozilish";
import "./index.css"
export default function App() {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <Navbar/>
      <Header/>
      <About/>
      <XizmatKorsatish/>
       <Skills/>
       <Projects/>
      <Yozilish/>
     
      <Footer/>
    </div>
  )
}