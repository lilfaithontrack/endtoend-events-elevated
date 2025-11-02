import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury event venue" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/70 via-luxury-dark/50 to-luxury-dark/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground">
          From Concept to <span className="text-gradient-luxury">Celebration</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-muted-foreground max-w-3xl mx-auto font-light">
          We Handle It All
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 h-auto"
          >
            Book Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 h-auto bg-transparent backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
