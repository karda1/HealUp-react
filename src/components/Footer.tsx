import type { FC } from "react";

const Footer: FC<{ bg?: string }> = ({ bg }) => (
  <footer
    className="text-dark pt-5"
    style={{ backgroundColor: bg || "#A0C7F6" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/react.svg"
              alt="React"
              width="30"
              height="30"
            />
            HealUp
          </a>
          <br />
          <br />
          <a href="https://www.facebook.com/">
            <img
              src="./img/facebook.png"
              alt="Facebook"
              width="25"
              height="25"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="./img/instagram.png"
              alt="Instagram"
              width="25"
              height="25"
            />
          </a>
          <a href="https://www.x.com/">
            <img src="./img/X.png" alt="X" width="20" height="20" />
          </a>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Link utili</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Servizi
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Contattaci</h5>
          <small>
            Email: info@healup.it
            <br />
            Telefono: +39 123 456 789
          </small>
        </div>
      </div>
      <hr className="my-3" />
      <div className="text-center pb-3">
        <small className="text-muted">
          &copy; {new Date().getFullYear()} HealUp. Tutti i diritti riservati.
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
