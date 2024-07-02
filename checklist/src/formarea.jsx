function FormArea({ text, clist, handleSubmit, inputChange, selectChange }) {
  return (
    <div className="formarea">
      <p className="whats">Whats on your checklist ?</p>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <select className="clist" onChange={selectChange} value={clist}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
          <input
            onChange={inputChange}
            type="text"
            value={text}
            placeholder="Enter Item..."
          ></input>
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
}
export default FormArea;
