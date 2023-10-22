import WaterDrop from "../../hoc/Animation/WaterDrop/WaterDrop";

const Logo = () => (
  <WaterDrop>
    <header className="relative md:ml-10 w-1/4 font-unica">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 79 79"
        fill="none"
      >
        <path
          d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
          fill="#65DAFF"
        />
      </svg>
      <h1 className="absolute left-5 top-1 font-bold text-xl">
        Note.<span className="text-orange">li</span>
      </h1>
    </header>
  </WaterDrop>
);
export default Logo;
