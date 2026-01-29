
import { Wallet, Search, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const popularFunds = [
  {
    name: "ICICI Prudential Technology Fund",
    type: "Sectoral",
    returns: 15.8,
    risk: "Very High"
  },
  {
    name: "Axis Blue Chip Fund",
    type: "Large Cap",
    returns: 12.5,
    risk: "Moderate"
  },
  {
    name: "SBI Small Cap Fund",
    type: "Small Cap",
    returns: 18.2,
    risk: "Very High"
  },
  {
    name: "Mirae Asset Large Cap Fund",
    type: "Large Cap",
    returns: 13.4,
    risk: "Moderate"
  },
  {
    name: "Parag Parikh Flexi Cap Fund",
    type: "Flexi Cap",
    returns: 16.7,
    risk: "High"
  }
];

const MutualFunds = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Mutual Fund Investments
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your investment journey with 0% commission mutual funds. Invest in top performing funds with SIP starting at ₹500.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-up">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search mutual funds..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Popular Funds */}
          <div className="mb-12 animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Wallet className="text-primary" />
                Popular Funds
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {popularFunds.map((fund) => (
                <div
                  key={fund.name}
                  className="p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">{fund.name}</h3>
                      <span className="text-sm text-gray-500">{fund.type}</span>
                    </div>
                    <span className="text-primary font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {fund.returns}% p.a.
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Risk: <span className="font-medium">{fund.risk}</span>
                    </span>
                    <button className="text-primary flex items-center gap-1 text-sm hover:underline">
                      Invest Now <ArrowRight className="w-4 h-4" />
                    </button>
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

export default MutualFunds;
