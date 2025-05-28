import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDetail,
  getCredits,
  getTrailers,
  getReviews,
  getRecommendation,
} from "../shared/call-functions";
// import posterFW from "../assets/images/stand-in-movie-poster.png";
// import data from "../assets/data/mergedDummyData.json";
import "../styles/Selection.css";

const Selection = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { type, id } = useParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [credits, setCredits] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));

  // Get Detail Movie
  const getDetailMovie = async () => {
    const payload = {
      api_key: apiKey,
      language: "en-US",
    };

    const resData = await getDetail(type || "", id || "", payload);
    if (resData.data) setDetail(resData.data);

    const resCredits = await getCredits(type || "", id || "", payload);
    if (resCredits.data) setCredits(resCredits.data.cast);

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

    const resReviews = await getReviews(type || "", id || "", payload);
    if (resReviews.data) {
      setReviews(
        resReviews.data.results.map((review) => {
          review.read_more = false;
          return review;
        })
      );
    }

    const resRecommendations = await getRecommendation(
      type || "",
      id || "",
      payload
    );
    if (resRecommendations.data && resRecommendations.data.results.length > 0)
      setRecommendations(resRecommendations.data.results);

    Promise.all([
      resData,
      resCredits,
      resTrailers,
      resReviews,
      resRecommendations,
    ]).then(() => {
      setIsLoading(false);
    });
    setIsFirstLoad(false);
  };

  // Reset data
  const resetData = () => {
    setDetail(null);
    setCredits([]);
    setTrailers([]);
    setReviews([]);
    setRecommendations([]);
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
    }
  }, [id]);

  return (
    detail && (
      <>
        {/* Banner, poster & description */}
        {isLoading && <DetailDescriptionSkeleton />}
        {!isLoading && <DetailDescription movie={detail} />}

        <div className="container md:mt-16 mt-10 md:space-y-12 space-y-8">
          {/* Credits */}
          <div>
            <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3">
              Full Cast
            </p>
            {isLoading && <DetailCreditSkeleton />}
            {!isLoading && <DetailCredits credits={credits} />}
          </div>

          {/* Videos */}
          <div>
            <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3">
              Videos
            </p>
            {isLoading && <DetailTrailerSkeleton />}
            {!isLoading && <DetailTrailers trailers={trailers} />}
          </div>

          {/* Reviews */}
          <div>
            <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3">
              Reviews
            </p>
            {isLoading && <DetailReviewSkeleton />}
            {!isLoading && <DetailReviews reviews={reviews} />}
          </div>

          {/* Recommendations */}
          <div className="mt-8 pt-8 border-t dark:border-slate-800 border-slate-200">
            <p className="font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3">
              Recommendations
            </p>
            <div className="flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth">
              {!isLoading &&
                recommendations.length > 0 &&
                recommendations.map((recommendation) => {
                  return (
                    <div
                      key={recommendation.id}
                      className="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"
                    >
                      <MovieCard movie={recommendation} />
                    </div>
                  );
                })}
              {isLoading && <MovieCardSkeleton isHorizontal={true} />}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Selection;

// let {
//   title,
//   backdrop_path,
//   release_date,
//   overview,
//   original_title,
//   genres,
//   altTitle,
// } = data[1];

// let imgURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

// return (
//   <div className="selection-wrapper">
//     <img className="poster-fw" src={imgURL} alt={`${title} movie poster`} />
//     <section className="selection-info">
//       <h2>{title}</h2>
//       {altTitle && <h3>Original Title: {original_title}</h3>}
//       <p className="release-date">Release date: {release_date}</p>
//       <p className="overview">Overview {overview}</p>
//       <p className="genres">Genres: {genres.sort().join(", ")}</p>
//     </section>
//   </div>
// );
// };
