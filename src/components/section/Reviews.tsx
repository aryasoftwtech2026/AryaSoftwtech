"use client";

import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Rahul Sharma",
    role: "CEO",
    company: "ShopMart India",
    review: "Arya Softwtech built an outstanding e-commerce platform for us. The team was highly professional and delivered ahead of schedule. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    company: "HealthPlus App",
    review: "Their mobile app development is truly top-class. The design is clean, performance is lightning-fast, and we received timely support throughout updates.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Founder",
    company: "EduLearn Platform",
    review: "They gave our education portal a complete transformation. Features like live classes and quizzes now run seamlessly. Best decision to partner with them.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Marketing Head",
    company: "TravelBuddy",
    review: "Both the website and booking system are working perfectly. We're receiving excellent feedback from customers. Thank you, Arya Softwtech!",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "CTO",
    company: "FinSecure",
    review: "They developed a security-focused web app that meets banking standards. Documentation and code quality were exceptional.",
    rating: 5,
  },
  {
    name: "Sonia Mehta",
    role: "Director",
    company: "FoodExpress",
    review: "The delivery tracking system and admin panel are extremely user-friendly. Our sales increased by 30% after launch!",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`transition-all duration-300 ${
            star <= rating
              ? "w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400 drop-shadow-md"
              : "w-5 h-5 md:w-6 md:h-6 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index on scroll (for dots)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.querySelector('.review-card')?.clientWidth || 0;
      const gap = 32; // matches gap-8 (2rem)
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.max(0, Math.min(newIndex, reviews.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // initial

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelectorAll('.review-card')[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
        behavior: 'smooth',
      });
    }
    setCurrentIndex(index);
  };

  const scrollLeft = () => scrollToIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  const scrollRight = () => scrollToIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses across India
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 md:left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl rounded-full p-3 md:p-4 hover:scale-110 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-4 md:right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl rounded-full p-3 md:p-4 hover:scale-110 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 md:px-0"
          >
            <div className="flex gap-8 py-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review-card bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 p-6 md:p-8 lg:p-10 flex-shrink-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl snap-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <Quote className="w-10 h-10 md:w-14 md:h-14 text-indigo-600 opacity-30 -ml-2" />
                    <StarRating rating={review.rating} />
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 italic">
                    "{review.review}"
                  </p>

                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-2xl">
                        {review.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 blur-xl opacity-60 scale-125 -z-10" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg md:text-xl">
                        {review.name}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        {review.role} at{" "}
                        <span className="font-semibold text-indigo-600">{review.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Always visible */}
          <div className="flex justify-center gap-2 md:gap-3 mt-10 md:mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 md:w-10 h-3 bg-indigo-600 shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-6 text-gray-500 text-sm md:hidden">
            ← Swipe to explore more reviews →
          </div>
        </div>
      </div>
    </section>
  );
}