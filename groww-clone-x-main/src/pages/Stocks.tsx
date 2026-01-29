
import { TrendingUp, Search, IndianRupee, ArrowUp, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";

const popularStocks = [
  { name: "Reliance", price: 2750.45, change: 1.2 },
  { name: "TCS", price: 3890.30, change: -0.8 },
  { name: "HDFC Bank", price: 1670.15, change: 0.5 },
  { name: "Infosys", price: 1450.60, change: -1.3 },
  { name: "ITC", price: 440.25, change: 2.1 }
];

const Stocks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Stock Market Investments
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Invest in stocks with zero brokerage fees on delivery trades. Get access to 5000+ listed companies.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-up">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Popular Stocks */}
          <div className="mb-12 animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <TrendingUp className="text-primary" />
                Popular Stocks
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularStocks.map((stock) => (
                <div
                  key={stock.name}
                  className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{stock.name}</h3>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4 text-gray-600" />
                      <span className="font-medium">{stock.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <span
                      className={`flex items-center gap-1 ${
                        stock.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.change >= 0 ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {Math.abs(stock.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
