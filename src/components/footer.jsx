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
  const socials = [
    {
      name: "github",
      href: "https://github.com/saboor-dev25",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/abdussaboor25",
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
    <footer className="bg-[var(--background)] py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-7
            md:p-8
            lg:p-9
            transition-all
            duration-500
            hover:border-[#3a3a3a]
          "
        >

          {/* ================= BACKGROUND SHAPES ================= */}

          {/* Bottom-left golden shape */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-36
              left-[5%]
              h-[280px]
              w-[380px]
              rotate-[-15deg]
              rounded-[45%_55%_60%_40%]
              bg-[#d99a16]/10
            "
          />

          {/* Bottom-right burgundy shape */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-44
              right-[18%]
              h-[300px]
              w-[420px]
              rotate-[12deg]
              rounded-[55%_45%_35%_65%]
              bg-[#7e291b]/10
            "
          />

          {/* Soft center glow */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/2
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#d99a16]/5
              blur-[80px]
            "
          />

          {/* ================= MAIN CONTENT ================= */}

          <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

            {/* ================= LOGO ================= */}

            <motion.div variants={itemVariants}>
              <a
                href="#"
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[var(--text-primary)]
                  hover:text-[var(--brand-hover)]
                "
              >
                AS<span className="text-[var(--brand)]">.</span>
              </a>


               
              <p
                className="
                  mt-5
                  max-w-[260px]
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                "
              >
                Building websites that help businesses grow online.
              </p>
            </motion.div>

            {/* ================= CONTACT ================= */}

            <motion.div variants={itemVariants}>
              <h3
                className="
                  mb-5
                  text-lg
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Let's Connect
              </h3>

              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Icon
                    name="email"
                    className="h-5 w-5 text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    saboordev25@gmail.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Icon
                    name="phone"
                    className="h-5 w-5 text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    +92 314 1286564
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <Icon
                    name="location"
                    className="h-5 w-5  text-[var(--brand)]"
                  />

                  <p className="text-sm text-[var(--text-secondary)]">
                    Karachi, Pakistan
                  </p>
                </div>

              </div>
            </motion.div>

            {/* ================= SOCIAL ================= */}

            <motion.div variants={itemVariants}>
              <h3
                className="
                  mb-5
                  text-lg
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Follow Me
              </h3>

              <div className="flex items-center gap-3">

                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name}`}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[rgba(255,255,255,0.02)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--brand)]
                      hover:bg-[rgba(212,160,23,0.08)]
                    "
                  >
                    <Icon
                      name={social.name}
                      className="
                        h-4
                        w-4
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

          {/* ================= COPYRIGHT ================= */}

          <motion.div
            variants={itemVariants}
            className="
              relative
              z-10
              mt-8
              border-t
              border-[var(--border)]
              pt-6
            "
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