import "../About.css";

const About = () => {
  return (
    <div className="about_section">
      <div className="image-container">
        <img src="..\assets\background-boutique.jpg" alt="Image description" />
        <div className="image-text">
          <h1>About Us</h1>
          <h2>Welcome to our company!</h2>
          <p>
            The number 1 stop to try on anything before you buy! From now on, we
            are going to help you to first love what you buy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
