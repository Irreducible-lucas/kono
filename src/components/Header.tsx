import Nav from "./Nav";
import NavDisplay from "./NavDisplay";

const Header = () => {
  return (
    <div className="bg-white">
      <NavDisplay />
      <Nav />
    </div>
  );
};

export default Header;
