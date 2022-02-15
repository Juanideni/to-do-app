import { FiEdit3 } from "react-icons/fi";
import {Button} from "react-bootstrap"

function List() {
    return (
      <div className="div-container">
        <ul className="list-ul">
          <div className="div-li">
            <li>Tidy my room</li>
            <Button variant="outline-success">Edit</Button>
            <Button variant="outline-danger">Delete</Button>
          </div>
            <hr></hr>
        </ul>
      </div>
    );
}
export default List;
