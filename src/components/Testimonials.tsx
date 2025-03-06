
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80",
      content: "Home Renovator GPT saved me thousands on my kitchen remodel. It found materials 30% cheaper than what I was quoted and provided detailed DIY instructions that were easy to follow.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "DIY Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80",
      content: "I was skeptical at first, but this AI tool is incredible. It helped me fix a plumbing issue by identifying the exact parts I needed and connecting me with a local supplier who had them in stock.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "First-time Homebuyer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80",
      content: "As a new homeowner with zero renovation experience, Home Renovator GPT has been like having an expert by my side. It walked me through each step of renovating my bathroom and even helped me find a reliable contractor.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-cyberpunk-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyberpunk-darker to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyberpunk-yellow/10 border border-cyberpunk-yellow/30 text-cyberpunk-yellow text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Users Are <span className="text-gradient-blue">Saying</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover how Home Renovator GPT is transforming home improvement projects 
            for homeowners and DIY enthusiasts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl border border-white/10 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyberpunk-blue mr-4" 
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">{testimonial.content}</p>
              
              <div className="flex text-cyberpunk-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "text-cyberpunk-yellow" : "text-gray-600"} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
