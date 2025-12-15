import { Link, useLocation } from "react-router-dom";
import "../css/BracketNav.css";

const pages = [
	{ label: "home", path: "/"},
  { label: "about", path: "/about" },
  { label: "uptime", path: "/uptime" },
  { label: "stats", path: "/stats" },
];

function BracketNav() {
  const location = useLocation();

  return (
    <nav className="bracket-nav">
      {pages.map((page) => {
        const active = location.pathname === page.path;

        return (
          <Link
            key={page.path}
            to={page.path}
            className={`bracket-link ${active ? "active" : ""}`}
          >
            <span className="bracket left">[</span>
            <span className="label">{page.label}</span>
            <span className="bracket right">]</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default BracketNav;
