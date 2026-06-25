import React from "react";
import Button from "@/elements/button";
import Icon from "@/elements/icons";

import {
  FaUserGraduate,
  FaBriefcase,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0 my-20">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-[var(--background)]/70" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-20"
            style={{
              backgroundColor: "var(--brand-hover)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]"></span>

              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)] font-semibold">
                Full Stack Web Developer
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-tight text-5xl md:text-6xl lg:text-5xl">
              Helping Businesses
              <br />
              Build a Stronger
              <br />
              <span className="text-[var(--brand)]">
                Online Presence
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed">
              I create modern, responsive websites designed to build trust,
              improve user experience, and support business growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Button variant="filled" size="sm">
                Let's Talk
                <Icon
                  name="arrowright"
                  className="w-4 h-4 ml-2"
                />
              </Button>

              <Button variant="outline" size="sm">
                Learn About My Process
                <Icon
                  name="arrowdown"
                  className="w-4 h-4 ml-2"
                />
              </Button>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">

              <div className="flex gap-3">
                <Icon
                  name="lightningbolt"
                  className="w-6 h-6 text-[var(--brand)]"
                />

                <div>
                  <h4 className="font-semibold">
                    Fast Loading
                  </h4>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Optimized Performance
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Icon
                  name="mobile"
                  className="w-6 h-6 text-[var(--brand)]"
                />

                <div>
                  <h4 className="font-semibold">
                    Mobile Friendly
                  </h4>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Responsive Design
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Icon
                  name="conversion"
                  className="w-6 h-6 text-[var(--brand)]"
                />

                <div>
                  <h4 className="font-semibold">
                    Conversion Focused
                  </h4>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Results Driven
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="flex justify-center lg:justify-end">

            <div
              className="
                relative
                w-full
                max-w-md
                p-6
                rounded-3xl
                glass-strong
                overflow-hidden
                border
                border-[var(--border)]
                my-10
              "
            >

              {/* Glow */}
              <div
                className="absolute -inset-1 blur-3xl opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle,var(--brand),transparent 70%)",
                }}
              />

              <div className="relative z-10">

                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src="/saboor.jpg"
                    alt="Abdul Saboor"
                    className="w-full h-[320px] object-cover object-top bg-top"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold">
                  Abdul Saboor
                </h3>

                <p className="text-[var(--brand)] mt-1 mb-6">
                  Full Stack Developer
                </p>

                {/* List */}
                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <FaUserGraduate className="text-[var(--brand)]" />
                    <span>Student Leader</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-[var(--brand)]" />
                    <span>Freelancer</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaLightbulb className="text-[var(--brand)]" />
                    <span>Problem Solver</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaRocket className="text-[var(--brand)]" />
                    <span>Lifelong Learner</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;

