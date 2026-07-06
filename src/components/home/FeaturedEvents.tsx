import { Calendar, MapPin, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedEvent {
  id: string;
  title: string;
  location: string;
  country: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
  attendees: string;
}

const internationalEvents: FeaturedEvent[] = [
  {
    id: "1",
    title: "Tomorrowland",
    location: "Boom, Belgium",
    country: "🇧🇪",
    date: "July 21-23, 2024",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    category: "EDM Festival",
    featured: true,
    attendees: "400K+",
  },
  {
    id: "2",
    title: "Coachella Valley",
    location: "California, USA",
    country: "🇺🇸",
    date: "April 12-21, 2024",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    category: "Music Festival",
    featured: true,
    attendees: "250K+",
  },
  {
    id: "3",
    title: "Fuji Rock Festival",
    location: "Niigata, Japan",
    country: "🇯🇵",
    date: "July 26-28, 2024",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    category: "Rock Festival",
    featured: true,
    attendees: "100K+",
  },
  {
    id: "4",
    title: "Primavera Sound",
    location: "Barcelona, Spain",
    country: "🇪🇸",
    date: "May 30 - June 1, 2024",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    category: "Indie Festival",
    featured: false,
    attendees: "220K+",
  },
  {
    id: "5",
    title: "Glastonbury",
    location: "Somerset, UK",
    country: "🇬🇧",
    date: "June 26-30, 2024",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    category: "Music Festival",
    featured: true,
    attendees: "210K+",
  },
  {
    id: "6",
    title: "Rock in Rio",
    location: "Rio de Janeiro, Brazil",
    country: "🇧🇷",
    date: "September 13-22, 2024",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    category: "Rock Festival",
    featured: false,
    attendees: "700K+",
  },
];

export const FeaturedEvents = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            FEATURED <span className="text-accent">WORLDWIDE</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the world's most iconic music festivals and events across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalEvents.map((event, index) => (
            <Card
              key={event.id}
              className="group bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 overflow-hidden hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {event.featured && (
                    <Badge className="bg-accent/90 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-white" />
                      Featured
                    </Badge>
                  )}
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                    {event.category}
                  </Badge>
                </div>

                {/* Country Flag */}
                <div className="absolute top-4 right-4 text-4xl">
                  {event.country}
                </div>

                {/* Attendees */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-sm">{event.attendees} attendees</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-accent hover:border-accent group"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" className="px-10">
            Explore All International Events
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
