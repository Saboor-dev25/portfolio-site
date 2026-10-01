import React from "react";
import Button from "@/elements/button";
import Icon from "@/elements/icons";

const About = () => {
    return (
        <section
            id="About"
            className="
      relative
      bg-[var(--surface)]
      py-16
      lg:py-24
      overflow-hidden
      "
        >


            {/* Golden Glow */}
            <div
                className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      w-[500px]
      h-[500px]
      rounded-full
      blur-3xl
      opacity-10
      pointer-events-none
    "
                style={{
                    background: "var(--brand)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* IMAGE COLUMN */}
                    <div className="relative">

                        <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                            <img
                                src="/laptop.png"
                                alt="Laptop setup"
                                className="
                w-full
                aspect-[4/3]
                object-cover
                object-center
                "
                            />
                        </div>

                    </div>

                    {/* CONTENT COLUMN */}
                    <div className="space-y-6">

                        {/* Label */}
                        <div className="flex items-center gap-3">

                            <span
                                className="
                w-2
                h-2
                rounded-full
                bg-[var(--brand)]
                shadow-[0_0_12px_var(--brand)]
                "
                            />

                            <p
                                className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[var(--brand)]
                font-semibold
                "
                            >
                                About Me
                            </p>

                        </div>

                        {/* Heading */}
                        <h2
                            className="
              font-bold
              leading-tight
              text-4xl
              md:text-5xl
              "
                        >
                            More Than Code.
                            <br />
                            I Build{" "}
                            <span className="text-[var(--brand)]">
                                Solutions
                            </span>
                            .
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">

                            <p>
    I'm Abdus Saboor, a Full Stack Web Developer who started his
    coding journey in 2021 by learning Python. Since then, I've explored
    WordPress, web development, and social media marketing, and have been
    practicing full-stack development for over a year.
</p>

<p>
    I currently work with technologies like HTML, CSS, JavaScript, React,
    Next.js, and Node.js.
</p>

<p>
    My goal is to build fast, reliable, and purposeful websites and web
    applications that create meaningful experiences for users and help
    businesses grow.
</p>

                        </div>

                        {/* Button */}
                        {/* <div className="pt-2">

                            <Button variant="outline" size="sm">
                                Know More About Me

                                <Icon
                                    name="arrowright"
                                    className="w-4 h-4 ml-2"
                                />
                            </Button>

                        </div> */}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
