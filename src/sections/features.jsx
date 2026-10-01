import React from "react";
import Button from "@/elements/button";
import Icon from "@/elements/icons";

import {
    FaUserGraduate,
    FaBriefcase,
    FaLightbulb,
    FaRocket,
} from "react-icons/fa";

const Features_section = () => {
    return (
        <section className="relative min-h-screen overflow-hidden py-10 lg:py-0 my-20">
            {/* Features */}

                <h2 className="font-bold leading-tight text-4xl md:text-5xl text-center " >
                    My Website's Are:
                </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 p-3 my-4 ">

                <div className="flex gap-3 ">
                    <Icon
                        name="lightningbolt"
                        className="w-15 h-15 text-[var(--brand)]"
                    />

                    <div className="p-1">
                        <h4 className="font-semibold text-1xl md:text-2xl">
                            Fast Loading
                        </h4>

                        <p className="text-md my-0.5 text-[var(--text-secondary)] ">
                            Optimized Performance
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Icon
                        name="mobile"
                        className="w-15 h-15 text-[var(--brand)]"
                    />

                    <div className="p-1">
                        <h4 className="font-semibold text-1xl md:text-2xl">
                            Mobile Friendly
                        </h4>

                        <p className="text-md text-[var(--text-secondary)] my-0.5">
                            Responsive Design
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Icon
                        name="conversion"
                        className="w-15 h-15 text-[var(--brand)]"
                    />

                    <div className="p-1">
                        <h4 className="font-semibold text-1xl md:text-2xl">
                            Conversion Focused
                        </h4>

                        <p className="text-md text-[var(--text-secondary)] my-0.5 ">
                            Results Driven
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features_section

