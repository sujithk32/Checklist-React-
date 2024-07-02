import Header from "./header";
import FormArea from "./formarea";
import MainArea from "./mainarea";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [clist, setClist] = useState(1);
  const [copy, setCopy] = useState([]);
  const [cclist, setCclist] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setCopy([...copy, text]);
    setCclist([...cclist, clist]);
    setText("");
    setClist(1);
  }
  function inputChange(e) {
    setText(e.target.value);
  }
  function selectChange(e) {
    setClist(parseInt(e.target.value));
  }
  function clear() {
    setCopy([]);
  }
  return (
    <>
      <Header />
      <FormArea
        text={text}
        clist={clist}
        handleSubmit={handleSubmit}
        inputChange={inputChange}
        selectChange={selectChange}
      />
      <MainArea copy={copy} cclist={cclist} clear={clear} />
    </>
  );
}
export default App;
