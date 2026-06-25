// import React from "react";
// import Button from "@/elements/button";
// import Icon from "@/elements/icons";
// const About = () => {
//     return (
//         <section className="relative min-h-screen flex items-center bg-[var(--surface)] overflow-hidden py-20 lg:py-0">

//             {/* right col */}
//             <div>

//                 <img
//                     src="/laptop.png"
//                     alt="laptop image"
//                     className="w-full h-[400px] rounded object-cover "
//                 />

//             </div>

//             {/* left col */}

//             <div>
//                 {/* Label */}
//                 <div className="flex items-center gap-3">
//                     <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]"></span>

//                     <p className="text-xs uppercase tracking-[0.2em] text-[var(--TEXT-PRIMARY)] font-semibold">
//                         ABOUT ME
//                     </p>
//                 </div>

//                 <div className="w-[500px]">
//                     <h1 className="font-bold leading-tight text-5xl md:text-6xl lg:text-5xl">
//                         More Than Code
//                         <br />
//                         I Build
//                         <span className="text-[var(--brand)]">
//                             Solutions
//                         </span>
//                         .
//                     </h1>

//                     <p>I’m Abdul Saboor, a Full Stack Web Developer focused on building fast, modern websites and web apps that help businesses generate leads and convert visitors into customers.

//                        <br/> I enjoy solving problems through simple, effective solutions and pay close attention to how users interact with a product from start to finish.
//                         My goal is to build websites that feel reliable, purposeful, and built with intention behind every detail.
//                     </p>

//                     <Button varinat="outline" size="md">Know More About Me
//                         <Icon name="arrowright"></Icon>
//                     </Button>

//                 </div>
//             </div>


//         </section>
//     )
// }

// export default About


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
                                I'm Abdul Saboor, a Full Stack Web Developer focused on
                                building fast, modern websites and web applications that help
                                businesses generate leads and convert visitors into customers.
                            </p>

                            <p>
                                I enjoy solving problems through simple, effective solutions
                                and pay close attention to how users interact with a product
                                from start to finish.
                            </p>

                            <p>
                                My goal is to build websites that feel reliable,
                                purposeful, and built with intention behind every detail.
                            </p>

                        </div>

                        {/* Button */}
                        <div className="pt-2">

                            <Button variant="outline" size="sm">
                                Know More About Me

                                <Icon
                                    name="arrowright"
                                    className="w-4 h-4 ml-2"
                                />
                            </Button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
