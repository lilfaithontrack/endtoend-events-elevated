import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: 'Marcus "DJ Pulse" Rivera',
    role: "Electronic Artist",
    content: "End To End transformed my album launch into an unforgettable experience. The production quality was absolutely world-class.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Festival Director, SoundWave",
    content: "They handled our 50,000-capacity festival flawlessly. From stage design to artist logistics, everything was perfection.",
    rating: 5,
  },
  {
    name: "The Midnight Echoes",
    role: "Rock Band",
    content: "Our 20-city tour wouldn't have been possible without End To End. They made every show feel like a stadium production.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>
      
      {/* Burgundy Spotlights */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            ARTIST <span style={{ color: '#A62639' }}>TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto uppercase tracking-wider">
            What Artists Say About Us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-black/70 backdrop-blur-sm border-white/10 p-8 hover:border-accent/50 transition-all duration-500 animate-slide-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 0 40px rgba(166, 38, 57, 0.2)'
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg mb-6 text-white/90 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/60 uppercase tracking-wide">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
