import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/filterContainer");
  };
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> What Should I Watch? </h1>
      </div>
      <div className="howTo">
        <p>
          Click the button below select what options you want included in your
          search.
        </p>
        <div className="startNow">
          <button onClick={handleRedirect}> Start Now </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
