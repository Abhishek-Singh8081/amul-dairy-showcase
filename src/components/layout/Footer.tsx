import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <span className="text-xl font-bold text-accent-foreground">AMUL</span>
              </div>
              <span className="text-lg font-semibold">Taste of India</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Since 1946, Amul has been India's leading dairy brand, bringing you the finest 
              quality milk products with the authentic taste of pure goodness.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=milk" className="hover:text-accent transition-colors">Fresh Milk</Link></li>
              <li><Link to="/products?category=butter" className="hover:text-accent transition-colors">Amul Butter</Link></li>
              <li><Link to="/products?category=cheese" className="hover:text-accent transition-colors">Cheese</Link></li>
              <li><Link to="/products?category=ice-cream" className="hover:text-accent transition-colors">Ice Cream</Link></li>
              <li><Link to="/products?category=sweets" className="hover:text-accent transition-colors">Sweets</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Anand, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 1800 258 3333</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@amul.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Amul. All rights reserved. | Made with ❤️ for India's dairy lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;