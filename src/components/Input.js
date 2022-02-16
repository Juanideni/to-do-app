
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react"

function Inputs(props) {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  
  const addTask = () => {
    const taskDetails = {
      id: Math.floor(Math.random() * 1000),
      item: task
    }
    setTaskList([...taskList, taskDetails])
    props.sendTask(taskList)
    
}
  

function getTask(e){
  setTask(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTask("")
  }

 
  return (
    <>
      <Form className="formulary" onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="For ex: Tidy my room"
              onChange={getTask}
            />
          </Col>
          <Col xs="auto">
            <Button
              type="submit"
              className="mb-2"
              variant="outline-light"
              onClick={addTask}
            >
              Add it!
            </Button>
          </Col>
        </Row>
      </Form>

    
    </>
  );
}
export default Inputs;
//onClick={()=>props.sendTask(objectTask)}