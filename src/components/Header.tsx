import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const phoneNumber = '94763978918'; // WhatsApp number (no spaces or special chars)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/16yFExe6wx/?mibextid=wwXIfr',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/mini_cabs_tours?igsh=bjhvaGFramswaWlz',
      label: 'Instagram'
    },
    { 
      icon: Mail, 
      href: 'mailto:minicabs.tours@gmail.com',
      label: 'Email'
    }
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello, I would like to inquire about your services.`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Mini Cabs & Tours Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-foreground">Mini Cabs & Tours</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions - Phone icon only */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              {/* WhatsApp Button - Icon only */}
              <button
                onClick={handleWhatsAppClick}
                className="p-2 text-gray-200 hover:text-green-400 rounded-full hover:bg-gray-800/30 transition-colors duration-300"
                title="Contact us on WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 border-l border-gray-700/50 pl-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-200 hover:text-white rounded-full hover:bg-gray-800/30 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 py-2 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center gap-6 pt-4">
                {/* Mobile - Phone icon only */}
                <button
                  onClick={handleWhatsAppClick}
                  className="p-2 text-gray-200 hover:text-green-400 rounded-full hover:bg-gray-800/30 transition-colors"
                  title="Contact us on WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </button>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-200 hover:text-white rounded-full hover:bg-gray-800/30 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;