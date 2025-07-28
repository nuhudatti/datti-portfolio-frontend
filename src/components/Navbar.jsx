import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
