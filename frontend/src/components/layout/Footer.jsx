import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h2>ZWEARS.</h2>

          <p>
            Everyday essentials. Elevated style.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>

        <div>
          <h3>Customer Support</h3>

          <p>Contact information coming soon.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ZWears.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;