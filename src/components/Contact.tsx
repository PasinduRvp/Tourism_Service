import { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ 
    title: '', 
    description: '', 
    type: 'success' 
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToastMessage = (title, description, type = 'success') => {
    setToastMessage({ title, description, type });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

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
    const whatsappNumber = '94763978918';
    const message = `New Inquiry from Mini Cabs & Tours Website:
    
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}

Please respond promptly.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      sendToWhatsApp();
      setFormData({ name: '', email: '', service: '', message: '' });

      showToastMessage(
        "Message Sent to WhatsApp!",
        "Thank you for your Request. We'll get back to you shortly."
      );
    } catch (error) {
      console.error('Failed to send message:', error);
      showToastMessage(
        "Failed to Send Message",
        "There was an error sending your message. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className={`rounded-lg p-4 shadow-lg border ${
            toastMessage.type === 'error' 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-green-50 border-green-200 text-green-800'
          }`}>
            <h4 className="font-medium mb-1">{toastMessage.title}</h4>
            <p className="text-sm opacity-90">{toastMessage.description}</p>
          </div>
        </div>
      )}
      
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Plan Your Journey
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Ready to explore Sri Lanka? Get in touch with us and let's create 
              an unforgettable experience tailored just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gray-700" />
                  <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
                </div>
                <div className="text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-3">
                    Emergency services available 24/7
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-100/30 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="rounded-lg placeholder:text-gray-700 bg-gray-50 text-gray-600"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="rounded-lg placeholder:text-gray-400 bg-gray-50 text-gray-600"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700">Service Interested</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border bg-gray-50 border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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

                  <div className="space-y-2 mb-4">
                    <Label htmlFor="message" className="text-gray-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="rounded-lg placeholder:text-gray-400 bg-gray-50 text-gray-600"
                      placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full py-3 text-base font-medium"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
                
                <p className="text-gray-500 text-sm mt-3 text-center">
                  We'll respond immediately. For urgent inquiries, please call or WhatsApp us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
