import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Calendar, CreditCard, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const STRIPE_URL = "https://checkout.stripe.com/c/pay/cs_live_a1UXyZH5uBMHzbtDokpFUbXX51YvoivzWDOW9WfW3c37k2JnAzU4CLDDsF";
const CALENDLY_URL = "https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1";

const projectTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Full Renovation",
  "Flooring",
  "Painting",
  "Deck/Patio",
  "Church Construction",
  "Commercial",
  "Other"
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service_type: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/quote`, formData);
      setIsSubmitted(true);
      toast.success("Got it! Erik will be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_type: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Something went wrong. Please text Erik directly at (210) 980-9174");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#0A4F60]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <p className="text-[#F5A623] font-semibold tracking-widest uppercase text-sm mb-4">
              Get Started
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform<br />
              <span className="text-[#F5A623]">Your Home?</span>
            </h2>
            
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Text Erik today for a free quote. No pressure, no hassle — just honest 
              advice and fair pricing.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Primary CTA - Text */}
              <a
                href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20free%20quote."
                data-testid="contact-text"
                className="flex items-center gap-5 bg-[#F5A623] hover:bg-[#e09620] p-5 rounded-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm mb-1">Fastest Response</p>
                  <p className="text-white font-bold text-xl">Text Today!</p>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:2109809174"
                data-testid="contact-phone"
                className="flex items-center gap-5 bg-white/10 hover:bg-white/20 p-5 rounded-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Call Direct</p>
                  <p className="text-white font-bold text-lg">(210) 980-9174</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Jirehrandc@Gmail.com"
                data-testid="contact-email"
                className="flex items-center gap-5 bg-white/10 hover:bg-white/20 p-5 rounded-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <p className="text-white font-bold">Jirehrandc@Gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-xl">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Service Area</p>
                  <p className="text-white font-bold">San Antonio, Texas</p>
                </div>
              </div>
            </div>

            {/* Additional CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-semibold transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule Online
              </a>
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#635BFF] hover:bg-[#5046E5] text-white px-5 py-3 rounded-lg font-semibold transition-all"
              >
                <CreditCard className="w-5 h-5" />
                Make Payment
              </a>
              <a
                href="https://www.linkedin.com/in/erik-camacho-9314a3381/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084d8f] text-white px-5 py-3 rounded-lg font-semibold transition-all"
              >
                <Linkedin className="w-5 h-5" />
                Connect
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            {isSubmitted ? (
              <div data-testid="form-success" className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0A4F60] mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Erik will be in touch soon with your free quote.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#F5A623] hover:bg-[#e09620] text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="quote-form" className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0A4F60] mb-2">
                    Request Free Quote
                  </h3>
                  <p className="text-gray-500">No obligation. No pressure.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      data-testid="input-name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      data-testid="input-phone"
                      placeholder="(210) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="input-email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Project Type</Label>
                    <Select onValueChange={handleServiceChange} value={formData.service_type}>
                      <SelectTrigger data-testid="select-service">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="input-message"
                    placeholder="What are you looking to do?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="submit-quote"
                  disabled={isSubmitting}
                  className="w-full bg-[#F5A623] hover:bg-[#e09620] text-white py-6 text-lg font-bold shadow-lg"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Or just text{" "}
                  <a href="sms:2109809174" className="text-[#F5A623] font-semibold hover:underline">
                    (210) 980-9174
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
