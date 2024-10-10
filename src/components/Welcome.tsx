import { Alice } from "../assets";
import styles from "../styles";

const Welcome = () => {
  return (
    <section className=" mx-5 lg:mx-10 py-[40px] px-[40px] lg:px-6 lg:py-[40px] border-[1px] border-lightgrey my-10 ">
      <h1 className={`${styles.heading1} text-center mb-10 `}>
        Message From the District Chairman
      </h1>
      <p className={`${styles.paragraph2} text-slate-600`}>
        The Centre of Excellence has a duty to lead. Our government has taken
        the bold steps to always ensure that Lagos State maintains that
        leadership position. This is identified in the agenda of this
        government.
      </p>
      <img src={Alice} className="mt-20 w-full " />
    </section>
  );
};

export default Welcome;
