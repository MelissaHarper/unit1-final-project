import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> What Should I Watch? </h1>
      </div>
      <div className="howTo">
        <p>
          <p> How to...</p>
          <Link to="/filterContainer">
            <button> Start Now </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
