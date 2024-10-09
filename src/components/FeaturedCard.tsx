import { Link } from "react-router-dom";
import styles from "../styles";
import { FeaturedsWriteUp } from "../types";

const FeaturedCard = ({ title, image, url, desc, date }: FeaturedsWriteUp) => {
  return (
    <div className={`w-full relative bg-white`}>
      <div className="p-2">
        <p className="text-slate-600 text-sm">{date}</p>
        <h2 className={`${styles.paragraph} text-black font-bold uppercase`}>
          {title}
        </h2>
        <img
          src={image}
          className="object-contain object-center w-full h-full"
        />
        <p className="text-slate-600 text-sm ">{desc}</p>
        <Link to={url} target="_blank">
          <div className="border-[1px]  border-lightgrey px-4 py-2 mt-1 flex items-center w-[50%]  rounded-md justify-between">
            <p className={`${styles.paragraph3}`}>Learn More</p>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.9375L7 6.9375L1 12.9375"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
