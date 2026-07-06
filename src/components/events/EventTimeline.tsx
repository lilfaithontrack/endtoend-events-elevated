import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: string;
  month: string;
}

interface EventTimelineProps {
  events: TimelineEvent[];
}

export const EventTimeline = ({ events }: EventTimelineProps) => {
  // Group events by month
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.month]) {
      acc[event.month] = [];
    }
    acc[event.month].push(event);
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

      <div className="space-y-8">
        {Object.entries(groupedEvents).map(([month, monthEvents]) => (
          <div key={month} className="relative">
            {/* Month Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative z-10 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm">
                {month}
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Events for this month */}
            <div className="space-y-4 ml-16">
              {monthEvents.map((event) => (
                <Card key={event.id} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Date Circle */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-accent" />
                      </div>

                      {/* Event Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="text-white font-bold text-lg truncate">{event.title}</h4>
                          <Badge className="bg-accent/20 text-accent border-accent/30 flex-shrink-0">
                            {event.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2 text-white/70">
                            <Clock className="h-4 w-4 text-accent" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="truncate">{event.venue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
