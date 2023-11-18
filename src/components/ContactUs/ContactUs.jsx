import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const sendFeedback = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        setIsSending(false);
        swal({
          title: "Success",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
        setUserName("");
        setUserEmail("");
        setUserMessage("");
      },
      (error) => {
        setIsSending(false);
        swal({
          title: "Error",
          text: "Oops! Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    );

    e.target.reset();
  };

  return (
    <section
      className="bg-footer flex flex-col items-center justify-start w-full h-auto p-4 text-gray-100 text-center font-normal text-sm font-poppins"
      id="contact-us"
    >
      <p className="mb-5">Do you have any suggestions?</p>
      <p>
        Tell us what you like us to improve <br></br> your feedback will go a
        long way.
      </p>

      <form
        ref={formRef}
        className="w-full mt-4 max-w-xl"
        onSubmit={sendFeedback}
      >
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 mb-5 dark:bg-[#1D232A]"
          required
        />
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 mb-5 dark:bg-[#1D232A]"
          required
        />
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Your Message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 mb-5  dark:bg-[#1D232A]"
          required
        />
        <button
          type="submit"
          className={`block w-full rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3538a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  ${
            isSending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : `Let's talk`}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
