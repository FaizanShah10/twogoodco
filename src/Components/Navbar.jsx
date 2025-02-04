import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between fixed z-20 w-full items-center px-3 py-3 md:px-10 lg:px-5 bg-transparent">
      {/* Logo */}
      <div className="text-3xl font-bold lg:leading-[1.8vw] leading-[7vw] font-[futura] px-2 md:px-4 z-30">
        <Link to={"/"}>
          <span className="block">TWO</span>
          <span className="block">GOOD</span>
          <span className="block">CO.</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-16 text-sm px-4">
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/wholesale-soaps">WHOLESALE</Link></li>
        <li><Link to="/catering">CATERING</Link></li>
        <li><Link to="/donate">DONATE</Link></li>
        <li>
          <div className="flex items-center gap-10 px-4 py-1 bg-white rounded-full">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-5 h-5 cursor-pointer" />
              )}
            </button>
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </div>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="flex items-center gap-4 md:hidden z-30">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-6 h-6 cursor-pointer text-black" />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" />
          )}
        </button>
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-black text-white z-20 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col items-end gap-6 text-5xl font-bold uppercase p-6 ">
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="hover:text-gray-300"><Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link></li>
          <li className="hover:text-gray-300"><Link to="/wholesale-soaps" onClick={() => setMenuOpen(false)}>WHOLESALE</Link></li>
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>CATERING</Link></li>
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>IMPACT</Link></li>
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>STORIES</Link></li>
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
          <li className="hover:text-gray-300"><Link to="/" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
