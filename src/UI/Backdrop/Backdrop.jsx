const Backdrop = ({ show, clicked }) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default Backdrop;
