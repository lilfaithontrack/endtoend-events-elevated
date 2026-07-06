import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Mic2, Radio, Globe, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "./home/LanguageSelector";

interface HeroSlide {
  id: number;
  image: string;
  location: string;
  country: string;
  flag: string;
  title: string;
  subtitle: string;
  tagline: string;
  accentColor: string;
  stats: { value: string; label: string }[];
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80",
    location: "Los Angeles, USA",
    country: "United States",
    flag: "🇺🇸",
    title: "END TO END",
    subtitle: "MUSIC EVENTS",
    tagline: "From Underground Shows to Stadium Tours",
    accentColor: "#A62639",
    stats: [
      { value: "450+", label: "Events in LA" },
      { value: "2M+", label: "Attendees" },
      { value: "500+", label: "Artists" },
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80",
    location: "Tokyo, Japan",
    country: "Japan",
    flag: "🇯🇵",
    title: "アジア最大級",
    subtitle: "音楽フェスティバル",
    tagline: "Experience the Future of Live Music in Asia",
    accentColor: "#E91E63",
    stats: [
      { value: "420+", label: "Events in Tokyo" },
      { value: "1.5M+", label: "Fans" },
      { value: "300+", label: "Venues" },
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80",
    location: "London, UK",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "EUROPEAN TOUR",
    subtitle: "LIVE MUSIC HUB",
    tagline: "Connecting Europe's Finest Music Venues",
    accentColor: "#9C27B0",
    stats: [
      { value: "380+", label: "UK Events" },
      { value: "1.8M+", label: "Visitors" },
      { value: "250+", label: "Venues" },
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80",
    location: "São Paulo, Brazil",
    country: "Brazil",
    flag: "🇧🇷",
    title: "AMÉRICA LATINA",
    subtitle: "FESTIVALES DE MÚSICA",
    tagline: "The Rhythm of South America's Biggest Events",
    accentColor: "#FF5722",
    stats: [
      { value: "260+", label: "Latin Events" },
      { value: "3M+", label: "Fans" },
      { value: "180+", label: "Cities" },
    ],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80",
    location: "Dubai, UAE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    title: "الشرق الأوسط",
    subtitle: "مهرجانات الموسيقى",
    tagline: "Luxury Music Experiences in the Middle East",
    accentColor: "#FFC107",
    stats: [
      { value: "220+", label: "ME Events" },
      { value: "800K+", label: "Attendees" },
      { value: "50+", label: "Venues" },
    ],
  },
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slide = slides[currentSlide];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Transition */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.location}
            className="w-full h-full object-cover scale-110 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
          
          {/* Animated Glow Effects */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `${s.accentColor}33` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `${s.accentColor}33`, animationDelay: '1s' }}
          />
        </div>
      ))}

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Location Badge */}
          <Badge className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2">
            <span className="text-2xl mr-2">{slide.flag}</span>
            <span className="font-semibold">{slide.location}</span>
          </Badge>

          {/* Language Selector */}
          <LanguageSelector />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div
          key={currentSlide}
          className="animate-fade-in"
        >
          {/* Icons */}
          <div className="flex justify-center gap-8 mb-8 opacity-80">
            <Music className="w-12 h-12 text-white animate-pulse" />
            <Mic2 
              className="w-12 h-12 animate-pulse" 
              style={{ color: slide.accentColor, animationDelay: '0.3s' }}
            />
            <Radio className="w-12 h-12 text-white animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Global Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 flex items-center gap-2">
              <Globe className="h-4 w-4 animate-pulse" style={{ color: slide.accentColor }} />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                Global Music Events Platform
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-6 text-white tracking-tight">
            {slide.title}
          </h1>
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
            style={{ color: slide.accentColor }}
          >
            {slide.subtitle}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto font-light">
            {slide.tagline}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {slide.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 min-w-[140px]"
              >
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: slide.accentColor }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 h-auto text-white font-semibold transition-all duration-300"
              style={{ backgroundColor: slide.accentColor }}
            >
              {t('hero.bookEvent')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 h-auto bg-transparent backdrop-blur-sm border-white/40 text-white hover:bg-white/10 font-semibold"
              style={{ borderColor: `${slide.accentColor}66` }}
            >
              {t('hero.viewPortfolio')}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6">
            {/* Slide Indicators */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3"
                      : "w-3 h-3 hover:w-6"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide
                        ? slide.accentColor
                        : "rgba(255, 255, 255, 0.3)",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div 
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: slide.accentColor }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
