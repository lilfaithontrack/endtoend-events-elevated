import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-elegant hover-glow">
              <img 
                src={aboutImage} 
                alt="End To End Events team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Vision, <span className="text-gradient-luxury">Our Expertise</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                End To End Events is a full-service premium event management agency that transforms concepts into unforgettable celebrations.
              </p>
              <p>
                With over a decade of experience orchestrating luxury events, we pride ourselves on meticulous attention to detail and flawless execution. From intimate private celebrations to grand corporate galas, we handle every aspect of your event with sophistication and precision.
              </p>
              <p>
                Our dedicated team of event specialists works tirelessly to ensure that every moment is perfectly crafted, allowing you to immerse yourself in the experience while we manage the complexities behind the scenes.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
