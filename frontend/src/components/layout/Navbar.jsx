import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          ZWEARS<span>.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/shop">
            Shop
          </NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/login" aria-label="Login">
            <UserRound size={22} />
          </Link>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingBag size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;