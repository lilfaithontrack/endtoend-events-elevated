import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">End To End Events</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Premium event management services from concept to celebration. 
              Creating unforgettable experiences with sophistication and precision.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Weddings</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Concerts & Shows</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Private Celebrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 End To End Events. All rights reserved.</p>
            <p>Crafted with excellence and sophistication</p>
          </div>
        </div>
      </div>
      
      {/* Gradient Bottom Bar */}
      <div className="h-1 bg-gradient-to-r from-luxury-dark via-accent to-luxury-burgundy-light" />
    </footer>
  );
};

export default Footer;
