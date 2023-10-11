import Polygon from "../../UI/SVG/polygon";

const Footer = () => (
  <footer className="w-full p-4 flex flex-col h-96 bg-footer text-gray-100 items-center justify-start">
    <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-16 ">
      <div className="relative">
        <Polygon />
        <h1 className="absolute -right-12 bottom-6 font-unica font-bold text-3xl text-orange">
          Note.li
        </h1>
      </div>
      <div className="w-[1px] h-5 md:h-10 bg-gray-dark md:hidden" />
      <p className="font-serif font-bold text-sm text-gray-100 md:w-40 ">
        Where your notes are saves and secured
      </p>
    </div>
    <div className="mt-5">
      <h1 className="font-serif font-medium text-base text-gray-100">
        Subscribe to our newletters to stay updated
      </h1>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-dark ring-1 bg-footer  placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 mt-2"
        />
        <button
          type="submit"
          className="block w-full rounded-full bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3538a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className="flex flex-col gap-2 items-center justify-evenly mt-5">
      <ul className="w-full flex items-center justify-evenly gap-3">
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <p className="font-serif font-medium text-base text-gray-100">
        © 2023 Eazi Technologies Inc.
      </p>
    </div>
  </footer>
);

export default Footer;
