
import {Button} from "react-bootstrap"

function List(props) {
    console.log(props.task)
    return (
      <>
        {props.task !== "" ? (
          <ul className="list-ul">
            {props.task.map((tasks) => (
                <>
                    <li className="div-li">
                        {tasks.item !== "" ?
                            <>
                            <h5>
                            {tasks.item}
                            </h5>
                            <Button variant="outline-danger"> Delete</Button>
                            <Button variant="outline-info">Edit</Button>
                            </>
                    :
                    ""
                        }
                         
                    </li>
                    
                
                </>
            ))}{" "}
                </ul>
            
        ) : (
          ""
        )}
      </>
    );
}
export default List;
