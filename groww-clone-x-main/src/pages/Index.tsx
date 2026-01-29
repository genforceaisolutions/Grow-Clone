
import Navbar from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, TrendingUp, ShieldCheck, Wallet, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative">
      <Background3D />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-background/95 backdrop-blur-sm flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Investing Made Easy
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Start your investment journey with zero commission trading, 
              professional advice, and cutting-edge tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 group animate-fade-up" style={{ animationDelay: '200ms' }}>
                Start Investing 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 group animate-fade-up" style={{ animationDelay: '400ms' }}>
                View Mutual Funds 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background/80 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Investment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <option.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" className="gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold">Ready to Start Investing?</h2>
            <p className="text-muted-foreground">
              Join millions of investors and start your investment journey today.
            </p>
            <Button size="lg" className="gap-2 group">
              Open Free Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Zero Commission",
    description: "Trade stocks without any brokerage fees on delivery trades.",
    icon: Wallet,
  },
  {
    title: "Expert Research",
    description: "Access detailed analysis and recommendations from market experts.",
    icon: LineChart,
  },
  {
    title: "Secure Investment",
    description: "Your investments are protected and secured with bank-grade security.",
    icon: ShieldCheck,
  },
];

const stats = [
  {
    value: "20M+",
    label: "Active Users",
    icon: Users,
  },
  {
    value: "₹1000Cr+",
    label: "Daily Trading Volume",
    icon: BarChart3,
  },
  {
    value: "5000+",
    label: "Stocks Listed",
    icon: TrendingUp,
  },
  {
    value: "4.5/5",
    label: "User Rating",
    icon: Users,
  },
];

const investmentOptions = [
  {
    title: "Stocks & ETFs",
    description: "Invest in 5000+ stocks and ETFs listed on NSE and BSE with zero brokerage fees.",
    icon: LineChart,
  },
  {
    title: "Mutual Funds",
    description: "Choose from 5000+ direct mutual funds with zero commission and start with just ₹100.",
    icon: TrendingUp,
  },
];

export default Index;
