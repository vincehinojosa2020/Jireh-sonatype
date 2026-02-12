import { useState } from "react";
import { Check, Sparkles, MessageCircle, CreditCard, Calendar } from "lucide-react";

const STRIPE_PAYMENT_URL = "https://checkout.stripe.com/c/pay/cs_live_a1UXyZH5uBMHzbtDokpFUbXX51YvoivzWDOW9WfW3c37k2JnAzU4CLDDsF";
const CALENDLY_URL = "https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1";

const pricingTiers = [
  {
    id: "quote",
    name: "Free Quote",
    price: "$0",
    description: "Get started with a no-obligation estimate",
    features: [
      "In-home consultation",
      "Detailed project estimate",
      "Material recommendations",
      "Timeline planning",
      "No pressure, no hassle"
    ],
    cta: "Text for Free Quote",
    ctaLink: "sms:2109809174?body=Hi%20Erik!%20I%27d%20like%20a%20free%20quote%20for%20my%20project.",
    popular: false,
    color: "bg-gray-100"
  },
  {
    id: "bathroom",
    name: "Bathroom Remodel",
    price: "$4,500",
    priceNote: "Starting at",
    description: "Transform your bathroom into a sanctuary",
    features: [
      "Tile & flooring",
      "Vanity & fixtures",
      "Shower/tub upgrades",
      "Lighting & electrical",
      "Full project management"
    ],
    cta: "Get Started",
    ctaLink: STRIPE_PAYMENT_URL,
    popular: false,
    color: "bg-[#00C4FF]/10"
  },
  {
    id: "kitchen",
    name: "Kitchen Remodel",
    price: "$9,500",
    priceNote: "Starting at",
    description: "The heart of your home, reimagined",
    features: [
      "Cabinet installation",
      "Countertops & backsplash",
      "Flooring & painting",
      "Appliance hookups",
      "Complete transformation"
    ],
    cta: "Get Started",
    ctaLink: STRIPE_PAYMENT_URL,
    popular: true,
    color: "bg-[#F5A623]/10"
  },
  {
    id: "full",
    name: "Full Renovation",
    price: "$25,000",
    priceNote: "Starting at",
    description: "Complete home transformation",
    features: [
      "Multi-room remodels",
      "Structural changes",
      "Outdoor living spaces",
      "Custom carpentry",
      "End-to-end management"
    ],
    cta: "Schedule Consultation",
    ctaLink: CALENDLY_URL,
    popular: false,
    color: "bg-[#0A4F60]/10"
  },
  {
    id: "custom",
    name: "Custom Project",
    price: "Custom",
    description: "Unique projects, fair pricing",
    features: [
      "Churches & commercial",
      "New construction",
      "Specialty builds",
      "Flexible payment plans",
      "Any budget welcome"
    ],
    cta: "Let's Talk",
    ctaLink: "sms:2109809174?body=Hi%20Erik!%20I%20have%20a%20custom%20project%20I%27d%20like%20to%20discuss.",
    popular: false,
    color: "bg-gray-100"
  }
];

const PricingSection = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#F5A623] font-semibold tracking-widest uppercase text-sm mb-4">
            Investment
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#0A4F60] leading-tight mb-6">
            Simple Pricing.<br />
            <span className="text-[#F5A623]">Exceptional Value.</span>
          </h2>
          <p className="text-xl text-gray-600">
            30% less than big box stores. 100% more care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              data-testid={`pricing-${tier.id}`}
              className={`relative rounded-2xl p-5 transition-all hover:scale-[1.02] ${tier.color} border-2 ${
                tier.popular ? "border-[#F5A623] shadow-lg" : "border-transparent hover:border-[#0A4F60]/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#F5A623] text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  POPULAR
                </div>
              )}
              
              <h3 className="text-base font-bold text-[#0A4F60] mb-1">{tier.name}</h3>
              
              <div className="mb-2">
                {tier.priceNote && (
                  <span className="text-xs text-gray-500">{tier.priceNote} </span>
                )}
                <span className="text-2xl font-bold text-[#0A4F60]">{tier.price}</span>
              </div>
              
              <p className="text-xs text-gray-600 mb-4">{tier.description}</p>
              
              <ul className="space-y-2 mb-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={tier.ctaLink}
                target={tier.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel={tier.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block w-full text-center py-2.5 rounded-lg font-bold text-sm transition-all ${
                  tier.popular
                    ? "bg-[#F5A623] text-white hover:bg-[#e09620]"
                    : "bg-[#0A4F60] text-white hover:bg-[#0d6377]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#0A4F60] text-center mb-6">Payment Options</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={STRIPE_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#635BFF] bg-white text-left transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-6 h-6 text-[#635BFF]" />
                <span className="font-bold text-[#0A4F60]">Pay Now</span>
              </div>
              <p className="text-gray-600 text-sm">Card, PayPal, Apple Pay via Stripe</p>
            </a>
            
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border-2 border-[#F5A623] bg-[#F5A623]/5 text-left transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-[#F5A623]" />
                <span className="font-bold text-[#0A4F60]">Talk First</span>
                <span className="text-xs bg-[#F5A623] text-white px-2 py-0.5 rounded-full">Recommended</span>
              </div>
              <p className="text-gray-600 text-sm">Discuss your project. We'll sort payment together.</p>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center text-gray-600">
            <Check className="w-5 h-5 text-[#F5A623]" />
            <span className="text-sm">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-gray-600">
            <Check className="w-5 h-5 text-[#F5A623]" />
            <span className="text-sm">10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-gray-600">
            <Check className="w-5 h-5 text-[#F5A623]" />
            <span className="text-sm">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
