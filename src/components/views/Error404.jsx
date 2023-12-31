import { Button } from "react-bootstrap";
import error from "../../assets/404_error.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" />
      <div>
        <Link to={"/"}>
          <Button variant="danger">Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
