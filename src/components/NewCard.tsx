import { Link } from "react-router-dom";
import styles from "../styles";
import { Newsletter } from "../types";

const NewCard = ({ title, image, url, desc, date }: Newsletter) => {
  return (
    <div className={`w-full relative bg-white`}>
      <div className="p-2 grid gap-3">
        <p className="text-slate-600 text-sm ">{date}</p>
        <h2 className={`${styles.paragraph} text-black font-bold uppercase`}>
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <img
            src={image}
            className="object-contain object-center w-full h-full"
            alt=""
          />
          <p className="text-slate-600 text-sm ">{desc}</p>
        </div>

        <Link to={url} target="_blank">
          <div className="border-[1px]  border-lightgrey px-4 py-2 flex items-center w-[50%]  rounded-md justify-between">
            <p className={`${styles.paragraph3}`}>Read More</p>
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
export default NewCard;
