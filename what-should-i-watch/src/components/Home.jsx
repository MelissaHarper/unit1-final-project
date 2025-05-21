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
        <p> How to...</p>
        <div className="startNow">
          <button onClick={handleRedirect}> Start Now </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
