const Footer = () => {
  //Button takes you to the same place, but returns a different result depending on which one is pushed. Getters and Setters?
  return (
    <footer>
      <button className="random-movie">Get Random Movie</button>
      <button className="random-tv-show">Get Random TV Show</button>
      <button className="random-all">Surprise Me!</button>
    </footer>
  );
};

export default Footer;
