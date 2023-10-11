import Card from "./SingleCard/Card";

const Usages = () => {
  return (
    <section className="bg-footer py-5">
      <header className="font-poppins text-center">
        <h1 className="font-semibold text-2xl text-blue">
          Who can use <span className="text-orange">Note.li?</span>
        </h1>
        <p className="text-gray-100 text-base font-normal tracking-widest leading-[43.2px] p-5 max-w-3xl mx-auto">
          Note.li is design for anyone seeking a secure and efficient solution
          to capture and organize their ideas. Weather you’re a student,
          professional, creative thinker, or someone who values privacy, note.li
          provides a <br /> user-friendly platform for individuals across
          various domains. The app caters to thse who prioritize the
          confidentiality and accessibility of their thoughts, making it a
          versatile tool for a wide range of users.
        </p>
      </header>
      <div
        className="m-auto max-w-[800px] flex flex-col items-center justify-center
      md:flex-row flex-wrap"
      >
        <Card />
      </div>
    </section>
  );
};

export default Usages;
