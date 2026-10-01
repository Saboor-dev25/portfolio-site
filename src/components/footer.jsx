// import React from "react";
// import Icon from "@/elements/icons";

// const Footer = () => {

//     const navlinks = [
//         { href: "#About", label: "About" },
//         { href: "#Services", label: "Services" },
//         { href: "#Projects", label: "Projects" },
//         { href: "#Process", label: "Process" },
//         { href: "#Contact", label: "Contact" },
//     ]

//     return (
//         <section>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
//                 <div className="h-40 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
//                     <a href="#" className=" text-xl font-bold tracking-tight hover:text-[var(--brand-hover)] ">
//                         AS<span className="text-[var(--brand-hover)]">.</span>
//                     </a>
//                     <p> Building websites that help businesses grow online.</p>

//                 </div>
              
//                 <div className="h-40 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
//                     <h3 className="ml-5"> Quick Links</h3>
//                     <ul>
//                         {navlinks.map((link, index) => {
//                             return (
//                                 <li> <a href={link.href} key={index} className="px-4 py-2 text-sm text-[var(--text-surface)]  hover:text-[var(--brand-hover)] rounded-full hover:bg-[var(--surface)] ml-2" >
//                                     {link.label}
//                                 </a></li>
//                             )
//                         })}
//                     </ul>

//                 </div>
//                 <div className="h-40 rounded-xl bg-[var(--surface)] border border-[var(--border)]">

//                     <h3> Lets Connect</h3>
//                     <div className="flex">

//                         <Icon name="email" /> <p>abd.saboor25@gmail.com</p>
//                     </div>

//                     <div className="flex">


//                         <Icon name="phone" /> <p>0314-1286564</p>
//                     </div>


//                     <div className="flex">

//                         <Icon name="location" /> <p>Pakistan</p>
//                     </div>



//                 </div>
//                 <div className="h-40 rounded-xl bg-[var(--surface)] border border-[var(--border)]">

//                 <h3> Follow Me</h3>

//                 <Icon name="github"/>
//                 <Icon name="linkedin" />
//                 </div>

//             </div>

//             <p>  @ 2026 Abdus Saboor. All rights reserved.</p>
//         </section>
//     )
// }
// export default Footer

import { motion } from "framer-motion";
import Icon from "@/elements/icons";

const Footer = () => {
  const navlinks = [
    { href: "#About", label: "About" },
    { href: "#Services", label: "Services" },
    { href: "#Projects", label: "Projects" },
    { href: "#Process", label: "Process" },
    { href: "#Contact", label: "Contact" },
  ];

  const socials = [
    {
      name: "github",
      href: "https://github.com/yourusername",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "instagram",
      href: "https://instagram.com/yourusername",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[var(--background)] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-[var(--surface)]
            border
            border-[var(--border)]
            rounded-3xl
            p-8
            md:p-10
            lg:p-12
            transition-all
            duration-500
            hover:border-[#3a3a3a]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo */}

            <motion.div variants={itemVariants}>
              <a
                href="#"
                className="text-4xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                AS<span className="text-[var(--brand)]">.</span>
              </a>

              <p className="mt-5 max-w-[220px] text-sm leading-7 text-[var(--text-secondary)]">
                Building websites that help businesses grow online.
              </p>
            </motion.div>

            {/* Quick Links */}

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {navlinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        text-sm
                        text-[var(--text-secondary)]
                        transition-colors
                        duration-300
                        hover:text-[var(--brand)]
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
                Let's Connect
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon
                    name="email"
                    className="w-4 h-4 text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    saboordev25@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="phone"
                    className="w-4 h-4 text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    +92 314 1286564
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="location"
                    className="w-4 h-4 text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    Pakistan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social */}

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
                Follow Me
              </h3>

              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-10
                      h-10
                      rounded-full
                      border
                      border-[var(--border)]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:border-[var(--brand)]
                      hover:-translate-y-1
                    "
                  >
                    <Icon
                      name={social.name}
                      className="
                        w-4
                        h-4
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[var(--brand)]
                      "
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom */}

          <motion.div
            variants={itemVariants}
            className="mt-10 pt-6 border-t border-[var(--border)]"
          >
            <p className="text-center text-sm text-[var(--text-secondary)]">
              © 2026 Abdus Saboor. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;