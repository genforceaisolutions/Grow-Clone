
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Groww
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/stocks" className="text-gray-600 hover:text-primary transition-colors">
              Stocks
            </Link>
            <Link to="/mutual-funds" className="text-gray-600 hover:text-primary transition-colors">
              Mutual Funds
            </Link>
            <Link to="/calculator" className="text-gray-600 hover:text-primary transition-colors">
              SIP Calculator
            </Link>
            <Link to="/open-account" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Open Account
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link to="/stocks" className="text-gray-600 hover:text-primary transition-colors">
                Stocks
              </Link>
              <Link to="/mutual-funds" className="text-gray-600 hover:text-primary transition-colors">
                Mutual Funds
              </Link>
              <Link to="/calculator" className="text-gray-600 hover:text-primary transition-colors">
                SIP Calculator
              </Link>
              <Link to="/open-account" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center">
                Open Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
