import { Instagram, Linkedin, Facebook, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Music className="w-8 h-8" style={{ color: '#A62639' }} />
              <h3 className="text-2xl font-bold uppercase tracking-wider">End To End Events</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Premium music event production from underground shows to stadium tours. 
              We bring your sonic vision to life with world-class production.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-lg hover:bg-accent transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-lg hover:bg-accent transition-all duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-lg hover:bg-accent transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Concert Production</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Music Festivals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Live Music Venues</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Private Events</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 End To End Events. All rights reserved.</p>
            <p className="uppercase tracking-wider">Powered by Music, Driven by Passion</p>
          </div>
        </div>
      </div>
      
      {/* Gradient Bottom Bar */}
      <div className="h-1 bg-gradient-to-r from-black via-accent to-black" />
    </footer>
  );
};

export default Footer;
