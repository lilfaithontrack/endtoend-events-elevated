import { Globe, MapPin, Users, Music, Building, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const GlobalStats = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Calendar,
      value: "5,000+",
      label: t('stats.globalEvents'),
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Globe,
      value: "85+",
      label: t('stats.countries'),
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      value: "250+",
      label: t('stats.cities'),
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      value: "15M+",
      label: t('stats.attendees'),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Music,
      value: "3,500+",
      label: t('stats.artists'),
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Building,
      value: "1,200+",
      label: t('stats.venues'),
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            GLOBAL <span className="text-accent">PRESENCE</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Connecting music lovers across continents with world-class events and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
