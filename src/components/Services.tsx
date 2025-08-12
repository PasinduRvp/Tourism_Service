import { Plane, Car, Users, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Comfortable and reliable pickups and drops to/from Colombo Airport (CMB) and all major airports in Sri Lanka.",
      features: ["24/7 availability", "Flight monitoring", "Meet & greet service", "Luxury vehicles"],
    },
    {
      icon: Car,
      title: "Private Tours",
      description: "Explore Sri Lanka's UNESCO World Heritage sites, pristine beaches, and cultural landmarks with our guided tours.",
      features: ["Customizable itineraries", "Certified guides", "Cultural insights", "Photography stops"],
    },
    {
      icon: Users,
      title: "Certified Tour Guiding",
      description: "Professional, English-speaking guides with deep knowledge of Sri Lankan history, culture, and wildlife.",
      features: ["Licensed professionals", "Multi-language support", "Local expertise", "Wildlife spotting"],
    },
    {
      icon: MapPin,
      title: "Vehicle Rental",
      description: "Rent modern, well-maintained vehicles with or without professional drivers for your Sri Lankan adventure.",
      features: ["Modern fleet", "GPS navigation", "Insurance included", "Driver options"],
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "All our vehicles and drivers are fully licensed and insured for your peace of mind."
    },
    {
      icon: Clock,
      title: "Punctual & Reliable",
      description: "We value your time and ensure prompt, reliable service for all bookings."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Our team knows Sri Lanka inside out, ensuring you discover hidden gems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            From airport transfers to island-wide tours, we provide comprehensive transport solutions 
            that showcase the best of Sri Lanka's beauty and culture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={service.title} className={`bg-white rounded-3xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 fade-in-up stagger-${index + 1}`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-gray-900 text-2xl font-playfair font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-gray-900 text-2xl font-bold text-primary mb-4">
                  {service.price}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-blue-500 hover:bg-blue-900 text-white w-full rounded-full py-3 transition-all duration-300">
                  Contact Us
                </Button>
              </Link>

            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-gray-900 text-3xl font-playfair font-bold text-center text-foreground mb-12">
            Why Choose Sri Tours?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className={`text-center fade-in-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="text-gray-900 text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;