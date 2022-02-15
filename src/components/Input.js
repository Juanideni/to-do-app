import { Form, Button, Row, Col } from "react-bootstrap";
function Inputs() {
  return (
    <>
      <Form className="formulary">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Form.Control type="text" placeholder="For ex: Tidy my room" />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2" variant="outline-light">
              Add it! 
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default Inputs;
