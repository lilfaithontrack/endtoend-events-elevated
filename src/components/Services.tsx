import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import corporateImage from "@/assets/service-corporate.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import concertImage from "@/assets/service-concert.jpg";
import privateImage from "@/assets/service-private.jpg";

const services = [
  {
    title: "Corporate Events",
    description: "Elevate your brand with sophisticated galas, conferences, and team-building experiences that leave lasting impressions.",
    image: corporateImage,
  },
  {
    title: "Luxury Weddings",
    description: "Create the wedding of your dreams with our comprehensive planning services, from intimate ceremonies to grand celebrations.",
    image: weddingImage,
  },
  {
    title: "Concerts & Shows",
    description: "Deliver unforgettable entertainment experiences with professional production, logistics, and venue management.",
    image: concertImage,
  },
  {
    title: "Private Celebrations",
    description: "From milestone birthdays to exclusive soirées, we craft personalized events that reflect your unique style.",
    image: privateImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient-luxury">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group overflow-hidden border-0 shadow-elegant hover-glow transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="luxury" className="w-full">
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
