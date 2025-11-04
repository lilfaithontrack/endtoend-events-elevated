import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Ticket, TrendingUp, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ticketCategories = [
  {
    id: 1,
    name: "VIP Experience",
    price: "$299",
    features: [
      "Premium front-row seating",
      "Backstage meet & greet access",
      "Exclusive VIP lounge access",
      "Complimentary drinks & food",
      "Limited edition merchandise"
    ],
    icon: Star,
    color: "text-accent"
  },
  {
    id: 2,
    name: "Premium Seating",
    price: "$149",
    features: [
      "Reserved premium seating",
      "Fast-track entry",
      "Access to premium bars",
      "Event program included",
      "Dedicated parking"
    ],
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    id: 3,
    name: "General Admission",
    price: "$79",
    features: [
      "Standard venue access",
      "Standing/seated area",
      "Full event experience",
      "Merchandise discounts",
      "Digital ticket delivery"
    ],
    icon: Ticket,
    color: "text-accent"
  },
  {
    id: 4,
    name: "Early Bird Special",
    price: "$59",
    features: [
      "Limited time offer",
      "General admission access",
      "Exclusive pre-sale access",
      "Priority notifications",
      "Save 25% off regular price"
    ],
    icon: Zap,
    color: "text-accent"
  }
];

const TicketSales = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-luxury">Ticket Sales</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Choose your perfect experience and secure your spot at our upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {ticketCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="group bg-white/5 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow animate-fade-in flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Icon className={`h-8 w-8 ${category.color}`} />
                      <div className="text-right">
                        <p className="text-3xl font-bold text-white">{category.price}</p>
                        <p className="text-xs text-white/50">per ticket</p>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">
                      {category.name}
                    </h3>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                          <span className="text-accent mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="luxury" className="w-full">
                      Select Tickets
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-8 border border-accent/30 text-center animate-fade-in">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                Group Bookings & Corporate Events
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Planning a group outing or corporate event? Contact us for special rates and exclusive packages for groups of 10 or more.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="luxury">
                  Request Group Quote
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TicketSales;
