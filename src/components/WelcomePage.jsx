import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
function WelcomePage() {
  const location = useLocation();
  console.log("LOCATION", location);
  return (
    <Row>
      <Col>
        <h3>BENVENUTO! SEI LOGGATO</h3>

        <p>
          Per il logout
          <Link className={`nav-link ${location.pathname === "/logout" ? "active" : ""}`} to="/logout">
            premi qui
          </Link>
        </p>
      </Col>
    </Row>
  );
}
export default WelcomePage;
