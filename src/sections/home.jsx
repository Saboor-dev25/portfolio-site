import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import Button from "@/elements/button";
import Icon from "@/elements/icons";

const Home = ({ setcontactdata }) => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)] pt-32 sm:pt-36 lg:pt-28 pb-20 sm:pb-24 lg:pb-20">
      {/* Subtle Background Glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-fullfhnvbgzc
          bg-[var(--brand)]
          opacity-[0.045]
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          left-[-180px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[var(--brand-hover)]
          opacity-[0.025]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Very subtle texture */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.025]
          bg-[radial-gradient(circle_at_1px_1px,var(--text-primary)_1px,transparent_0)]
          bg-[length:32px_32px]
        "
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_430px] gap-14 lg:gap-20 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >

            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-5"
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[var(--brand)]
                  shadow-[0_0_12px_var(--brand)]
                "
              />

              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[var(--brand)]">
                Full Stack Web Developer
              </p>
            </motion.div>


            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
              text-[clamp(2.5rem,6vw,3.8rem)]
                font-bold
                leading-[0.98]
                tracking-[-0.035em]
                text-[var(--text-primary)]
              "
            >
              Your Website Should Be Bringing In Work
              {/* <span className="text-[var(--brand)] ml-2">
                Work
              </span> */}
            </motion.h1>


            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
                text-[var(--text-secondary)]
              "
            >Fast, clear websites for small businesses — built around the one thing you need a visitor to do. </motion.p>


            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >

              <Button variant="filled" size="sm"
              
              onClick = { () => {
                setcontactdata({
                  subject: "Free Site Review",
                  message: "I’d like to get a free review of my website and understand what could be improved in terms of design, performance, and user experience."
                });
                document.getElementById("Contact")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              
              >
                Get a free site review
              </Button>

              <Button variant="outline" size="sm"

              onClick = { () => {
                document.getElementById("Process")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              >
                See how I work

                <Icon
                  name="arrowright"
                  className="w-4 h-4 ml-2"
                />
              </Button>

            </motion.div>


            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="
                flex
                flex-wrap
                gap-x-7
                gap-y-3
                mt-8
                pt-6
                border-t
                border-[var(--border)]
              "
            >

              <div className="flex items-center gap-2">
                <span className="text-[var(--brand)] text-sm">
                  ✓
                </span>

                <span className="text-sm text-[var(--text-secondary)]">
                  Reply within 1 working day
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[var(--brand)] text-sm">
                  ✓
                </span>

                <span className="text-sm text-[var(--text-secondary)]">
                  Free initial review
                </span>
              </div>

            </motion.div>

          </motion.div>


          {/* RIGHT PORTRAIT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-[330px] sm:max-w-[350px] lg:max-w-[360px]">

              {/* Soft Portrait Glow */}
              <div
                className="
                  absolute
                  -inset-5
                  rounded-[2rem]
                  bg-[var(--brand)]
                  opacity-[0.08]
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* Gold Offset Shape */}
              <div
                className="
                  absolute
                  top-4
                  left-4
                  w-full
                  h-full
                  rounded-xl
                  bg-[var(--brand)]
                  shadow-[0_0_30px_var(--brand-hover-transparent)]
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  aspect-[4/5]
                "
              >
                <img
                  src="/saboor.jpg"
                  alt="Abdus Saboor"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    grayscale
                    transition-all
                    duration-700
                    hover:grayscale-0
                  "
                />
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Home;