import React from "react";
import { HiArrowRight } from 'react-icons/hi2';
import { RxLightningBolt } from "react-icons/rx";
import { CiMobile2, CiMonitor, CiLocationOn } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaArrowDown ,FaPaperPlane } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const icons_lib =
{
    arrowright: HiArrowRight,
    arrowdown: FaArrowDown,
    lightningbolt: RxLightningBolt,
    mobile: CiMobile2,
    monitor: CiMonitor,
    location: CiLocationOn,
    conversion: FiTarget,
    reload: TfiReload,
    settings: IoMdSettings,
    email: MdOutlineEmail,
    phone: FaPhoneAlt,
    github: FaGithub,
    linkedin: FaLinkedin,
    cross: IoMdClose,
    plane : FaPaperPlane
}



const Icon = ({ name, className = "" }) => {

    const sameclasses = "text-[var(--brand)] transition-transform duration-200 hover:translate-y-1"
    const Selected_icon = icons_lib[name]
    
    const classes = `${sameclasses} ${className}`
    if (!Selected_icon) {
        console.warn(`Icon ${name} not found`)
        return null
    }

    return (
        <Selected_icon className={classes} />
    )
}

export default Icon

