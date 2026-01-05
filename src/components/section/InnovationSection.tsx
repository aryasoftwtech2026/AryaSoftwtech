export default function InnovationSection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden relative">
      {/* Subtle animated background blobs - professional depth without images */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-0 w-96 h-96 md:w-[700px] md:h-[700px] bg-gradient-to-bl from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[800px] md:h-[800px] bg-gradient-to-tr from-indigo-100 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-10 md:space-y-14">
          {/* Tagline */}
          <div className="opacity-0 animate-slideUp delay-100">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm md:text-base">
              Driving Innovation
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight opacity-0 animate-slideUp delay-200">
            Building the Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Smart Technology
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto opacity-0 animate-slideUp delay-300">
            We constantly leverage cutting-edge technologies to develop user-friendly and robust solutions. 
            Our innovations include AI-based recommendations, real-time tracking, secure payment integrations, 
            and customizable dashboards — making every project highly efficient, scalable, and truly user-centric.
          </p>

          {/* Tech Stack */}
          <div className="opacity-0 animate-slideUp delay-500">
            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-6 md:mb-8 uppercase tracking-wide">
              Our Tech Stack
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['React', 'Next.js', 'Node.js', 'Flutter', 'Cloud Services', 'AI/ML'].map((tech, idx) => (
                <span
                  key={tech}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm border border-indigo-100 rounded-2xl text-base md:text-lg font-medium text-indigo-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${600 + idx * 100}ms`, opacity: 0, animation: 'slideUp 0.8s ease-out forwards' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}