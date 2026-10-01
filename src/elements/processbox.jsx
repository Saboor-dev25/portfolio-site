// import React from "react";
// import { motion } from "framer-motion";


// const ProcessBox = ({ title = "" , description = "", index ,right }) => {
 
// const baseClasses =
//   "w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300";

// return (
//         <motion.div
//     initial={{
//     opacity: 0,
//     x: right ? 60 : -60,
// }}
//     whileInView={{
//         opacity: 1,
//         y: 0,
//     }}
//     viewport={{
//         once: true,
//         amount: 0.4,
//     }}
//     whileHover={{
//     y: -6,
//     scale: 1.02,
// }}
//     transition={{
//         duration: 0.6,
//         delay: index * 0.15,
//     }}
//     className={baseClasses}
// >


// <h3 className="text-xl font-semibold text-[var(--text-primary)]">
//                             {title}
//                         </h3>

//                         <p className="mt-2 text-[var(--text-secondary)]">
//                             {description}
//                         </p>
// </motion.div>

        
//     )

// }

// export default ProcessBox

import React from "react";

import { motion } from "framer-motion";

const ProcessBox = ({

  title = "",

  description = "",

  index = 0,

  number = "",

  animationDirection = "up",

}) => {

  const baseClasses =
    "relative w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300";

  // Decide where the card should enter from

  const initialAnimation = {
    opacity: 0,
    x:
      animationDirection === "right"
        ? 60
        : animationDirection === "left"
        ? -60
        : 0,
    y: animationDirection === "up" ? 40 : 0,
  };

  return (

    <motion.div
      initial={initialAnimation}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={baseClasses}
    >

      {/* Background Number */}
      <span
        className="
          pointer-events-none
          absolute
          right-1
          top-1/2
          -translate-y-1/2
          z-0
          text-6xl
          font-bold
          text-[var(--text-primary)]
          opacity-[0.08]
        "
      >
        {number}
      </span>

      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">

          {title}

        </h3>

        <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">

          {description}

        </p>
      </div>

    </motion.div>
  );
};

export default ProcessBox;