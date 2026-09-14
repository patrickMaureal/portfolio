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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-bebas text-3xl tracking-[0.08em] text-primary">
          Patrick Maureal
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-subtitle">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <a href="mailto:janpatrickmaureal@gmail.com" className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
            Let&apos;s talk
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary">
            <HamburgerMenuIcon height={22} width={22} />
          </button>
        </div>
      </nav>

      <div className={`md:hidden absolute inset-x-0 top-full z-50 border-b border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center py-6 text-primary">
          <li className="py-3 text-lg uppercase tracking-[0.18em]"><Link to="/">Home</Link></li>
          <li className="py-3 text-lg uppercase tracking-[0.18em]"><Link to="/about">About</Link></li>
          <li className="py-3 text-lg uppercase tracking-[0.18em]"><Link to="/work">Work</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
