import aboutImage from "@/assets/music-production.jpg";

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden" style={{ boxShadow: '0 0 60px rgba(166, 38, 57, 0.3)' }}>
              <img 
                src={aboutImage} 
                alt="Music production and event planning" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              YOUR SOUND, <span style={{ color: '#A62639' }}>OUR STAGE</span>
            </h2>
            <div className="space-y-4 text-lg text-white/80">
              <p>
                End To End Events specializes in creating unforgettable music experiences. From intimate club nights to massive festival productions, we bring your sonic vision to life.
              </p>
              <p>
                With over a decade producing concerts, tours, and music festivals, we handle every aspect of your event — artist bookings, stage production, sound engineering, lighting design, and crowd management.
              </p>
              <p>
                Our team lives and breathes music. We understand the energy, the passion, and the precision required to deliver shows that audiences remember forever.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#A62639' }}>800+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Shows Produced</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#A62639' }}>12+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Years Live</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#A62639' }}>2M+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Fans Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
