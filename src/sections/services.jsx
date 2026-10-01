// import React from "react";
// import ServiceCard from "@/elements/cards";

// const Services = () => {
//   const cards = [
//     {
//       icon: "monitor",
//       title: "Web Development",
//       description:
//         "Custom websites built with modern technologies and best practices.",
//     },
//     {
//       icon: "reload",
//       title: "Website Redesign",
//       description:
//         "Transform an existing website into a modern, high-performing one.",
//       variant: "yellow_card",
//     },
//     {
//       icon: "settings",
//       title: "Website Maintenance",
//       description:
//         "Keep your website secure, updated, and running smoothly.",
//     },
//   ];

//   return (
//     <section
//       className="
//         relative
//         bg-[var(--background)]
//         py-16
//         md:py-20
//         lg:py-24
//         overflow-hidden 
//       "
//       id="Services"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Label */}
//         <div className="flex items-center justify-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]" />

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.2em]
//               text-[var(--brand)]
//               font-semibold
//             "
//           >
//             SERVICES
//           </p>
//         </div>

//         {/* Heading */}
//         <h2
//           className="
//             text-3xl
//             sm:text-4xl
//             lg:text-5xl
//             font-bold
//             text-center
//             mt-4
//             mb-12
//             text-[var(--text-primary)]
//           "
//         >
//           What I Can Help You With
//         </h2>

//         {/* Cards */}

//         <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 grid-texture">
//           {cards.map((card) => (
//             <ServiceCard
//               key={card.title}
//               icon={card.icon}
//               title={card.title}
//               description={card.description}
//               variant={card.variant}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import { motion } from "framer-motion";
import Button from "@/elements/button";
import Icon from "@/elements/icons";


import ServiceCard from "@/elements/cards";

const Services = ({ setcontactdata }) => {
  const cards = [
    {
      icon: "monitor",
      title: "Web Development",
      description:
        "From nothing to live — structure, design, copy layout, build and launch.",
      features: [
        "Up to 6 pages, mobile-first build",
        "Contact form and enquiry alerts",
        "Analytics and Search Console setup",
        "One round of changes after launch",
      ],
      duration: "2–3 weeks",
      price: "PKR 25,000 – 100,000",
      message: "I’m looking to build a website for my business and would like to discuss what I have in mind. I’d be happy to go over the details on a free 5-minute call and see what would work best."
    },

    {
      icon: "reload",
      title: "Website Redesign",
      description:
        "Keep what's working, fix what's costing you enquiries.",
      features: [
        "Written review of your current site",
        "New structure and design",
        "Redirects — keep your search rankings",
        "Speed work included",
      ],
      duration: "2–3 weeks",
      price: "PKR 25,000 – 100,000",
      badge: "Most requested",
      variant: "yellow_card",
      message: "I’d like to get your thoughts on my current website and see how the design and overall experience could be improved and brought up to date. I’d be happy to discuss it with you on a free 5-minute call."
    },

    {
      icon: "settings",
      title: "Website Maintenance",
      description:
        "Your site stays fast, current and backed up — every month.",
      features: [
        "Weekly backups, security patches",
        "Up to 4 small changes a month",
        "Uptime monitoring",
        "Monthly speed and traffic summary",
      ],
      duration: "Cancel any time",
      price: "PKR 8,000 / mo",
      message: "I’m looking for someone to keep my website up to date and running smoothly. I’d like to discuss what that would look like and how we could work together on a free 5-minute call."
    },
  ];

  return (
    <section
      id="Services"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-16
        md:py-20
        lg:py-24
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2"
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

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--brand)]
              font-semibold
            "
          >
            SERVICES
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
          What I Can Help You With
        </motion.h2>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
            items-stretch
          "
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                features={card.features}
                duration={card.duration}
                price={card.price}
                badge={card.badge}
                variant={card.variant}
                action={

                  <Button variant="text_btn" size="sm"
                    className={card.variant === "yellow_card" ? "!text-[var(--background)] !hover:text-[var(--surface-hover)]" : ""
                    }
                    onClick={() => {
                      setcontactdata({
                        subject: card.title,
                        message: card.message
                      });

                      document.getElementById("Contact")?.scrollIntoView({
                        behavior: "smooth"
                      });
                    }} >
                    Continue

                    <Icon
                      name="arrowright"
                      className={`w-4 h-4 ml-2 ${card.variant === "yellow_card"
                          ? "!text-[var(--background)] hover:!text-[var(--surface-hover)]"
                          : ""
                        }`}
                    />
                  </Button>

                }
              />


            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;