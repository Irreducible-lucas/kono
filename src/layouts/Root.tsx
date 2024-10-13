import styles from "../style";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components";

const Root = () => (
  <motion.div
    transition={{
      when: "beforeChildren",
      staggerChildren: 2,
    }}
    className="w-full overflow-hidden"
  >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={``}>
      <Outlet />
    </div>

    <div className={`bg-[#FFFAF4] ${styles.flexCenter} mt-10`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </motion.div>
);

export default Root;
