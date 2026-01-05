import Image from 'next/image';
import AboutSection from "@/components/section/AboutSection"; // Agar aapka alag component hai

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Professional & Visual */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        {/* Subtle Abstract Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://img.freepik.com/premium-vector/modern-blue-purple-gradient-background-with-wave-tech-geometric-creative-minimal-gradient-concepts-vector-abstract-graphic-design-banner-pattern-presentation-background-web-template_249611-18503.jpg"
            alt="Abstract technology waves background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Arya Softwtech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate full-stack software development company based in Raipur, Chhattisgarh.<br />
            Dedicated to crafting innovative, scalable, and user-centric digital solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Team / Visual Section - Professional Images Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/software-engineers-colaborating-photo-icom-desktop-445%20x%20256.jpg"
                alt="Diverse software development team collaborating"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://www.shutterstock.com/image-photo/three-startup-entrepreneurs-work-on-260nw-1753358015.jpg"
                alt="Indian software team working together"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://www.shutterstock.com/image-photo/asian-indian-developer-team-discussion-260nw-2486712615.jpg"
                alt="Professional developers discussing project"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://png.pngtree.com/thumb_back/fw800/background/20250408/pngtree-software-developer-coding-on-laptop-in-modern-office-image_17175654.jpg"
                alt="Software developer coding on laptop in modern setup"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <p className="text-center mt-12 text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of skilled developers, designers, and innovators work tirelessly to turn ideas into reality — delivering high-quality apps, websites, and custom software solutions.
          </p>
        </div>
      </section>

      {/* Existing AboutSection (if you have detailed content there) */}
      <AboutSection />
    </>
  );
}