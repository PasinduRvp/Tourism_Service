import { Award, Heart, Globe, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Globe, number: "500+", label: "Tours Completed" },
    { icon: Users, number: "1000+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Your Gateway to 
              <span className="text-primary"> Sri Lanka's Wonders</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Founded in 2019 by Minindu Thiranjaya, a passionate Sri Lankan who wanted to share 
                the incredible beauty of his homeland with the world. What started as a small 
                airport transfer service has grown into a comprehensive tourism transport company.
              </p>
              
              <p className="text-gray-300">
                We believe that every journey should be more than just transportation – it should 
                be an experience that connects you with Sri Lanka's rich culture, stunning landscapes, 
                and warm hospitality.
              </p>
              
              <p className="text-gray-300">
                Our team of certified guides and professional drivers are locals who know every 
                hidden gem, every scenic route, and every story that makes Sri Lanka special. 
                We're not just your transport provider; we're your gateway to authentic Sri Lankan experiences.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-gray-400">
                To provide safe, comfortable, and memorable transport experiences that showcase 
                the best of Sri Lanka while supporting local communities and sustainable tourism.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up stagger-${index + 1}`}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 text-xl font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-foreground">Our Values</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Safety First</h4>
                    <p className="text-gray-400">Your safety and comfort are our top priorities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Authentic Experiences</h4>
                    <p className="text-gray-400">Genuine connections with local culture and nature</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable Tourism</h4>
                    <p className="text-gray-400">Supporting local communities and protecting our environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;