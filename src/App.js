import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import Inputs from "./components/Input";
import List from "./components/List";
import Title from "./components/Title";

function App(props) {
  const [item, setItem] = useState([])

  function sendTask(callbackTask) {
    setItem(callbackTask)
  }
  return (
    <>
      <div className="app">
        <Title />
        <div className="container-components">
          <Inputs sendTask={sendTask}/>
          <List task={item}/>
        </div>
      </div>
    </>
  );

}

export default App;
