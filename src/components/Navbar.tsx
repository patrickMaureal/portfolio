import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRecoilState } from "recoil";
import { mobileMenuState } from "../state/atoms/mobileMenuState";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useRecoilState(mobileMenuState);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-80">
      <nav className="flex justify-between items-center h-16 py-2 px-10 text-white m-4 text-lg font-bold relative">
        <h1>Patrick</h1>

        <div className="hidden lg:block">
          <ul className="flex">
            <li className="p-6">Home</li>
            <li className="p-6">About</li>
            <li className="p-6">Contact</li>
          </ul>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <HamburgerMenuIcon height={24} width={24} />
          </button>
        </div>
      </nav>
      
      <div className={`lg:hidden absolute z-50 h-full w-full transform transition-transform duration-300 bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-20 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col justify-center items-center">
          <li className="p-6 text-2xl">Home</li>
          <li className="p-6 text-2xl">About</li>
          <li className="p-6 text-2xl">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
