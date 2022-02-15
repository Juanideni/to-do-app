import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Inputs from "./components/Input";
import List from "./components/List";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="app">
        <Title />
        <div className="container-components">
        <Inputs />
        <List/>
        </div>
      </div>
    </>
  );

}

export default App;
