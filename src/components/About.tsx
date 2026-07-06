import aboutImage from "@/assets/music-production.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Burgundy Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
      
      <div className="container mx-auto px-4 relative z-10">
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
              {t('about.title')} <span style={{ color: '#A62639' }}>{t('about.titleHighlight')}</span>
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
                <div className="text-sm text-white/70 uppercase tracking-wider">{t('about.showsProduced')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#A62639' }}>12+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{t('about.yearsLive')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#A62639' }}>2M+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{t('about.fansReached')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
