import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-concert.jpg";
import { Music, Mic2, Radio } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Live concert performance" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8 opacity-80">
          <Music className="w-12 h-12 text-white animate-pulse" />
          <Mic2 className="w-12 h-12 text-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Radio className="w-12 h-12 text-white animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-6 text-white tracking-tight">
          END TO END
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#A62639' }}>
          MUSIC EVENTS
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-3xl mx-auto font-light">
          From Underground Shows to Stadium Tours
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-10 py-7 h-auto text-white font-semibold"
          >
            Book Your Event
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-7 h-auto bg-transparent backdrop-blur-sm border-white/40 text-white hover:bg-white/10 hover:border-accent font-semibold"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
