import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

function ToDo(props) {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const taskDetails = {
      id: Math.floor(Math.random() * 1000),
      item: task,
    };
    setTaskList([...taskList, taskDetails]);
    setTask("");
  };

  const deleteById = (id) => {
    setTaskList(taskList.filter((tasks) => tasks.id !== id));
  };
  function getTask(e) {
    setTask(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container-components">
        <Form className="formulary" onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="for ex: Tidy my room"
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

        {taskList !== "" ? (
          <ul className="list-ul">
            {taskList.map((tasks) => (
              <>
                <li className="div-li">
                  {tasks.item !== "" ? (
                    <>
                      <h5>{tasks.item}</h5>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteById(tasks.id)}
                      >
                        {" "}
                        Delete
                      </Button>
                      <Button variant="outline-info">Edit</Button>
                    </>
                  ) : (
                    ""
                  )}
                </li>
              </>
            ))}{" "}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default ToDo;

