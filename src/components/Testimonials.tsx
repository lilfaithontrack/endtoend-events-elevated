import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVision Corp",
    content: "End To End Events transformed our annual gala into an unforgettable experience. Their attention to detail and professionalism exceeded all expectations.",
    rating: 5,
  },
  {
    name: "David & Emily Chen",
    role: "Wedding Clients",
    content: "Our wedding was absolutely perfect. From the first consultation to the last dance, the team handled everything with grace and expertise.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Event Producer",
    content: "I've worked with many event companies, but none compare to the level of sophistication and execution that End To End Events delivers consistently.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-luxury-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Client <span className="text-gradient-luxury">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-secondary/50 backdrop-blur-sm border-border/50 p-8 hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg mb-6 text-foreground/90 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-primary-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
