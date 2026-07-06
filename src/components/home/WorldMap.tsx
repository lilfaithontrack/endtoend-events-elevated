import { MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CityData {
  name: string;
  country: string;
  events: number;
  position: { top: string; left: string };
  flag: string;
}

const cities: CityData[] = [
  { name: "Los Angeles", country: "USA", events: 450, position: { top: "35%", left: "15%" }, flag: "🇺🇸" },
  { name: "New York", country: "USA", events: 520, position: { top: "32%", left: "22%" }, flag: "🇺🇸" },
  { name: "London", country: "UK", events: 380, position: { top: "28%", left: "48%" }, flag: "🇬🇧" },
  { name: "Paris", country: "France", events: 290, position: { top: "30%", left: "50%" }, flag: "🇫🇷" },
  { name: "Berlin", country: "Germany", events: 310, position: { top: "27%", left: "52%" }, flag: "🇩🇪" },
  { name: "Tokyo", country: "Japan", events: 420, position: { top: "33%", left: "85%" }, flag: "🇯🇵" },
  { name: "Sydney", country: "Australia", events: 180, position: { top: "70%", left: "88%" }, flag: "🇦🇺" },
  { name: "São Paulo", country: "Brazil", events: 260, position: { top: "60%", left: "28%" }, flag: "🇧🇷" },
  { name: "Dubai", country: "UAE", events: 220, position: { top: "38%", left: "60%" }, flag: "🇦🇪" },
  { name: "Singapore", country: "Singapore", events: 190, position: { top: "52%", left: "75%" }, flag: "🇸🇬" },
];

export const WorldMap = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            OUR <span className="text-accent">GLOBAL REACH</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Producing world-class events in major cities across every continent
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-8">
              {/* Simplified World Map */}
              <div className="relative w-full h-[500px] bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-lg overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div key={i} className="border border-white/10" />
                    ))}
                  </div>
                </div>

                {/* Animated Pulse Effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 bg-accent/5 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                </div>

                {/* City Markers */}
                {cities.map((city, index) => (
                  <div
                    key={city.name}
                    className="absolute group cursor-pointer animate-scale-in"
                    style={{
                      top: city.position.top,
                      left: city.position.left,
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Marker Pin */}
                    <div className="relative">
                      <div className="absolute -translate-x-1/2 -translate-y-full">
                        <MapPin className="h-6 w-6 text-accent fill-accent animate-bounce" style={{ animationDuration: '2s', animationDelay: `${index * 200}ms` }} />
                      </div>
                      
                      {/* Pulse Ring */}
                      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                        <div className="absolute inset-0 bg-accent/30 rounded-full animate-ping" />
                        <div className="absolute inset-0 bg-accent/50 rounded-full" />
                      </div>

                      {/* Hover Card */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-black/95 backdrop-blur-sm border border-accent/30 rounded-lg p-3 whitespace-nowrap shadow-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{city.flag}</span>
                            <span className="text-white font-bold">{city.name}</span>
                          </div>
                          <div className="text-white/60 text-sm">{city.country}</div>
                          <div className="flex items-center gap-1 mt-2 text-accent text-sm font-semibold">
                            <TrendingUp className="h-3 w-3" />
                            {city.events} Events
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Connection Lines (decorative) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A62639" stopOpacity="0" />
                      <stop offset="50%" stopColor="#A62639" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#A62639" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {cities.slice(0, -1).map((city, i) => {
                    const nextCity = cities[i + 1];
                    return (
                      <line
                        key={i}
                        x1={city.position.left}
                        y1={city.position.top}
                        x2={nextCity.position.left}
                        y2={nextCity.position.top}
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{city.flag}</div>
                <div className="text-white font-bold mb-1">{city.name}</div>
                <div className="text-white/50 text-xs mb-2">{city.country}</div>
                <div className="flex items-center justify-center gap-1 text-accent text-sm font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  {city.events}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
