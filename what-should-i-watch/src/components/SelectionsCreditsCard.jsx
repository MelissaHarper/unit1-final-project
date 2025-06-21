import { LazyLoadImage } from "react-lazy-load-image-component";
import DummyUser from "../assets/images/logo.png";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "../styles/Selection.css";

const DetailCredits = ({ credits }) => {
  return (
    <div className="credits-container">
      {credits.map((credit, index) => (
        <div key={`credit-${index}`} className="credits-card">
          <LazyLoadImage
            src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${credit.profile_path}`}
            alt={credit.name}
            useIntersectionObserver={true}
            threshold={100}
            placeholderSrc={
              <div className="bg-slate-300 dark:bg-slate-800 animate-pulse w-20 min-w-[80px] max-w-[80px] h-20 min-h-[80px] max-h-[80px] rounded-full" />
            }
            effect="black-and-white"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = DummyUser;
            }}
            className="w-20 min-w-[80px] max-w-[80px] h-20 min-h-[80px] max-h-[80px] rounded-full object-cover bg-center shadow"
          />
          <p className="font-medium text-sm text-slate-950 dark:text-slate-100 text-center">
            {credit.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-zinc-400 text-center">
            {credit.character}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailCredits;
