import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { mobileMenuState } from "../state/atoms/mobileMenuState";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useRecoilState(mobileMenuState);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="md:px-0 lg:px-16">
      <nav className="flex justify-between items-center h-16 py-2 px-10 text-white m-4 relative">
        <h1 className="font-bebas font-bold text-3xl">Patrick Maureal</h1>

        <div className="hidden md:block">
          <ul className="flex">
            <li className="p-6 font-inter font-medium text-base"><Link to="/">Home </Link></li>
            <li className="p-6 font-inter font-medium text-base"><Link to="/about">About </Link></li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <HamburgerMenuIcon height={24} width={24} />
          </button>
        </div>
      </nav>
      
      <div className={`md:hidden absolute z-50 h-full w-full transform transition-transform duration-300 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-20 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col justify-center items-center text-white">
          <li className="p-6 text-2xl"><Link to="/">Home</Link></li>
          <li className="p-6 text-2xl"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
