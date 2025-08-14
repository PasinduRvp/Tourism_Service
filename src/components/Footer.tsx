import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaTiktok } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Airport Transfers',
    'Private Tours',
    'Vehicle Rental',
    'Tour Guide Services',
  ];

  const destinations = [
    'Sigiriya Rock',
    'Down South',
    'Kandy',
    'Galle Fort',
    'Ella',
    'Yala Safari',
    'Nuwara Eliya',
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Mini Cabs & Tours Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-background">Mini Cabs & Tours</h1>
              </div>
            </Link>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Your trusted partner for exploring Sri Lanka's wonders. 
              Experience premium transport services with local expertise and genuine hospitality.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:text-primary transition-colors"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/94763978918`;
                  window.open(whatsappUrl, '_blank');
                  }}
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm">0763978918</span>
            </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a 
                  href="mailto:minicabs.tours@gmail.com"
                  className="text-sm hover:text-secondary transition-colors duration-300"
                >
                  minicabs.tours@gmail.com
                </a>
              </div>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Link to="/services"> <h4 className="text-lg font-semibold mb-6">Our Services</h4> </Link>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <Link to="/gallery"> <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4> </Link>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <span className="text-background/80">{destination}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media - Centered */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/share/16yFExe6wx/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mini_cabs_tours?igsh=bjhvaGFramswaWlz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://www.tiktok.com/@mini_cabs_tours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="mailto:minicabs.tours@gmail.com"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Send us an email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright - Centered below social icons */}
            <div className="text-sm text-background/60 text-center">
              <p>© {currentYear} Mini Cabs & Tours</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
