import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, Star, Users, Award, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';



const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState({});
  
  const heroTexts = [
    "Explore Sri Lanka's Beauty",
    "Premium Airport Transfers", 
    "Guided Tours & Adventures"
  ];

  const backgroundImages = [
    { url: '/80.jpg', alt: 'Beautiful Beach' },
    { url: '/45.jpg', alt: 'Sri Lanka Waterfall' },
    { url: '/81.jpg', alt: 'Cultural heritage' },
    { url: '/87.jpg', alt: 'Adventure tours' },
    { url: '/77.jpg', alt: 'Premium service' }
  ];

  // Preload images for smooth transitions
  useEffect(() => {
    backgroundImages.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setIsImageLoaded(prev => ({ ...prev, [index]: true }));
      };
      img.src = image.url;
    });
  }, []);

  // Text rotation effect
  useEffect(() => {
    if (!isPlaying) return;
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000); // Slower text change for better readability
    
    return () => clearInterval(textInterval);
  }, [isPlaying, heroTexts.length]);

  // Background slideshow with user control
  useEffect(() => {
    if (!isPlaying) return;
    
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // Longer duration for less distraction
    
    return () => clearInterval(bgInterval);
  }, [isPlaying, backgroundImages.length]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow with Ken Burns Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                index === currentBg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ 
                backgroundImage: `url(${image.url})`,
                transform: index === currentBg ? 'scale(1.05)' : 'scale(1)',
                transition: 'opacity 1s ease-in-out, transform 20s ease-out'
              }}
              role="img"
              aria-label={image.alt}
            />
          ))}
          
          {/* Professional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Animated Title with reduced motion for accessibility */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span 
                className="inline-block transition-all duration-700 ease-out"
                key={currentText}
                style={{
                  animation: 'fadeInUp 0.7s ease-out'
                }}
              >
                {heroTexts[currentText]}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delayed">
              Experience the wonder of Sri Lanka with our premium transport services. 
              From airport transfers to guided tours, we make your journey unforgettable.
            </p>

            {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-delayed-2">
  <Link to="/contact">
    <Button className="bg-[#ffffff] text-black hover:bg-184E6C hover:text-[#184E6C] font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-white/20">
      Book Your Journey
    </Button>
  </Link>
  <Link to="/services">
    <Button 
      variant="outline" 
      className="border-2 text-#184E6C hover:bg-[#184E6C] hover:text-black font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/20"
    >
      View Services
    </Button>
  </Link>
</div>

            {/* Quick Stats with staggered animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Clock, title: "24/7", subtitle: "Available Service", delay: "0.5s" },
                { icon: Star, title: "5+ Years", subtitle: "Experience", delay: "0.7s" },
                { icon: MapPin, title: "Island Wide", subtitle: "Coverage", delay: "0.9s" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 hover:shadow-2xl opacity-0 animate-fade-in-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-white/80 text-sm">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-200 left-1/2 transform -translate-x-1/2 scroll-indicator">
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-dot" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Our Story with Image Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Story Content with decorative elements */}
            <div className="relative">
              

              
              <h3 className="text-2xl text-primary font-medium mb-4">Welcome to Your World of Adventure</h3>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Where Every Journey is a Story
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Tour Travels, we believe every trip is more than just a getaway—it's a 
                chance to create unforgettable memories. Whether you seek tranquil escapes, 
                thrilling adventures, or cultural explorations, we are here to guide you.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                With our expert knowledge and personalized service, we ensure your journey 
                is smooth and enriching. Let us take you beyond the ordinary and show you 
                the extraordinary in every corner of Sri Lanka. Your next adventure awaits!
              </p>

              {/* About Us Button with decorative path */}
              <div className="relative">
                <Link to="/about">
                <Button className="bg-primary hover:bg-primary/80 text-white text-lg px-10 py-6 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl">
                  About Us →
                  
                </Button>
                </Link>
                
                
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/48.jpg"
                  alt="Minindu Thiranjaya - Founder"
                  className="w-full h-96 object-cover"
                  
                />
              </div>
              
              {/* Floating profile card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="/propic.jpeg"
                      alt="Minindu Thiranjaya - Founder"
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-md"
                      
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-800">Minindu Thiranjaya</h5>
                    <p className="text-xs text-gray-600">Founder & Guide</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current"/>
                      <span className="text-xs text-gray-600 ml-1">5+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDot {
          0%, 20% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          80%, 100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-scroll-dot {
          animation: scrollDot 1.5s infinite;
        }

        .scroll-indicator {
          animation: fadeInUp 0.8s ease-out 1.5s both;
        }

        .animate-fade-in-delayed {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;