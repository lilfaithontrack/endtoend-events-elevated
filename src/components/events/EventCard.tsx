import { Calendar, MapPin, Users, Clock, Tag, Star, TrendingUp, Music, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  location: string;
  city: string;
  country: string;
  capacity: number;
  ticketsSold: number;
  image: string;
  status: "On Sale" | "Selling Fast" | "Sold Out" | "Coming Soon";
  category: string;
  genres: string[];
  artists: string[];
  priceRange: { min: number; max: number };
  rating: number;
  reviews: number;
  ageRestriction: string;
  accessibility: string[];
  amenities: string[];
  organizer: string;
  featured: boolean;
  trending: boolean;
}

interface EventCardProps {
  event: EventData;
  onViewDetails: (event: EventData) => void;
  onBuyTickets: (event: EventData) => void;
}

export const EventCard = ({ event, onViewDetails, onBuyTickets }: EventCardProps) => {
  const ticketPercentage = (event.ticketsSold / event.capacity) * 100;
  const availableTickets = event.capacity - event.ticketsSold;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Sale":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Selling Fast":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Sold Out":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Coming Soon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-accent/20 text-accent border-accent/30";
    }
  };

  return (
    <Card className="group bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Image Section */}
          <div className="lg:col-span-1 relative overflow-hidden aspect-square lg:aspect-auto">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {event.featured && (
                <Badge className="bg-accent/90 text-white border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              {event.trending && (
                <Badge className="bg-purple-500/90 text-white border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <div className="absolute top-4 right-4">
              <Badge className={`${getStatusColor(event.status)} border`}>
                {event.status}
              </Badge>
            </div>
            {/* Rating Badge */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold">{event.rating}</span>
              <span className="text-white/60 text-sm">({event.reviews})</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              {/* Category & Genres */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="outline" className="border-accent/30 text-accent">
                  <Tag className="h-3 w-3 mr-1" />
                  {event.category}
                </Badge>
                {event.genres.slice(0, 3).map((genre) => (
                  <Badge key={genre} variant="outline" className="border-white/20 text-white/70">
                    <Music className="h-3 w-3 mr-1" />
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              {/* Artists */}
              <div className="mb-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Performing Artists</p>
                <div className="flex flex-wrap gap-2">
                  {event.artists.map((artist) => (
                    <span key={artist} className="text-white font-medium text-sm">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm">{event.date}</p>
                    <p className="text-white/60 text-xs">{event.startTime} - {event.endTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm">{event.venue}</p>
                    <p className="text-white/60 text-xs">{event.city}, {event.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm">Capacity: {event.capacity.toLocaleString()}</p>
                    <p className="text-white/60 text-xs">{availableTickets.toLocaleString()} tickets left</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm">
                      ${event.priceRange.min} - ${event.priceRange.max}
                    </p>
                    <p className="text-white/60 text-xs">Price Range</p>
                  </div>
                </div>
              </div>

              {/* Ticket Sales Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70 text-xs">Ticket Sales</span>
                  <span className="text-white font-medium text-xs">
                    {ticketPercentage.toFixed(0)}% Sold
                  </span>
                </div>
                <Progress value={ticketPercentage} className="h-2" />
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 text-xs text-white/50">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{event.ageRestriction}</span>
                </div>
                {event.accessibility.length > 0 && (
                  <div className="flex items-center gap-1">
                    <span>♿</span>
                    <span>Accessible</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                variant="luxury"
                className="flex-1 sm:flex-none"
                onClick={() => onBuyTickets(event)}
                disabled={event.status === "Sold Out"}
              >
                <Ticket className="h-4 w-4 mr-2" />
                {event.status === "Sold Out" ? "Sold Out" : "Buy Tickets"}
              </Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none border-white/20 text-white hover:bg-white/10"
                onClick={() => onViewDetails(event)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
