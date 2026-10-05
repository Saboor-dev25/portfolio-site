// import React from "react";
// import Button from "@/elements/button";
// import Icon from "@/elements/icons";


// const Contact = () => {
//     return (
//         <section className="relative flex items-center justify-center bg-[var(--background)] py-16 lg:py-24 overflow-hidden">

//             <div className=" w-250 h-70 rounded p-10  bg-[var(--surface)] flex items-center justify-center gap-9 ">



// {/* <div className="w-50 h-50 rounded-full bg-[var(--brand)] bg-gradient-to-r from-[var(--surface)] to-[var(--brand)]  ">
//  <Icon name="plane" className="w-30 h-20 ml-9 text-white m-13 " />
// </div> */}
// <div
//   className="
//     relative
//     flex items-center justify-center
//     w-16 h-16
//     sm:w-20 sm:h-20
//     md:w-24 md:h-24
//     lg:w-28 lg:h-28
//     rounded-full
//     border border-[var(--brand)]
//     bg-[var(--surface)]
//     overflow-hidden
//     shadow-[0_0_20px_rgba(212,160,23,0.15)]
//   "
// >
//   {/* Subtle radial golden glow */}
//   <div
//     className="
//       absolute inset-0
//       bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.28)_0%,rgba(212,160,23,0.12)_35%,transparent_75%)]
//     "
//   ></div>

//   {/* Optional inner dark overlay for depth */}
//   <div
//     className="
//       absolute inset-[2px]
//       rounded-full
//       bg-[var(--surface)]
//       opacity-60
//     "
//   ></div>

//   {/* Plane Icon */}
//   <Icon name="plane" className=" relative z-10 w-6 h-6 sm:w-7 sm:h-7md:w-8 md:h-8  lg:w-10 lg:h-10 text-[var(--brand)] -rotate-12
//     "
//   />
// </div>
// {/* second coloumn */}
//                 <div>

//                     <div className="flex items-center gap-3">

//                         <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)] " />

//                         <p className=" text-xs  uppercase tracking-[0.2em] text-[var(--brand)] font-semibold ">
//                             Lets Work Together
//                         </p>

//                     </div>

//                     <div className="text-center">
//                         <h1> Have a Project in Mind ?</h1>

//                         <p> Lets Create something impactful together.</p>

//                         <Button size="sm" variant="filled"> Lets Talk
//                             <Icon name="arrowright" className="w-4 h-4 ml-2 text-white" />
//                         </Button>

//                     </div>
//                 </div>



//             </div>
//         </section>
//     )
// }

// export default Contact

// import React  from "react";
// import { motion } from "framer-motion";
// import Button from "@/elements/button";
// import Icon from "@/elements/icons";
// import ContactForm from "@/elements/contactform";

// const Contact = ( {contactdata}) => {

// // const {name , setname} = useState('')


//   return (
//     <section className="relative bg-[var(--background)] py-16 lg:py-24 overflow-hidden" id="Contact">
//       <div className="container mx-auto px-5">

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="
//             relative
//             overflow-hidden
//             rounded-2xl
//             border border-[var(--border)]
//             bg-[var(--surface)]
//             px-6
//             py-8
//             md:px-10
//             lg:px-14
//             lg:py-10
//             shadow-[0_20px_50px_rgba(0,0,0,0.35)]
//           "
//         >

//           {/* background glow */}
//           <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--brand)] opacity-[0.04] blur-[90px]" />

//           <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//             {/* Left Side */}
//             <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 flex-1">

//               {/* Icon */}
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.06 }}
//                 className="
//                   relative
//                   flex
//                   items-center
//                   justify-center
//                   w-20
//                   h-20
//                   md:w-24
//                   md:h-24
//                   lg:w-28
//                   lg:h-28
//                   rounded-full
//                   border
//                   border-[rgba(212,160,23,0.45)]
//                   bg-[var(--surface)]
//                   overflow-hidden
//                   shrink-0
//                 "
//               >

//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.30)_0%,rgba(212,160,23,0.08)_45%,transparent_75%)]" />

//                 <div className="absolute inset-[5px] rounded-full border border-[rgba(212,160,23,0.15)]" />

