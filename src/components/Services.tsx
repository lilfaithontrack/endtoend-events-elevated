import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Music, Mic2, Radio, Users, Building, Sparkles, 
  Check, Star, TrendingUp, Globe, Zap, Award,
  Headphones, Video, Camera, Lightbulb
} from "lucide-react";

interface ServiceFeature {
  icon: any;
  title: string;
  description: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  image: string;
  popular?: boolean;
  badge?: string;
}

const services: ServiceFeature[] = [
  {
    icon: Music,
    title: "Concert Production",
    description: "Full-scale concert production with world-class sound, lighting, and stage design. From club shows to arena tours.",
    features: [
      "Professional Sound Engineering",
      "Stage Design & Setup",
      "Lighting & Visual Effects",
      "Artist Coordination",
      "Technical Crew Management",
      "Live Streaming Integration"
    ],
    pricing: {
      starter: "$5,000",
      professional: "$15,000",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    popular: true,
    badge: "Most Popular"
  },
  {
    icon: Radio,
    title: "Music Festivals",
    description: "Multi-stage festival production with artist coordination, logistics, security, and unforgettable experiences.",
    features: [
      "Multi-Stage Setup",
      "Artist Lineup Management",
      "Logistics & Transportation",
      "Security & Crowd Control",
      "Food & Beverage Coordination",
      "Emergency Medical Services"
    ],
    pricing: {
      starter: "$50,000",
      professional: "$150,000",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    badge: "Premium"
  },
  {
    icon: Building,
    title: "Venue Management",
    description: "Transform any space into an incredible music venue. We handle acoustics, stage setup, and technical production.",
    features: [
      "Acoustic Optimization",
      "Venue Design Consultation",
      "Equipment Installation",
      "Staff Training",
      "Booking System Setup",
      "Marketing Support"
    ],
    pricing: {
      starter: "$3,000",
      professional: "$10,000",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
  },
  {
    icon: Sparkles,
    title: "Private Events",
    description: "Exclusive listening parties, album launches, and intimate performances for artists and industry professionals.",
    features: [
      "Intimate Venue Setup",
      "VIP Guest Management",
      "Catering Services",
      "Photography & Videography",
      "Social Media Coverage",
      "Press & Media Relations"
    ],
    pricing: {
      starter: "$2,000",
      professional: "$8,000",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
  },
  {
    icon: Video,
    title: "Live Streaming",
    description: "Professional live streaming services for concerts and events with multi-camera setups and real-time production.",
    features: [
      "Multi-Camera Production",
      "4K/HD Streaming",
      "Real-Time Editing",
      "Interactive Chat Integration",
      "Global CDN Distribution",
      "VOD Archive Services"
    ],
    pricing: {
      starter: "$1,500",
      professional: "$5,000",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    badge: "New"
  },
  {
    icon: Headphones,
    title: "Artist Management",
    description: "Comprehensive artist management services including booking, promotion, and career development.",
    features: [
      "Tour Booking & Planning",
      "Brand Development",
      "Social Media Management",
      "Contract Negotiation",
      "Financial Management",
      "Career Strategy Consulting"
    ],
    pricing: {
      starter: "$1,000/mo",
      professional: "$5,000/mo",
      enterprise: "Custom"
    },
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
  }
];

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceFeature | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid");
  
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
      
      {/* Burgundy Spotlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }} />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 px-4 py-2">
            <Award className="h-4 w-4 mr-2" />
            Professional Event Services
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {t('services.title')} <span style={{ color: '#A62639' }}>{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t('services.subtitle')} - Delivering world-class experiences across 85+ countries
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "detailed")} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2 bg-white/5">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="detailed">Detailed View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all duration-500 animate-scale-in hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedService(service)}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-500" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {service.badge && (
                        <Badge className={`${
                          service.popular 
                            ? "bg-accent text-white" 
                            : "bg-white/20 backdrop-blur-sm text-white"
                        } border-0`}>
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm p-3 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-accent text-sm font-semibold">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-white/10 pt-4 mb-4">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Starting From</p>
                      <p className="text-2xl font-bold text-accent">{service.pricing.starter}</p>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-accent/30 text-white hover:bg-accent hover:border-accent"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Detailed View */}
        {viewMode === "detailed" && (
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                      
                      {service.badge && (
                        <Badge className={`absolute top-4 left-4 ${
                          service.popular 
                            ? "bg-accent text-white" 
                            : "bg-white/20 backdrop-blur-sm text-white"
                        } border-0`}>
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-accent/20 p-4 rounded-lg">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-white/70">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/80">
                            <div className="bg-accent/20 p-1 rounded">
                              <Check className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing Tiers */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                        <div className="text-center">
                          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Starter</p>
                          <p className="text-xl font-bold text-white">{service.pricing.starter}</p>
                        </div>
                        <div className="text-center border-x border-white/10">
                          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Professional</p>
                          <p className="text-xl font-bold text-accent">{service.pricing.professional}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Enterprise</p>
                          <p className="text-xl font-bold text-white">{service.pricing.enterprise}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Button variant="luxury" className="flex-1">
                          Get Started
                        </Button>
                        <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Why Choose Us Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "Global Reach", value: "85+ Countries" },
            { icon: Users, title: "Expert Team", value: "500+ Professionals" },
            { icon: Award, title: "Success Rate", value: "99.8%" },
            { icon: TrendingUp, title: "Events Delivered", value: "5,000+" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.title}
                className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-accent/20 to-purple-500/20 border-accent/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss your event vision and create an unforgettable experience together. 
                Our team is ready to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" className="px-10">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-10 border-white/20 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
