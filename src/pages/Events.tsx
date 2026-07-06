import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EventCard, EventData } from "@/components/events/EventCard";
import { EventFilters, FilterOptions } from "@/components/events/EventFilters";
import { EventDetails } from "@/components/events/EventDetails";
import { EventStats } from "@/components/events/EventStats";
import { EventTimeline } from "@/components/events/EventTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents: EventData[] = [
  {
    id: "1",
    title: "Summer Rock Festival 2024",
    description: "Experience the ultimate summer music festival featuring the biggest names in rock music. Three days of non-stop entertainment with multiple stages, food vendors, and camping facilities. Join thousands of rock enthusiasts for an unforgettable weekend of live performances.",
    date: "July 20-22, 2024",
    startTime: "2:00 PM",
    endTime: "11:00 PM",
    venue: "Central Park Arena",
    location: "123 Park Avenue",
    city: "Los Angeles",
    country: "CA, USA",
    capacity: 50000,
    ticketsSold: 35000,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    status: "On Sale",
    category: "Music Festival",
    genres: ["Rock", "Alternative", "Indie"],
    artists: ["The Rolling Stones", "Foo Fighters", "Arctic Monkeys", "Queens of the Stone Age"],
    priceRange: { min: 150, max: 450 },
    rating: 4.8,
    reviews: 2340,
    ageRestriction: "18+",
    accessibility: ["Wheelchair Access", "Sign Language Interpreters", "Accessible Parking"],
    amenities: ["WiFi", "Food & Drinks", "Parking", "Photography Allowed"],
    organizer: "LiveNation Events",
    featured: true,
    trending: true,
  },
  {
    id: "2",
    title: "Jazz Night Under The Stars",
    description: "An intimate evening of smooth jazz under the open sky. Featuring world-renowned jazz musicians performing classic and contemporary pieces. Bring your blankets and enjoy a sophisticated night of music with wine and gourmet food available.",
    date: "June 15, 2024",
    startTime: "7:00 PM",
    endTime: "11:00 PM",
    venue: "Riverside Amphitheater",
    location: "456 River Road",
    city: "New York",
    country: "NY, USA",
    capacity: 5000,
    ticketsSold: 3200,
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
    status: "On Sale",
    category: "Concert",
    genres: ["Jazz", "Blues", "Soul"],
    artists: ["Herbie Hancock", "Diana Krall", "Gregory Porter"],
    priceRange: { min: 75, max: 200 },
    rating: 4.9,
    reviews: 856,
    ageRestriction: "All Ages",
    accessibility: ["Wheelchair Access", "Accessible Restrooms"],
    amenities: ["WiFi", "Food & Drinks", "Parking"],
    organizer: "Jazz Masters Productions",
    featured: true,
    trending: false,
  },
  {
    id: "3",
    title: "Electronic Music Showcase",
    description: "The biggest electronic music event of the year featuring top DJs and producers from around the world. State-of-the-art sound systems, mind-blowing visuals, and an electric atmosphere. Dance the night away with the best in EDM, house, and techno.",
    date: "August 5, 2024",
    startTime: "9:00 PM",
    endTime: "3:00 AM",
    venue: "Metro Underground",
    location: "789 Club Street",
    city: "Miami",
    country: "FL, USA",
    capacity: 3000,
    ticketsSold: 2700,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    status: "Selling Fast",
    category: "Nightclub Event",
    genres: ["EDM", "House", "Techno"],
    artists: ["Calvin Harris", "Tiësto", "Martin Garrix", "Deadmau5"],
    priceRange: { min: 50, max: 150 },
    rating: 4.7,
    reviews: 1523,
    ageRestriction: "21+",
    accessibility: ["Wheelchair Access"],
    amenities: ["WiFi", "Food & Drinks"],
    organizer: "Underground Events",
    featured: false,
    trending: true,
  },
  {
    id: "4",
    title: "Classical Symphony Orchestra",
    description: "A magnificent evening of classical music performed by the renowned Philharmonic Orchestra. Experience timeless masterpieces from Mozart, Beethoven, and Tchaikovsky in the acoustically perfect Grand Concert Hall. Dress code: formal attire recommended.",
    date: "September 10, 2024",
    startTime: "8:00 PM",
    endTime: "10:30 PM",
    venue: "Grand Concert Hall",
    location: "321 Symphony Lane",
    city: "Chicago",
    country: "IL, USA",
    capacity: 2500,
    ticketsSold: 1800,
    image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&q=80",
    status: "On Sale",
    category: "Classical",
    genres: ["Classical", "Symphony", "Opera"],
    artists: ["Chicago Philharmonic Orchestra", "Maestro John Williams"],
    priceRange: { min: 80, max: 300 },
    rating: 4.9,
    reviews: 645,
    ageRestriction: "All Ages",
    accessibility: ["Wheelchair Access", "Hearing Assistance", "Accessible Parking"],
    amenities: ["WiFi", "Parking"],
    organizer: "Classical Arts Foundation",
    featured: false,
    trending: false,
  },
  {
    id: "5",
    title: "Hip Hop Block Party",
    description: "The streets come alive with the hottest hip hop artists and DJs. A celebration of urban culture featuring live performances, breakdancing competitions, graffiti art, and street food. Free entry with VIP packages available.",
    date: "July 4, 2024",
    startTime: "12:00 PM",
    endTime: "10:00 PM",
    venue: "Downtown Plaza",
    location: "555 Main Street",
    city: "Atlanta",
    country: "GA, USA",
    capacity: 15000,
    ticketsSold: 8500,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    status: "On Sale",
    category: "Street Festival",
    genres: ["Hip Hop", "Rap", "R&B"],
    artists: ["Kendrick Lamar", "J. Cole", "Megan Thee Stallion", "Travis Scott"],
    priceRange: { min: 0, max: 100 },
    rating: 4.6,
    reviews: 3421,
    ageRestriction: "All Ages",
    accessibility: ["Wheelchair Access", "Accessible Restrooms", "Sign Language Interpreters"],
    amenities: ["WiFi", "Food & Drinks", "Photography Allowed"],
    organizer: "Urban Culture Events",
    featured: true,
    trending: true,
  },
  {
    id: "6",
    title: "Country Music Jamboree",
    description: "A down-home country music experience featuring chart-topping country stars. Enjoy authentic Southern BBQ, line dancing, and the best in country music. Bring your cowboy boots and hat for a night of good old-fashioned fun.",
    date: "August 20, 2024",
    startTime: "5:00 PM",
    endTime: "11:00 PM",
    venue: "Rodeo Grounds",
    location: "777 Ranch Road",
    city: "Nashville",
    country: "TN, USA",
    capacity: 8000,
    ticketsSold: 6200,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    status: "Selling Fast",
    category: "Concert",
    genres: ["Country", "Bluegrass", "Folk"],
    artists: ["Luke Combs", "Carrie Underwood", "Chris Stapleton"],
    priceRange: { min: 60, max: 180 },
    rating: 4.8,
    reviews: 1876,
    ageRestriction: "All Ages",
    accessibility: ["Wheelchair Access", "Accessible Parking"],
    amenities: ["WiFi", "Food & Drinks", "Parking", "Photography Allowed"],
    organizer: "Country Roads Productions",
    featured: false,
    trending: false,
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "timeline">("list");
  
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    category: "all",
    genre: "all",
    priceRange: [0, 500],
    dateRange: "all",
    location: "all",
    status: "all",
    sortBy: "date",
  });

  // Extract unique values for filters
  const categories = Array.from(new Set(upcomingEvents.map(e => e.category)));
  const genres = Array.from(new Set(upcomingEvents.flatMap(e => e.genres)));
  const locations = Array.from(new Set(upcomingEvents.map(e => e.city)));

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let filtered = upcomingEvents.filter(event => {
      // Search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!event.title.toLowerCase().includes(query) &&
            !event.venue.toLowerCase().includes(query) &&
            !event.artists.some(a => a.toLowerCase().includes(query))) {
          return false;
        }
      }

      // Category filter
      if (filters.category !== "all" && event.category !== filters.category) {
        return false;
      }

      // Genre filter
      if (filters.genre !== "all" && !event.genres.includes(filters.genre)) {
        return false;
      }

      // Status filter
      if (filters.status !== "all" && event.status !== filters.status) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && event.city !== filters.location) {
        return false;
      }

      // Price range filter
      if (event.priceRange.min > filters.priceRange[1] || 
          event.priceRange.max < filters.priceRange[0]) {
        return false;
      }

      return true;
    });

    // Sort events
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "popularity":
          return b.ticketsSold - a.ticketsSold;
        case "price-asc":
          return a.priceRange.min - b.priceRange.min;
        case "price-desc":
          return b.priceRange.max - a.priceRange.max;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalAttendees = upcomingEvents.reduce((sum, e) => sum + e.capacity, 0);
    const ticketsSold = upcomingEvents.reduce((sum, e) => sum + e.ticketsSold, 0);
    const totalRevenue = upcomingEvents.reduce((sum, e) => 
      sum + (e.ticketsSold * ((e.priceRange.min + e.priceRange.max) / 2)), 0
    );
    const averageRating = upcomingEvents.reduce((sum, e) => sum + e.rating, 0) / upcomingEvents.length;

    return {
      totalEvents: upcomingEvents.length,
      totalAttendees,
      upcomingEvents: upcomingEvents.length,
      totalRevenue,
      averageRating,
      ticketsSold,
    };
  }, []);

  // Prepare timeline data
  const timelineEvents = upcomingEvents.map(event => ({
    id: event.id,
    title: event.title,
    date: event.date,
    time: `${event.startTime} - ${event.endTime}`,
    venue: event.venue,
    status: event.status,
    month: new Date(event.date).toLocaleString('default', { month: 'long', year: 'numeric' }),
  }));

  const handleViewDetails = (event: EventData) => {
    setSelectedEvent(event);
    setIsDetailsOpen(true);
  };

  const handleBuyTickets = (event: EventData) => {
    // Navigate to checkout or ticket purchase page
    console.log("Buy tickets for:", event.title);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-luxury">Upcoming Events</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Discover and book tickets for the most exciting live music events
              </p>
            </div>

            {/* Stats Section */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <EventStats {...stats} />
            </div>

            {/* Filters */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <EventFilters
                filters={filters}
                onFilterChange={setFilters}
                categories={categories}
                genres={genres}
                locations={locations}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-white/70">
                Showing <span className="text-white font-bold">{filteredEvents.length}</span> events
              </p>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "luxury" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode !== "list" ? "border-white/20 text-white hover:bg-white/10" : ""}
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
                <Button
                  variant={viewMode === "grid" ? "luxury" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode !== "grid" ? "border-white/20 text-white hover:bg-white/10" : ""}
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "timeline" ? "luxury" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("timeline")}
                  className={viewMode !== "timeline" ? "border-white/20 text-white hover:bg-white/10" : ""}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Timeline
                </Button>
              </div>
            </div>

            {/* Events Display */}
            {viewMode === "timeline" ? (
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <EventTimeline events={timelineEvents} />
              </div>
            ) : (
              <div className={`${
                viewMode === "grid" 
                  ? "grid grid-cols-1 lg:grid-cols-2 gap-6" 
                  : "space-y-6"
              } animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                {filteredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    <EventCard
                      event={event}
                      onViewDetails={handleViewDetails}
                      onBuyTickets={handleBuyTickets}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">No events found matching your criteria</p>
                <Button
                  variant="outline"
                  className="mt-4 border-white/20 text-white hover:bg-white/10"
                  onClick={() => setFilters({
                    searchQuery: "",
                    category: "all",
                    genre: "all",
                    priceRange: [0, 500],
                    dateRange: "all",
                    location: "all",
                    status: "all",
                    sortBy: "date",
                  })}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Event Details Modal */}
      <EventDetails
        event={selectedEvent}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onBuyTickets={handleBuyTickets}
      />
    </div>
  );
};

export default Events;
