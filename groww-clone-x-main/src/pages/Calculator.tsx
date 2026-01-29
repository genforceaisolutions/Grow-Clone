
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / (12 * 100);
    const months = years * 12;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const totalInvestment = monthlyInvestment * years * 12;
  const estimatedReturns = calculateSIP() - totalInvestment;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CalcIcon className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-secondary mb-4">
              SIP Calculator
            </h1>
            <p className="text-gray-600">
              Plan your financial goals with our SIP calculator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-primary font-medium mt-2">
                    ₹{monthlyInvestment.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-primary font-medium mt-2">
                    {years} years
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Return Rate (%)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-primary font-medium mt-2">
                    {expectedReturn}%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Calculation Results</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-1">Invested Amount</p>
                  <p className="text-2xl font-bold">
                    ₹{totalInvestment.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Est. Returns</p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{estimatedReturns.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Total Value</p>
                  <p className="text-2xl font-bold">
                    ₹{calculateSIP().toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
