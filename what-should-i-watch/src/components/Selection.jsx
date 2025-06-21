import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getCredits, getTrailers } from "../shared/call-functions";
import { options } from "../shared/call-structure";
import SelectionDescription from "./SelectionDescriptionCard";
import SelectionCredits from "./SelectionsCreditsCard";
import SelectionTrailers from "./SelectionTrailersCard";
import jtLoading from "../assets/images/jt-loading.gif";
import "../styles/Selection.css";

const Selection = () => {
  const { type, id } = useParams();
  // Use States
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [displayedCredits, setDisplayedCredits] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [visibleCreditsCount, setVisibleCreditsCount] = useState(0);

  const payload = options;

  // Load more cast credits
  const handleLoadMore = async () => {
    const resCredits = await getCredits(type || "", id || "", payload);
    if (resCredits.data)
      setDisplayedCredits(
        resCredits.data.cast.slice(0, visibleCreditsCount + 5)
      );
    setVisibleCreditsCount((prevCount) => prevCount + 5);
  };

  // Get Movie Details
  const getDetailMovie = async () => {
    const resData = await getDetail(type || "", id || "", payload);
    if (resData.data) setDetail(resData.data);

    const resCredits = await getCredits(type || "", id || "", payload);
    setDisplayedCredits(resCredits.data.cast.slice(0, visibleCreditsCount + 5));

    const resTrailers = await getTrailers(type || "", id || "", payload);
    if (resTrailers.data && resTrailers.data.results.length > 0)
      setTrailers(
        resTrailers.data.results
          .filter(
            (trailer) =>
              trailer.site === "YouTube" &&
              (trailer.type === "Teaser" || trailer.type === "Trailer") &&
              trailer.official
          )
          .slice(0, 5)
      );

    Promise.all([resData, resCredits, resTrailers]).then(() => {
      setIsLoading(false);
    });
    setIsFirstLoad(false);
  };

  // Reset data
  const resetData = () => {
    setDetail(null);
    setDisplayedCredits([]);
    setTrailers([]);
    setVisibleCreditsCount(1);
  };

  // When page mounts
  useEffect(() => {
    getDetailMovie();
  }, []);

  // Refetch if params id is change
  useEffect(() => {
    if (!isFirstLoad) {
      window.scrollTo(0, 0);
      resetData();
      setIsLoading(true);
      getDetailMovie();
      setVisibleCreditsCount(1);
      setDisplayedCredits([]);
    }
  }, [id]);

  return (
    <>
      {/* Banner, poster & description */}
      {!isLoading && <SelectionDescription movie={detail} />}

      <div className="credits-container">
        {/* Credits */}
        <div>
          <p className="title">Cast</p>
          {<SelectionCredits credits={displayedCredits} />}
          <button className="reusable-button" onClick={handleLoadMore}>
            Load More Credits
          </button>
        </div>
        <Suspense
          fallback=<img
            src={jtLoading}
            alt="John Travolta looking around confused"
          />
        >
          {/* Trailers */}
          <div>
            <p className="title">Trailers</p>
            {<SelectionTrailers trailers={trailers} />}
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Selection;
