import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { getDetail, getCredits, getTrailers } from "../shared/call-functions";
import { options } from "../shared/call-structure";
import "../styles/Selection.css";
import DetailDescription from "./DetailDescription";
import DetailCredits from "./DetailCredits";
import DetailTrailers from "./DetailTrailers";

const Selection = () => {
  // const apiKey = import.meta.env.VITE_API_KEY;
  const { type, id } = useParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [displayedCredits, setDisplayedCredits] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [visibleCreditsCount, setVisibleCreditsCount] = useState(1);

  const payload = options;

  const handleLoadMore = async () => {
    const resCredits = await getCredits(type || "", id || "", payload);
    if (resCredits.data)
      setDisplayedCredits(
        resCredits.data.cast.slice(0, visibleCreditsCount + 5)
      );
    setVisibleCreditsCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 5000);
  }, []);

  // Get Detail Movie
  const getDetailMovie = async () => {
    const resData = await getDetail(type || "", id || "", payload);
    if (resData.data) setDetail(resData.data);

    const resCredits = await getCredits(type || "", id || "", payload);
    if (detail)
      setDisplayedCredits(
        resCredits.data.cast.slice(0, visibleCreditsCount + 5)
      );

    const resTrailers = await getTrailers(type || "", id || "", payload);
    if (detail) {
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
    }

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

  // Mounted
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

  return detail ? (
    <>
      {console.log(`Html Return ${detail}`)}
      {/* Banner, poster & description */}
      {!isLoading && <DetailDescription movie={detail} />}

      <div className="container md:mt-16 mt-10 md:space-y-12 space-y-8">
        {/* Credits */}
        <div>
          <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3"></p>
          {(!isLoading, detail) && <DetailCredits credits={displayedCredits} />}
          {detail && <button onClick={handleLoadMore}>Load More</button>}
        </div>

        {/* Videos */}
        <div>
          {detail && (
            <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3">
              Videos
            </p>
          )}
          {(!isLoading, detail) && <DetailTrailers trailers={trailers} />}
        </div>
      </div>
    </>
  ) : (
    <p>
      We messed up, click that button again.{" "}
      {console.log(`Error Return ${detail}`)}
    </p>
  );
};

export default Selection;
