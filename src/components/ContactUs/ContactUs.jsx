const ContactUs = () => {
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

      <form action="GET" className="w-full mt-4 max-w-xl">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 mb-5"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 mb-5"
        />
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Your Message"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 mb-5"
        />
        <button
          type="submit"
          className="block w-full rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3538a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-5"
        >
          {`Let's talk`}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
