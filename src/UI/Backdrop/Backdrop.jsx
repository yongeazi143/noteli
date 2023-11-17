const Backdrop = ({ show, clicked }) =>
  show ? <div className="backdrop show" onClick={clicked}></div> : null;

export default Backdrop;
