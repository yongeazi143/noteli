import { useRef } from "react";
import CardAnimation from "../../hoc/Animation/CardsAnimation/CardsAnimation";
import Card from "./SingleCard/Card";
import SlideInFromTop from "../../hoc/Animation/SlideInFromTop/SlideInFromTop";

const Usages = () => {
  const cardsRef = useRef();
  return (
    <section className="bg-footer py-5">
      <SlideInFromTop />
      <CardAnimation forwardRef={cardsRef}>
        <Card />
      </CardAnimation>
    </section>
  );
};

export default Usages;
