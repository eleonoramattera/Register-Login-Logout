import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Row>
      <Col xs={12}>
        <h1>Benvenuto</h1>
        <p>
          Per accedere ai contenuti devi registrarti
          <Link className={`nav-link ${location.pathname === "/registrazione" ? "active" : ""}`} to="/registrazione">
            qui
          </Link>
        </p>
      </Col>
    </Row>
  );
}

export default Home;
