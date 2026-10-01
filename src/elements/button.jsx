// import React from "react";

// const Button = ({ className = "" , size = "sm" , children}) => {

//     const baseclasses = 
//     "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] bg-[var(--brand)] text-[var(--text-primary)] hover:bg-[var(--brand)]/90 shadow-lg shadow-brand/25";


//     const sizeclasses = {
//         sm: " px-6 py-3 text-base",
//         lg: "px-8 py-4 text-lg"
//     }

// const classes = `${baseclasses} ${sizeclasses(size)} ${className}`

// return (
//     <button className="classes">
//         <span className="relative flex items-center justify-center gap-2">
//             {children}
//         </span>
//     </button>
// )

// }
// export default Button


import React from "react";

const Button = ({ className = "", variant = "outline" ,  size = "sm", onClick, children }) => {


    const variantClasses = {
    outline:
        "shadow-[0_0_5px_var(--brand)] border-2 border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand-hover)] hover:border-[var(--brand-hover)]  hover:-translate-y-0.5 hover:text-[var(--text-primary)]",

    text_btn:
    "text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-transform duration-200 hover:translate-y-1",    

   
    filled:
        "bg-[var(--brand)] border-2 border-[var(--border-filled-btn)] text-[var(--text-primary)] hover:bg-[var(--brand-hover)] hover:border-[var(--brand-hover)] hover:-translate-y-0.5 hover:shadow-lg"
};


    // const baseclasses =
    //     "relative overflow-hidden rounded border-2 border-[var(--brand)]  font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]  text-[var(--brand)] hover:bg-[var(--brand-hover)] hover:text-[var(--text-primary)]  shadow-xl";


const baseclasses =
    "relative overflow-hidden rounded font-medium  transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]";

    const sizeclasses = {
        sm: "px-4 py-2 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // const classes = `${baseclasses} ${sizeclasses[size]} ${className}`;
    const classes =
    `${baseclasses} ${variantClasses[variant]} ${sizeclasses[size]} ${className}`;

    return (
        <button className={classes} onClick={onClick}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;



// Reusable Button component that combines:
// 1. Shared base styles (accessibility, transitions, layout)
// 2. Size variants (sm, lg)
// 3. Visual variants (outline, filled)
// 4. Custom classes via className
// The final class string is built dynamically from these props,
// making the component easy to reuse and scale throughout the project.
// Reusable button component that generates its final styling
// by combining base styles, size variants, visual variants,
// and optional custom classes passed through props.