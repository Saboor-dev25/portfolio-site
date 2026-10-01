import { React, useState } from "react";
// Import the right arrow icon from Heroicons (hi2)
import { HiArrowRight } from 'react-icons/hi2';
import Button from "@/elements/button";
import { RiMenu4Fill } from "react-icons/ri";
import Icon from "@/elements/icons";



const navlinks = [
     { href: "#Features", label: "Features" },
    { href: "#About", label: "About" },
    { href: "#Services", label: "Services" },
    { href: "#Projects", label: "Projects" },
    { href: "#Process", label: "Process" },
    { href: "#Contact", label: "Contact" },
]

const Navbar = () => {


    const [ ismobilemenuopen, setismobilemenuopen ] = useState(false)



    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">

                <a href="#" className=" text-xl font-bold tracking-tight hover:text-[var(--brand-hover)] ">
                    AS<span className="text-[var(--brand-hover)]">.</span>
                </a>

                {/* Desktop[ Nav] */}

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">

                        {navlinks.map((link, index) => (

                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-[var(--text-surface)]  hover:text-[var(--brand-hover)] rounded-full hover:bg-[var(--surface)]" >
                                {link.label}
                            </a>
                        )
                        )}


                    </div>

                </div>

                {/* CTA button */}

                <div>

                    <Button variant="outline" size="sm" className="shadow-[0_0_12px_var(--brand)] hidden md:block"
                     onClick = { () => {
                document.getElementById("Contact")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              >
                        Lets Talk
                        {/* Arrow Icon */}
                        <HiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </div>
                {/* mobile menu button */}

                <button className="md:hidden p-5 text-[var(--text-primary)] cursor-pointer
                " onClick={() => setismobilemenuopen((prev) => !prev)}>
                
                    { ismobilemenuopen ? <Icon name="cross" className="w-10 h-10"></Icon>  : <RiMenu4Fill size={30} />
 }               </button>
            </nav>


            {/* mbile menu */}
            {ismobilemenuopen && ( 
                <div className="md:hidden glass-strong animate-fade-in ">
                <div className="container mx-auto px-6 py-6 flex  flex-col gap-4">
                    {navlinks.map((link, index) => (

                        <a href={link.href} key={index} className=" text-lg text-[var(--text-surface)]  hover:text-[var(--brand-hover)] py-2" >
                            {link.label}
                        </a>
                    )
                    )}

                    <Button variant="outline" size="sm" >
                        Lets Talk

                        <HiArrowRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
                    </Button>

                </div>
            </div>
            )}
        
        </header>
    )
}

export default Navbar

