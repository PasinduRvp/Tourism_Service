import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+94 76 397 8918"],
      action: "tel:+94763978918"
    },

    {
      icon: Mail,
      title: "Email",
      details: ["minicabs.tours@gmail.com"],
      action: "mailto:minicabs.tours@gmail.com"
    }
  ];

  const services = [
    "Airport Transfer",
    "Private Tour",
    "Vehicle Rental", 
    "Tour Guide Service",
    "Custom Package",
    "Other"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = () => {
    const whatsappNumber = '94763978918'; // Your WhatsApp number without + or 00
    const message = `New Inquiry from Mini Cabs & Tours Website:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}

Please respond promptly.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to WhatsApp
      sendToWhatsApp();

      // Clear form
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      toast({
        title: "Message Sent to WhatsApp!",
        description: "Thank you for your Request. We'll get back to you shortly.",
      });

    } catch (error) {
      console.error('Failed to send message:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Let's Plan Your Journey
          </h2>
          <p className="text-gray-100 text-xl  max-w-3xl mx-auto leading-relaxed">
            Ready to explore Sri Lanka? Get in touch with us and let's create 
            an unforgettable experience tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in-left">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-start space-x-4 p-6 bg-card rounded-2xl hover:shadow-lg transition-all duration-300 group fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-gray-900 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-950 text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-gray-900" />
                <h4 className="text-lg font-semibold text-foreground">Business Hours</h4>
              </div>
              <div className="text-gray-200 space-y-2 ">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="text-gray-300 text-sm mt-3">
                  Emergency services available 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="rounded-xl"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="rounded-xl"
                      placeholder="+94 76 397 8918"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="rounded-xl resize-none"
                    placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="btn-primary w-full text-lg py-3"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 text-white" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-gray-100 text-sm text-muted-foreground mt-4 text-center">
                We'll respond immediately. For urgent inquiries, please call or WhatsApp us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;