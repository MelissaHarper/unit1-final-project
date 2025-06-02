function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> What Should I Watch? </h1>
      </div>
      <div className="howTo">
        <p>Click the button below to get a random movie recommendation.</p>
        {/* <div className="startNow">
          <button onClick={handleRedirect}> Start Now </button>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
