import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}><Outlet/></Col>
      </Row>
    </Container>
  )
}
