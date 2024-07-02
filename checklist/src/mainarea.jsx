import Label from "./label";

function MainArea({ copy, cclist, clear }) {
  return (
    <div className="but">
      <div className="main">
        {copy.map((ele, index) =>
          ele.trim() ? (
            <Label key={index} ele={ele} cclist={cclist[index]} />
          ) : null
        )}
      </div>
      <button onClick={clear} className="clear">
        Clear All
      </button>
    </div>
  );
}

export default MainArea;
