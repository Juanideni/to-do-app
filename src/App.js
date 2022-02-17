import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import ToDo from "./components/ToDo";
import Foot from "./components/Foot";
import Title from "./components/Title";

function App(props) {
 
  return (
   
     <div className="app">
   
        <Title />
        <ToDo/>
        <Foot/>
     </div>
  
  );

}

export default App;
