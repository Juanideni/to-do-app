import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [updatedTask, setUpdatedTask] = useState(null);

  const addTask = () => {
    if (task === "") {
      alert("Input cant be empty")
    }
     else if (task !== "" && !toggleSubmit) {
      setTaskList(
        taskList.map((tasks) => {
          if (tasks.id === updatedTask) {
            return { ...tasks, item: task };
          }
          return tasks;
        })
       );
        setUpdatedTask(null);
        setToggleSubmit(true);
       setTask("");
       
       
    } else {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        item: task,
      };
      setTaskList([...taskList, taskDetails]);
      setToggleSubmit(true)
       setTask("");
       
    }
  };

  const deleteById = (id) => {
    setTaskList(taskList.filter((tasks) => tasks.id !== id));
  };
  const deleteAll = () => {
    setTaskList([]);
  };
  const editTask = (id) => {
    let newTask = taskList.find((tasks) => {
      return tasks.id === id;
    });
    setToggleSubmit(false);
    setUpdatedTask(id);
    setTask(newTask.item);
  };

  function getTask(e) {
    setTask(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className=" row row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-1 g-4">
        <Form className="formulary" onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Form.Control type="text" value={task} onChange={getTask} />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                className="mb-2"
                variant="outline-light"
                onClick={addTask}
              >
                {toggleSubmit ? "Add it!" : "Edit it!"}
              </Button>
              {"    "}
              <Button
                type="submit"
                className="mb-2"
                variant="outline-light"
                onClick={deleteAll}
              >
                Delete all tasks!
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
                      <textarea className="task" disabled>{tasks.item}</textarea>
                      <div className="buttons">
                        <Button
                          variant="outline-danger"
                          onClick={() => deleteById(tasks.id)}
                        >
                          Delete
                        </Button>{" "}
                        <Button
                          variant="outline-info"
                          onClick={() => editTask(tasks.id)}
                        >
                          Edit
                        </Button>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </li>
                <br></br>
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
