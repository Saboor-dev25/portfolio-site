import "@fontsource/inter";
import "@fontsource/space-grotesk";
import Navbar from "@/components/navbar";
import Home from "@/sections/home"
import About from "@/sections/about"
import Services from "@/sections/services"
import ProjectsScreen from "@/sections/projects"
import Process from "@/sections/process"
import Contact from "@/sections/contact"
import Features_section from "@/sections/features";
import Footer from "@/components/footer"
import React, { useState } from "react";

const App = () =>  {

  const [contactdata , setcontactdata] = useState({
    subject: "",
    message: ""
  });
  return(
    <div className="min-h-screen overflow-x-hidden">

<Navbar/>
 <Home setcontactdata={setcontactdata}/> 
<About/>
<Services setcontactdata={setcontactdata}/>
<ProjectsScreen/>
<Process/>
<Contact contactdata={contactdata}/>
<Footer/>
    </div>
  )
}

export default App