//                 <Icon
//                   name="plane"
//                   className="relative z-10 w-9 h-9 md:w-11 md:h-11 text-[var(--brand)] -rotate-12"
//                 />
//               </motion.div>

//               {/* Text */}
//               <motion.div
//                 initial={{ opacity: 0, x: -25 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.25 }}
//                 viewport={{ once: true }}
//                 className="text-center sm:text-left"
//               >

//                 <div className="flex justify-center sm:justify-start items-center gap-3 mb-3">

//                   <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]" />

//                   <p className="uppercase tracking-[0.22em] text-[11px] md:text-xs font-semibold text-[var(--brand)]">
//                     Let's Work Together
//                   </p>

//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
//                   Have a Project in Mind?
//                 </h2>

//                 <p className="mt-3 text-[15px] md:text-base text-[var(--text-secondary)] max-w-xl">
//                   Let's create something impactful together.
//                 </p>

//               </motion.div>

//             </div>

//             {/* Right Side */}
//             <motion.div
//               initial={{ opacity: 0, x: 25 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.35 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="flex justify-center lg:justify-end"
//             >
//               <Button
//                 variant="filled"
//                 size="lg"
//                 className="px-8 py-4 whitespace-nowrap"
//               >
//                 Let's Talk
//                 <Icon
//                   name="arrowright"
//                   className="w-5 h-5 ml-3 text-white"
//                 />
//               </Button>
//             </motion.div>

//           </div>
//         </motion.div>

//       </div>

//      <div>
//       <ContactForm contactdata={contactdata} />
//      </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";

import Icon from "@/elements/icons";
import ContactForm from "@/elements/contactform";

