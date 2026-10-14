import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">
            THE ZWEARS COLLECTION
          </p>

          <h1>
            Wear Your
            <br />
            Own Style.
          </h1>

          <p>
            Discover clothing that combines comfort,
            confidence, and everyday style.
          </p>

          <Link to="/shop" className="btn-primary">
            Shop Collection
          </Link>
        </div>
      </section>

      <section className="container intro-section">
        <p className="eyebrow">OUR PHILOSOPHY</p>

        <h2>Style Made Simple.</h2>

        <p>
          At ZWears, we believe great style starts with
          quality essentials you can wear every day.
        </p>
      </section>
    </main>
  );
};

export default Home;