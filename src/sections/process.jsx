import React from "react";
import ProcessBox from "@/elements/processbox";



const Process = () => {

    const cards = [
        {
          number: "01",
            title: "Discovery",
            description:
                "We discuss your goals, audience, and project requirements before writing any code.",
        },

        {
          number: "02", 
            title: "Plan",
            description:
                "Planning the structure , features and other experiences",
        },


        {
          number: "03",
            title: "Design",
            description:
                "Crafting clean, modern designs that represents your brand.",
        },


        {
          number: "04",
            title: "Develop",
            description:
                "Building your website with clean, scalable code.",
        },


        {
          number: "05",
            title: "Launch Support",
            description: "Launching the website and providing ongoing support.",
        },
    ]

    return (

        <section
            className="
      relative
      bg-[var(--background)]
      py-16
      lg:py-24
      overflow-
      grid-texture
      "
      id="Process"
        >


            {/* Golden Glow */}
            <div
                className="
      absolute
      right-0
      top-1/4
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
                <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]" />

                    <p
                        className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--brand)]
              font-semibold
            "
                    >
                        MY PROCESS
                    </p>
                </div>

                {/* Heading */}
                <h2
                    className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            mt-4
            mb-12
            text-[var(--text-primary)]
          "
                >
                    HOW I WORK
                </h2>
            </div>


            <div className="relative mt-16 ">
 

<div className="relative mt-16 max-w-6xl mx-auto px-6 lg:px-8">

  {/* Background Timeline */}
  <div
    className="
      absolute
      left-[40px]
      md:left-1/2
      top-0
      bottom-0
      w-[2px]
      bg-[var(--border)]
      md:-translate-x-1/2
    "
  />

  <div className="space-y-16">

    {cards.map((item, index) => {

      const right = index % 2 === 0;

      return (

        <div
          key={item.title}
          className="
            relative
            grid
            grid-cols-[32px_1fr]
            md:grid-cols-[1fr_50px_1fr]
            gap-6
            items-center
          "
        >

          {/* LEFT */}
          <div className="hidden md:block">

            {!right && (

              <ProcessBox
                {...item}
                index={index}
                animationDirection="left"
              />

            )}

          </div>

          {/* TIMELINE */}
          <div className="relative flex justify-center">

            {/* Dot */}
            <div
              className="
                relative
                z-20
                w-4
                h-4
                rounded-full
                bg-[var(--brand)]
                shadow-[0_0_18px_var(--brand)]
              "
            />

          </div>

          {/* RIGHT */}
          <div className="hidden md:block">

            {right && (

              <ProcessBox
                {...item}
                index={index}
                animationDirection="right"
              />

            )}




   



          </div>

          {/* MOBILE */}
          <div className="md:hidden">

            <ProcessBox
              {...item}
              index={index}
              animationDirection="up"
            />

          </div>

        </div>

      );

    })}

  </div>

</div>

            

            </div>


        </section>

    )
}

export default Process

