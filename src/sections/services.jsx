import React from "react";


const Services = () => {
    return (
        <section className="
      relative
      bg-[var(--BACKGROUND)]
      py-16
      lg:py-24
      overflow-hidden
      ">

            <div className="flex items-center gap-2">
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


            </div>
            <div>
                <h1 className="text-4xl md:text-5xl">What I Can Help you With</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <div className="h-100  w-100 rounded-md bg-[var(--surface)] text-[var(--text-secondary)] ">
                   <p> logo</p>
                    <h1>hading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea quia doloribus accusamus in. A corporis quisquam quae modi tempore tenetur quo doloremque quam, saepe, expedita perspiciatis suscipit adipisci cumque?</p>


                </div>


                 <div className="h-100  w-100 bg-blue-500">
                   <p> logo</p>
                    <h1>hading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea quia doloribus accusamus in. A corporis quisquam quae modi tempore tenetur quo doloremque quam, saepe, expedita perspiciatis suscipit adipisci cumque?</p>


                </div>



 <div className="h-100  w-100 bg-blue-500">
                   <p> logo</p>
                    <h1>hading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea quia doloribus accusamus in. A corporis quisquam quae modi tempore tenetur quo doloremque quam, saepe, expedita perspiciatis suscipit adipisci cumque?</p>


                </div>



            </div>
        </section>
    )
}

export default Services

