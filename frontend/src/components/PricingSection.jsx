import { Check, Sparkles, CreditCard, Calendar } from "lucide-react";

const STRIPE_URL = "https://checkout.stripe.com/c/pay/cs_live_a1UXyZH5uBMHzbtDokpFUbXX51YvoivzWDOW9WfW3c37k2JnAzU4CLDDsF";
const CALENDLY_URL = "https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1";

function PricingSection() {
  const tiers = [
    { id: "quote", name: "Free Quote", price: "$0", desc: "No-obligation estimate", features: ["In-home consultation", "Detailed estimate", "Material recs", "Timeline planning", "No pressure"], cta: "Text for Quote", link: "sms:2109809174", popular: false, bg: "bg-gray-100" },
    { id: "bathroom", name: "Bathroom Remodel", price: "$4,500", note: "Starting at", desc: "Transform your bathroom", features: ["Tile and flooring", "Vanity and fixtures", "Shower upgrades", "Lighting", "Full management"], cta: "Get Started", link: STRIPE_URL, popular: false, bg: "bg-sky-50" },
    { id: "kitchen", name: "Kitchen Remodel", price: "$9,500", note: "Starting at", desc: "Heart of your home", features: ["Cabinet installation", "Countertops", "Flooring", "Appliance hookups", "Full transform"], cta: "Get Started", link: STRIPE_URL, popular: true, bg: "bg-amber-50" },
    { id: "full", name: "Full Renovation", price: "$25,000", note: "Starting at", desc: "Complete transformation", features: ["Multi-room remodels", "Structural changes", "Outdoor spaces", "Custom carpentry", "End-to-end"], cta: "Schedule Call", link: CALENDLY_URL, popular: false, bg: "bg-teal-50" },
    { id: "custom", name: "Custom Project", price: "Custom", desc: "Unique projects", features: ["Churches", "Commercial", "New construction", "Flexible payments", "Any budget"], cta: "Lets Talk", link: "sms:2109809174", popular: false, bg: "bg-gray-100" }
  ];

  return (
    <section id="pricing" data-testid="pricing-section" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-amber-500 font-semibold uppercase text-sm mb-4">Investment</p>
          <h2 className="font-serif text-4xl font-bold text-teal-900 mb-6">Simple Pricing. <span className="text-amber-500">Exceptional Value.</span></h2>
          <p className="text-xl text-gray-600">30% less than big box stores. 100% more care.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {tiers.map((tier) => (
            <div key={tier.id} data-testid={`pricing-${tier.id}`} className={`relative rounded-2xl p-5 ${tier.bg} border-2 ${tier.popular ? "border-amber-500 shadow-lg" : "border-transparent hover:border-teal-200"}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />POPULAR
                </div>
              )}
              <h3 className="text-base font-bold text-teal-900 mb-1">{tier.name}</h3>
              <div className="mb-2">
                {tier.note && <span className="text-xs text-gray-500">{tier.note} </span>}
                <span className="text-2xl font-bold text-teal-900">{tier.price}</span>
              </div>
              <p className="text-xs text-gray-600 mb-4">{tier.desc}</p>
              <ul className="space-y-2 mb-4">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href={tier.link} target={tier.link.startsWith("http") ? "_blank" : undefined} rel={tier.link.startsWith("http") ? "noopener noreferrer" : undefined} className={`block w-full text-center py-2.5 rounded-lg font-bold text-sm ${tier.popular ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-teal-900 text-white hover:bg-teal-800"}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-teal-900 text-center mb-6">Payment Options</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-500 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-6 h-6 text-indigo-600" />
                <span className="font-bold text-teal-900">Pay Now</span>
              </div>
              <p className="text-gray-600 text-sm">Card, PayPal, Apple Pay via Stripe</p>
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl border-2 border-amber-500 bg-amber-50">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-amber-500" />
                <span className="font-bold text-teal-900">Talk First</span>
                <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">Recommended</span>
              </div>
              <p className="text-gray-600 text-sm">Discuss your project first</p>
            </a>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center text-gray-600"><Check className="w-5 h-5 text-amber-500" /><span className="text-sm">Licensed and Insured</span></div>
          <div className="flex items-center gap-3 justify-center text-gray-600"><Check className="w-5 h-5 text-amber-500" /><span className="text-sm">10+ Years Experience</span></div>
          <div className="flex items-center gap-3 justify-center text-gray-600"><Check className="w-5 h-5 text-amber-500" /><span className="text-sm">Satisfaction Guaranteed</span></div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
