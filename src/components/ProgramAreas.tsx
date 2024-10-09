import ProgramAreasCards from "./ProgramAreasCard";
import { layout } from "../styles";

const ProgramAreas = () => {
  return (
    <section className={`bg-[#F9FAFC] ${layout.section}`}>
      <ProgramAreasCards />
    </section>
  );
};

export default ProgramAreas;
