import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Summer Rock Festival 2024",
    date: "July 20-22, 2024",
    time: "Gates open at 2:00 PM",
    venue: "Central Park Arena",
    location: "Los Angeles, CA",
    capacity: "50,000 attendees",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    status: "On Sale"
  },
  {
    id: 2,
    title: "Jazz Night Under The Stars",
    date: "June 15, 2024",
    time: "7:00 PM - 11:00 PM",
    venue: "Riverside Amphitheater",
    location: "New York, NY",
    capacity: "5,000 attendees",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
    status: "On Sale"
  },
  {
    id: 3,
    title: "Electronic Music Showcase",
    date: "August 5, 2024",
    time: "9:00 PM - 3:00 AM",
    venue: "Metro Underground",
    location: "Miami, FL",
    capacity: "3,000 attendees",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    status: "Selling Fast"
  },
  {
    id: 4,
    title: "Classical Symphony Orchestra",
    date: "September 10, 2024",
    time: "8:00 PM - 10:30 PM",
    venue: "Grand Concert Hall",
    location: "Chicago, IL",
    capacity: "2,500 attendees",
    image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&q=80",
    status: "On Sale"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-luxury">Coming Events</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Experience unforgettable live music performances at our upcoming events
              </p>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                            {event.status}
                          </span>
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                          {event.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70">
                          <div className="flex items-start gap-2">
                            <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-white">{event.date}</p>
                              <p className="text-sm">{event.time}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-white">{event.venue}</p>
                              <p className="text-sm">{event.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-accent flex-shrink-0" />
                            <p className="text-sm">{event.capacity}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex gap-4">
                        <Button variant="luxury" className="flex-1 md:flex-none">
                          Buy Tickets
                        </Button>
                        <Button variant="outline" className="flex-1 md:flex-none border-white/20 text-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
