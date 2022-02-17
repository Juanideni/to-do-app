import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ToDo from "./components/ToDo";

import Title from "./components/Title";

function App(props) {
 
  return (
    <>
      <div className="app">
        <Title />
        <ToDo/>
          
      
      </div>
    </>
  );

}

export default App;
