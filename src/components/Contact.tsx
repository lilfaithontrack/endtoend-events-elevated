import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            LET'S CREATE <span style={{ color: '#A62639' }}>MAGIC</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto uppercase tracking-wider">
            Book Your Next Music Event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input id="firstName" placeholder="John" className="bg-black/50 border-white/20 text-white placeholder:text-white/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-black/50 border-white/20 text-white placeholder:text-white/40" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/20 text-white placeholder:text-white/40" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-black/50 border-white/20 text-white placeholder:text-white/40" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType" className="text-white">Event Type</Label>
                <Select>
                  <SelectTrigger className="bg-black/50 border-white/20 text-white">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="concert">Concert Production</SelectItem>
                    <SelectItem value="festival">Music Festival</SelectItem>
                    <SelectItem value="tour">Artist Tour</SelectItem>
                    <SelectItem value="venue">Live Music Venue</SelectItem>
                    <SelectItem value="private">Private Music Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Tell Us About Your Event</Label>
                <Textarea 
                  id="message" 
                  placeholder="Share your vision, expected attendance, and any specific requirements..." 
                  rows={6}
                  className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <Button variant="luxury" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wider">
                Book Consultation
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white uppercase tracking-wide">Email</div>
                    <a href="mailto:bookings@endtoend.events" className="text-white/70 hover:text-accent transition-colors">
                      bookings@endtoend.events
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white uppercase tracking-wide">Phone</div>
                    <a href="tel:+15550000000" className="text-white/70 hover:text-accent transition-colors">
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white uppercase tracking-wide">Office</div>
                    <p className="text-white/70">
                      123 Sound Avenue<br />
                      Los Angeles, CA 90028
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h4 className="font-semibold mb-3 text-white uppercase tracking-wider">Booking Hours</h4>
              <div className="space-y-2 text-white/70">
                <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                <p>Saturday: 12:00 PM - 6:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
