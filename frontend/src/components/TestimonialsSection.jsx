import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shannen B.",
    content: "Erik has done a wonderful job each time they have done work on my house. They are professional and work hard to get the job done in a timely manner. I highly recommend Erik for any home renovation needs. I had some drywall work done, laundry room remodel and bathroom remodel. My next home addition is already being planned now.",
    rating: 5,
    project: "Bathroom & Laundry Remodel"
  },
  {
    id: 2,
    name: "Mike T.",
    content: "Jireh Remodeling transformed our backyard with a beautiful double-deck and pergola. Erik's attention to detail and craftsmanship exceeded our expectations. The whole family loves spending time in our new outdoor space!",
    rating: 5,
    project: "Deck & Pergola"
  },
  {
    id: 3,
    name: "Sarah R.",
    content: "We needed our whole house painted inside and out. Erik and his team were professional, efficient, and the results are stunning. They even wrapped our porch posts in cedar - it looks amazing! Highly recommend.",
    rating: 5,
    project: "Interior & Exterior Painting"
  },
  {
    id: 4,
    name: "David L.",
    content: "Had them install new vinyl flooring throughout our home. They discovered and fixed rotted subfloor we didn't even know about. Honest, hardworking, and the floors look beautiful. Will definitely call again!",
    rating: 5,
    project: "Flooring Installation"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-[#D97706] text-[#D97706]" : "text-[#E7E5E4]"}`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-gradient-to-b from-[#FAFAF9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            What Our Clients Say
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div
            data-testid="testimonial-carousel"
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E7E5E4] relative overflow-hidden"
          >
            {/* Quote decoration */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-[#D97706]/10" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <blockquote className="font-['Playfair_Display'] text-xl md:text-2xl text-[#0F172A] leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0F172A] text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#D97706] text-sm font-medium">
                    {testimonials[currentIndex].project}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    data-testid="testimonial-prev"
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-[#E7E5E4] flex items-center justify-center hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    data-testid="testimonial-next"
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-[#E7E5E4] flex items-center justify-center hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#D97706] w-8" : "bg-[#E7E5E4]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (smaller cards) */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-testid={`testimonial-card-${testimonial.id}`}
              onClick={() => setCurrentIndex(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-[#0F172A] text-white"
                  : "bg-white border border-[#E7E5E4] hover:border-[#D97706]/50"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      index === currentIndex ? "fill-[#D97706] text-[#D97706]" : "fill-[#D97706] text-[#D97706]"
                    }`}
                  />
                ))}
              </div>
              <p className={`text-sm line-clamp-3 mb-3 ${index === currentIndex ? "text-white/80" : "text-[#57534E]"}`}>
                "{testimonial.content.substring(0, 100)}..."
              </p>
              <p className={`font-semibold text-sm ${index === currentIndex ? "text-white" : "text-[#0F172A]"}`}>
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
