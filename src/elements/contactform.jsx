// import React, { useState, useEffect } from "react";

// const ContactForm = ({ contactdata = { subject: "", message: "" }, }) => {

//     const [subject, setsubject] = useState(contactdata.subject)
//     const [message, setmessage] = useState(contactdata.message)

//     useEffect(() => {
//         setsubject(contactdata.subject);
//         setmessage(contactdata.message);
//     }, [contactdata]);
    
//     return (
//         <form name="contact"
//             method="POST"
//             data-netlify="true"
//             className="contact-form"
//         >
//             <input
//                 type="hidden"
//                 name="form-name"
//                 value="contact"
//             />

//             <div className="form-group">
//                 <label htmlFor="name">Name *</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Your name"
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="email">Email *</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="your@email.com"
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="Your phone number"
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="subject">Subject *</label>
//                 <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={subject}
//                     onChange={(e) => setsubject(e.target.value)}
//                     placeholder="Subject"
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="message">Message *</label>
//                 <textarea
//                     id="message"
//                     name="message"
//                     value={message}
//                     onChange={(e) => setmessage(e.target.value)}
//                     rows="7"
//                     placeholder="Write your message..."
//                     required
//                 ></textarea>
//             </div>

//             <button type="submit">
//                 Send Message
//             </button>
//         </form>
//     );
// };

// export default ContactForm;
import React, { useState, useEffect } from "react";

const ContactForm = ({
  contactdata = { subject: "", message: "" },
}) => {
  const [subject, setsubject] = useState(contactdata.subject);
  const [message, setmessage] = useState(contactdata.message);

  useEffect(() => {
    setsubject(contactdata.subject);
    setmessage(contactdata.message);
  }, [contactdata]);

  const inputClass = `
    w-full
    rounded-xl
    border
    border-[rgba(255,255,255,0.08)]
    bg-[rgba(10,10,10,0.30)]
    px-4
    py-3.5
    text-sm
    text-[var(--text-primary)]
    outline-none
    placeholder:text-[rgba(163,163,163,0.75)]
    transition-all
    duration-300
    focus:border-[rgba(212,160,23,0.55)]
    focus:bg-[rgba(10,10,10,0.45)]
    focus:shadow-[0_0_0_3px_rgba(212,160,23,0.08)]
  `;

  const labelClass = `
    mb-2
    block
    text-sm
    font-medium
    text-[var(--text-primary)]
  `;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="space-y-5"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />

      <div className="form-group">
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-[var(--brand-hover)]">*</span>
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className={inputClass}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-[var(--brand-hover)]">*</span>
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          required
          className={inputClass}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your phone number"
          className={inputClass}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="text-[var(--brand-hover)]">*</span>
        </label>

        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
          placeholder="What can I help you with?"
          required
          className={inputClass}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[var(--brand-hover)]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          rows="6"
          placeholder="Tell me a little about your project..."
          required
          className={`${inputClass} resize-none leading-6`}
        />
      </div>

      <button
        type="submit"
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-[var(--brand)]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-[var(--background)]
          transition-all
          duration-300
          hover:bg-[var(--brand-hover)]
          hover:shadow-[0_0_30px_rgba(212,160,23,0.20)]
          active:scale-[0.99]
        "
      >
        Send Message

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
};

export default ContactForm;