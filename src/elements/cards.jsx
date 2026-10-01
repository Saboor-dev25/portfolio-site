import React from "react";
// import Icon from "@/elements/icons.jsx";

// const variantClasses = 

    
//       {

//       baseclasses : "h-80  w-100 p-7 rounded-md bg-[var(--surface)] text-[var(--text-secondary)]" ,
//  yellow_card : "bg-[var(--brand)] text-[var(--text-primary)] h-80  w-100 p-7 rounded-md"
    
// }


// // const ServciesCard = ( {ClassName="" , service="" , children} ) => {
//     const ServiceCard = ({ icon, title, description , variant= "baseclasses" }) => {
//         const classes = `${variantClasses[variant]}`
//       return (
//         <div className={classes}>
//           <Icon name={icon}className=" w-10 h-10 "/>
//           <h3 className="
//               font-bold
//               leading-tight
//               text-2xl
//               md:text-3xl
//               my-5
//               ">{title}</h3>
//           <p>{description}</p>
//         </div>
//       );
//     };
    
//     export default ServiceCard;








// import Icon from "@/elements/icons.jsx";

// const variantClasses = {
//  baseclasses:
//   "w-full min-h-72 p-5 md:p-7 rounded-xl bg-[var(--surface)] text-[var(--text-secondary)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,160,23,0.25)]  animate-fade-in",

//  yellow_card:
//   "w-full min-h-72 p-5 md:p-7 rounded-xl bg-[var(--brand)] text-[var(--text-primary)] shadow-[0_0_25px_rgba(212,160,23,0.28)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(212,160,23,0.45)]  animate-fade-in",
// };


// const ServiceCard = ({ icon, title, description, variant = "baseclasses",}) => {
//     const classes = variantClasses[variant];
//     const iconClasses =
//   variant === "yellow_card"
//     ? "w-10 h-10 md:w-12 md:h-12 text-white"
//     : "w-10 h-10 md:w-12 md:h-12 text-[var(--brand)]";

//   return (
//     <div className={classes}>
//       <Icon name={icon}  className={iconClasses} />

//       <h3 className="font-bold text-2xl md:text-3xl leading-tight my-5">
//         {title}
//       </h3>

//       <p className="text-sm md:text-base leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default ServiceCard;
// const service_card = {

//     development : 
//     <div>hello</div>,

// }
// }

// ServiceCard.jsx
import Icon from "@/elements/icons.jsx";

const variantClasses = {
  baseclasses:
    "relative w-full min-h-[500px] p-6 md:p-7 rounded-xl bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,160,23,0.25)] animate-fade-in flex flex-col",

  yellow_card:
    "relative w-full min-h-[500px] p-6 md:p-7 rounded-xl bg-[var(--brand)] text-[var(--text-primary)] border border-[var(--brand-hover)] shadow-[0_0_25px_rgba(212,160,23,0.28)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(212,160,23,0.45)] animate-fade-in flex flex-col",
};

const ServiceCard = ({
  icon,
  title,
  description,
  features = [],
  duration,
  price,
  badge,
  variant = "baseclasses",
  action,
}) => {
  const isFeatured = variant === "yellow_card";

  const iconClasses = isFeatured
    ? "w-8 h-8 md:w-10 md:h-10 text-white"
    : "w-8 h-8 md:w-10 md:h-10 text-[var(--brand)]";

  return (
    <div className={variantClasses[variant]}>
      {/* Badge */}
      {badge && (
        <div className="mb-5">
          <span
            className="
              inline-flex
              items-center
              px-3
              py-1.5
              rounded-md
              bg-white/80
              text-[var(--background)]
              text-xs
              font-bold
            "
          >
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <Icon
        name={icon}
        className={iconClasses}
      />

      {/* Title */}
      <h3
        className="
          font-bold
          text-2xl
          md:text-3xl
          leading-tight
          mt-5
          mb-4
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`
          text-sm
          md:text-base
          leading-relaxed
          min-h-[72px]
          mb-4
          ${
            isFeatured
              ? "text-white/90"
              : "text-[var(--text-secondary)]"
          }
        `}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        className={`
          my-5
          border-t
          ${
            isFeatured
              ? "border-white/30"
              : "border-[var(--border)]"
          }
        `}
      />

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="
              flex
              items-start
              gap-3
              text-sm
              leading-relaxed
            "
          >
            <span
              className={`
                mt-1
                text-xs
                ${
                  isFeatured
                    ? "text-white"
                    : "text-[var(--brand)]"
                }
              `}
            >
              •
            </span>

            <span
              className={
                isFeatured
                  ? "text-white/90"
                  : "text-[var(--text-secondary)]"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Bottom Section */}
      <div
        className="
          mt-auto
          pt-6
        "
      >
        {/* Price / Duration */}
        <div
          className={`
            pt-4
            border-t
            flex
            items-center
            justify-between
            gap-4
            ${
              isFeatured
                ? "border-white/30"
                : "border-[var(--border)]"
            }
          `}
        >
          <span
            className={`
              text-sm
              ${
                isFeatured
                  ? "text-white/80"
                  : "text-[var(--text-secondary)]"
              }
            `}
          >
            {duration}
          </span>

          <span className="text-sm md:text-base font-bold text-right whitespace-nowrap">
            {price}
          </span>
        </div>

        {/* Continue Button */}
        <div className="mt-4 ml-2">
          {action}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
