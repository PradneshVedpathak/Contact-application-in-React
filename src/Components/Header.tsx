import "./Stylesheet/Header.css";
import { Link } from "react-router-dom";
function Header({ setActionOnData }: any) {
  return (
    <>
      <div className="Header">
        <h1>Contact Appliction</h1>
        {
          <Link to="/ContactForm">
            <button className="btn btn-light">Add Contact</button>
          </Link>
        }
      </div>
    </>
  );
}

export default Header;
