import { TrendingUp, Users, Calendar, DollarSign, Ticket, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EventStatsProps {
  totalEvents: number;
  totalAttendees: number;
  upcomingEvents: number;
  totalRevenue: number;
  averageRating: number;
  ticketsSold: number;
}

export const EventStats = ({ 
  totalEvents, 
  totalAttendees, 
  upcomingEvents, 
  totalRevenue,
  averageRating,
  ticketsSold 
}: EventStatsProps) => {
  const stats = [
    {
      title: "Total Events",
      value: totalEvents,
      icon: Calendar,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Upcoming Events",
      value: upcomingEvents,
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Total Attendees",
      value: totalAttendees.toLocaleString(),
      icon: Users,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Tickets Sold",
      value: ticketsSold.toLocaleString(),
      icon: Ticket,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Total Revenue",
      value: `$${(totalRevenue / 1000).toFixed(1)}K`,
      icon: DollarSign,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      icon: Star,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
