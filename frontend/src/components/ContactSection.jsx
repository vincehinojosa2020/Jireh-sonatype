import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
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

const services = [
  "Bathroom Remodel",
  "Flooring",
  "Framing (Metal & Wood)",
  "Drywall",
  "Interior Painting",
  "Exterior Painting",
  "Decks & Patios",
  "Pergolas",
  "Carpentry & Trim Work",
  "Siding & Windows",
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
      toast.success("Quote request sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_type: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Something went wrong. Please try again or text us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
              Get a Quote
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something<br />
              <span className="text-[#D97706]">Amazing Together</span>
            </h2>
            <div className="section-divider mb-8" />
            
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Ready to start your project? Fill out the form and I'll get back to you 
              as soon as possible. Or text me directly for a faster response!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <a
                href="sms:2109809174"
                data-testid="contact-phone"
                className="flex items-center gap-5 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors group"
              >
                <div className="w-14 h-14 bg-[#D97706] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Text to Get Started</p>
                  <p className="text-white font-bold text-xl">(210) 980-9174</p>
                </div>
              </a>

              <a
                href="mailto:Jirehrandc@Gmail.com"
                data-testid="contact-email"
                className="flex items-center gap-5 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors group"
              >
                <div className="w-14 h-14 bg-[#B45309] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Email Us</p>
                  <p className="text-white font-bold text-lg">Jirehrandc@Gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-xl">
                <div className="w-14 h-14 bg-[#0F172A] border border-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#D97706]" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Service Area</p>
                  <p className="text-white font-bold">San Antonio • Schertz to Cedar Park</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            {isSubmitted ? (
              <div data-testid="form-success" className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-4">
                  Thank You!
                </h3>
                <p className="text-[#57534E] mb-6">
                  Your quote request has been received. I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#D97706] hover:bg-[#B45309] text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="quote-form" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-2">
                    Request a Free Quote
                  </h3>
                  <p className="text-[#57534E]">Fair prices, guaranteed quality</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      data-testid="input-name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-[#E7E5E4] focus:border-[#D97706] focus:ring-[#D97706]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="input-email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-[#E7E5E4] focus:border-[#D97706] focus:ring-[#D97706]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      data-testid="input-phone"
                      placeholder="(210) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-[#E7E5E4] focus:border-[#D97706] focus:ring-[#D97706]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select onValueChange={handleServiceChange} value={formData.service_type}>
                      <SelectTrigger data-testid="select-service" className="border-[#E7E5E4]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="input-message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-[#E7E5E4] focus:border-[#D97706] focus:ring-[#D97706] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="submit-quote"
                  disabled={isSubmitting}
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-6 text-lg font-bold shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Quote Request
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-[#57534E]">
                  Or text us directly at{" "}
                  <a href="sms:2109809174" className="text-[#D97706] font-semibold hover:underline">
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
