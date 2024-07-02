import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
function Label({ ele, cclist }) {
  const [check, setCheck] = useState(false);
  function checkMate() {
    setCheck(!check);
  }
  return (
    <div className="label">
      <button className="buttons" onClick={checkMate}>
        {check ? <FaCheck /> : ""}
      </button>
      <div className={check ? "strike" : ""}>
        {" "}
        {ele}( {cclist} )
      </div>
    </div>
  );
}
export default Label;
