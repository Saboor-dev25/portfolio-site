import "@fontsource/inter";
import "@fontsource/space-grotesk";
import Navbar from "@/components/navbar";
import Home from "@/sections/home"
import About from "@/sections/about"
import Services from "@/sections/services"
import Projects from "@/sections/projects"
import Process from "@/sections/process"
import Contact from "@/sections/contact"

const App = () =>  {
  return(
    <div className="min-h-screen overflow-x-hidden">

<Navbar/>
 <Home/> 
<About/>
<Services/>
<Projects/>
<Process/>
<Contact/>
    </div>
  )
}

export default App
