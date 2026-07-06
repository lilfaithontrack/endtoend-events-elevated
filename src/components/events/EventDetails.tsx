import { 
  Calendar, MapPin, Users, Clock, Tag, Star, Music, Ticket, 
  DollarSign, Info, Shield, Accessibility, Wifi, Utensils, 
  Car, Camera, Share2, Heart, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EventData } from "./EventCard";

interface EventDetailsProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
  onBuyTickets: (event: EventData) => void;
}

export const EventDetails = ({ event, isOpen, onClose, onBuyTickets }: EventDetailsProps) => {
  if (!event) return null;

  const ticketPercentage = (event.ticketsSold / event.capacity) * 100;
  const availableTickets = event.capacity - event.ticketsSold;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-black border-white/10">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            {/* Hero Image */}
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.featured && (
                    <Badge className="bg-accent text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge className="bg-white/20 backdrop-blur-sm text-white">
                    {event.category}
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white">
                    {event.status}
                  </Badge>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  {event.title}
                </h2>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{event.rating}</span>
                    <span className="text-sm">({event.reviews} reviews)</span>
                  </div>
                  <Separator orientation="vertical" className="h-4 bg-white/30" />
                  <span className="text-sm">Organized by {event.organizer}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-white/5">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="lineup">Lineup</TabsTrigger>
                      <TabsTrigger value="venue">Venue</TabsTrigger>
                      <TabsTrigger value="tickets">Tickets</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6 mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Info className="h-5 w-5 text-accent" />
                          About This Event
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <Separator className="bg-white/10" />

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Music className="h-5 w-5 text-accent" />
                          Genres
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {event.genres.map((genre) => (
                            <Badge key={genre} variant="outline" className="border-accent/30 text-accent">
                              {genre}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-white/10" />

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-accent" />
                          Event Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-white/50 mb-1">Age Restriction</p>
                            <p className="text-white font-medium">{event.ageRestriction}</p>
                          </div>
                          <div>
                            <p className="text-white/50 mb-1">Dress Code</p>
                            <p className="text-white font-medium">Casual</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="lineup" className="space-y-4 mt-6">
                      <h3 className="text-xl font-bold text-white mb-4">Performing Artists</h3>
                      {event.artists.map((artist, index) => (
                        <div key={artist} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                              <Music className="h-8 w-8 text-accent" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg">{artist}</h4>
                              <p className="text-white/60 text-sm">
                                {index === 0 ? "Headliner" : `Supporting Act ${index}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="venue" className="space-y-6 mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Venue Details</h3>
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-white font-bold text-lg">{event.venue}</p>
                              <p className="text-white/60">{event.location}</p>
                              <p className="text-white/60">{event.city}, {event.country}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Amenities</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {event.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-2 text-white/70">
                              {amenity === "WiFi" && <Wifi className="h-4 w-4 text-accent" />}
                              {amenity === "Food & Drinks" && <Utensils className="h-4 w-4 text-accent" />}
                              {amenity === "Parking" && <Car className="h-4 w-4 text-accent" />}
                              {amenity === "Photography Allowed" && <Camera className="h-4 w-4 text-accent" />}
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Accessibility</h3>
                        <div className="flex flex-wrap gap-2">
                          {event.accessibility.map((item) => (
                            <Badge key={item} variant="outline" className="border-accent/30 text-accent">
                              <Accessibility className="h-3 w-3 mr-1" />
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="tickets" className="space-y-6 mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Ticket Information</h3>
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white/70">Price Range</span>
                            <span className="text-white font-bold text-lg">
                              ${event.priceRange.min} - ${event.priceRange.max}
                            </span>
                          </div>
                          <Separator className="bg-white/10" />
                          <div className="flex justify-between items-center">
                            <span className="text-white/70">Available Tickets</span>
                            <span className="text-white font-bold">{availableTickets.toLocaleString()}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-white/70">Tickets Sold</span>
                              <span className="text-white">{ticketPercentage.toFixed(0)}%</span>
                            </div>
                            <Progress value={ticketPercentage} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Quick Info Card */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Date</p>
                        <p className="text-white font-bold">{event.date}</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Time</p>
                        <p className="text-white font-bold">{event.startTime} - {event.endTime}</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Capacity</p>
                        <p className="text-white font-bold">{event.capacity.toLocaleString()}</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Price Range</p>
                        <p className="text-white font-bold">${event.priceRange.min} - ${event.priceRange.max}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      variant="luxury"
                      className="w-full"
                      size="lg"
                      onClick={() => onBuyTickets(event)}
                      disabled={event.status === "Sold Out"}
                    >
                      <Ticket className="h-5 w-5 mr-2" />
                      {event.status === "Sold Out" ? "Sold Out" : "Buy Tickets Now"}
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
