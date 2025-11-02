import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import concertImage from "@/assets/service-concert.jpg";
import liveImage from "@/assets/service-live-music.jpg";
import festivalImage from "@/assets/service-festival.jpg";
import privateImage from "@/assets/service-private.jpg";

const services = [
  {
    title: "Concert Production",
    description: "Full-scale concert production with world-class sound, lighting, and stage design. From club shows to arena tours.",
    image: concertImage,
  },
  {
    title: "Live Music Venues",
    description: "Transform any space into an incredible music venue. We handle acoustics, stage setup, and technical production.",
    image: liveImage,
  },
  {
    title: "Music Festivals",
    description: "Multi-stage festival production with artist coordination, logistics, security, and unforgettable experiences.",
    image: festivalImage,
  },
  {
    title: "Private Music Events",
    description: "Exclusive listening parties, album launches, and intimate performances for artists and industry professionals.",
    image: privateImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
      
      {/* Burgundy Spotlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }} />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            OUR <span style={{ color: '#A62639' }}>SERVICES</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto uppercase tracking-wider">
            Complete Music Event Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group overflow-hidden bg-black/50 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all duration-500 animate-scale-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 0 30px rgba(166, 38, 57, 0.2)'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6">
                  {service.description}
                </p>
                <Button variant="luxury" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