const Contact = ({ contactdata }) => {
  return (
    <section
      id="Contact"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-6
        lg:py-10
      "
    >
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[rgba(212,160,23,0.22)]
            bg-[#17110d]
            // p-6
            // sm:p-8
            // lg:p-12
            // xl:p-14
            p-5
            sm:p-6
            lg:p-7
          "
        >
          {/* ================= COLOR COMPOSITION ================= */}

          {/* Large warm amber shape */}
          <motion.div
            animate={{
              x: [0, 8, 0, -8, 0],
              y: [0, -6, 0, 6, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -left-32
              -top-28
              h-[620px]
              w-[720px]
              rotate-[-8deg]
              rounded-[42%_58%_63%_37%/45%_36%_64%_55%]
              bg-[#d99a16]
              opacity-95
              will-change-transform
            "
          />

          {/* Main orange shape */}
          <div
            className="
    pointer-events-none
    absolute
    -left-24
    top-16
    h-[500px]
    w-[570px]
    rotate-[8deg]
    rounded-[63%_37%_32%_68%/58%_44%_56%_42%]
    bg-[#b95716]
    opacity-90
    will-change-transform
  "
          />

          {/* Deep burnt-orange / red shape */}
          <motion.div
            animate={{
              x: [0, 5, 0, -5, 0],
              y: [0, 7, 0, -7, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    pointer-events-none
    absolute
    left-[18%]
    -top-24
    h-[420px]
    w-[430px]
    rotate-[-18deg]
    rounded-[38%_62%_70%_30%/48%_30%_70%_52%]
    bg-[#7e291b]
    opacity-75
    will-change-transform
  "
          />

          {/* Golden upper shape */}
          <motion.div
  animate={{
    x: [0, -5, 0, 5, 0],
    y: [0, -4, 0, 4, 0],
  }}
  transition={{
    duration: 21,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    pointer-events-none
    absolute
    right-[20%]
    -top-32
    h-[340px]
    will-change-transform
    w-[460px]
    rotate-[18deg]
    rounded-[70%_30%_45%_55%/42%_55%_45%_58%]
    bg-[#e5ad2b]
    opacity-70
  "
/>
          {/* Deep burgundy bottom shape */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-48
              left-[28%]
              h-[460px]
              w-[620px]
              rotate-[-12deg]
              rounded-[58%_42%_35%_65%/62%_38%_62%_38%]
              bg-[#541c18]
              opacity-80
            "
          />

          {/* Dark shape entering from the right */}
          <div
            className="
              pointer-events-none
              absolute
              -right-40
              top-[18%]
              h-[560px]
              w-[520px]
              rotate-[15deg]
              rounded-[35%_65%_58%_42%/46%_35%_65%_54%]
              bg-[#17110d]
              opacity-95
            "
          />

          {/* Soft golden atmospheric glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-[32%]
              top-[25%]
              h-[360px]
              w-[360px]
              rounded-full
              bg-[#f2b632]/20
              blur-[110px]
            "
          />

          {/* Soft dark atmospheric glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[8%]
              bottom-[5%]
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#3a1513]/60
              blur-[100px]
            "
          />

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div
              className="
    pointer-events-none
    absolute
    left-[-40px]
    top-[170px]
    h-[330px]
    w-[560px]
    rounded-[45%]
    bg-[#1a120d]/35
    blur-[35px]
  "
            />

            {/* ================= LEFT SIDE ================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Flying airplane */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="
                  relative
                  mb-8
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[rgba(10,10,10,0.25)]
                  bg-[rgba(10,10,10,0.10)]
                  sm:h-24
                  sm:w-24
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_70%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-[5px]
                    rounded-full
                    border
                    border-[rgba(10,10,10,0.15)]
                  "
                />

                <Icon
                  name="plane"
                  className="
                    relative
                    z-10
                    h-9
                    w-9
                    -rotate-12
                    !text-[#0a0a0a]
                    sm:h-11
                    sm:w-11
                  "
                />
              </motion.div>

              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--background)] shadow-[0_0_12px_var(--background)]" />

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[var(--background)]
                  "
                >
                  Let's Work Together
                </p>
              </div>

              {/* Main heading */}
              <h2
                className="
                  max-w-xl
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-[var(--background)]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Have a Project in Mind?
              </h2>

              {/* Description */}
              {/* <p
                className="
                  mt-4
                  max-w-md
                  text-base
                  font-bold
                  leading-7
                  text-[rgba(10,10,10,0.72)]
                  md:text-lg
                "
              >
                Let's create something meaningful together.
              </p> */}


              {/* Contact information */}
              <div className="mt-9">

                {/* Email + Phone */}
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/10
        "
                    >
                      <Icon
                        name="email"
                        className="h-5 w-5 text-white md:text-[var(--background)]"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-white md:text-[var(--background)]">
                        Email
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-white md:text-[var(--background)]">
                        saboordev25@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/10
        "
                    >
                      <Icon
                        name="phone"
                        className="h-5 w-5 text-white md:text-[var(--background)]"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-white md:text-[var(--background)]">
                        Phone
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-white md:text-[var(--background)]">
                        +92 314 1286564
                      </p>
                    </div>
                  </div>

                </div>

                {/* Socials */}
                <div className="mt-7 flex items-center gap-3">

                  {/* LinkedIn */}
                  <button
                    type="button"
                    className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[rgba(10,10,10,0.20)]
        bg-[rgba(10,10,10,0.10)]
        text-[rgba(33,20,13,0.60)]
        transition-all
        duration-300
        hover:border-[rgba(10,10,10,0.35)]
        hover:bg-[rgba(10,10,10,0.20)]
      "
                  >
                    <Icon
                      name="linkedin"
                      className="h-5 w-5 !text-[#ffffff]"
                    />
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[rgba(10,10,10,0.20)]
        bg-[rgba(10,10,10,0.10)]
        text-[rgba(33,20,13,0.60)]
        transition-all
        duration-300
        hover:border-[rgba(10,10,10,0.35)]
        hover:bg-[rgba(10,10,10,0.20)]
      "
                  >
                    <Icon
                      name="github"
                      className="h-5 w-5 !text-[#ffffff]"
                    />
                  </button>

                </div>

              </div>


            </motion.div>

            {/* ================= RIGHT SIDE ================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-[rgba(255,255,255,0.12)]
                bg-[rgba(18,14,12,0.58)]
                p-6
                shadow-[0_30px_80px_rgba(0,0,0,0.38)]
                backdrop-blur-2xl
                sm:p-8
                lg:p-9
              "
            >
              {/* <div className="mb-7">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--brand-hover)]
                  "
                >
                  Send a Message
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  Let's talk about your project
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[var(--text-secondary)]
                  "
                >
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div> */}

              <ContactForm contactdata={contactdata} />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;