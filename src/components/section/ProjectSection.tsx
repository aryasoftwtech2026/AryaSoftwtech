import GymImg from '@/public/image/gy.webp';
import EventImg from '@/public/image/event.webp';
import EcommerceImg from '@/public/image/e-commerce.png';
import MatrimonyImg from '@/public/image/matrimony.jpg';

export default function ProjectSection() {
  const projects = [
    {
      title: 'Gym Management System',
      description:
        'Complete solution for gym owners and members. Features: Member registration, Attendance tracking (RFID/QR code), Class scheduling, Billing & payment reminders, Mobile app booking, Performance analytics.',
      image: GymImg,
    },
    {
      title: 'Event Booking System',
      description:
        'Easy platform for event organizers. Features: Multiple event types support, Customizable registration forms, Real-time seat booking, Payment integration, Attendee reminders, Analytics dashboard.',
      image: EventImg,
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured website/app for online shopping. Features: Product catalog, Cart management, Secure checkout, AI-based product recommendations, Inventory tracking, Multiple payment options, User reviews.',
      image: EcommerceImg,
    },
    {
      title: 'Matrimonial Website',
      description:
        'Secure platform for matrimonial matchmaking. Features: Detailed profile creation, Advanced search filters (religion, caste, location, etc.), Privacy controls, Chat & interest sending, Verified profiles.',
      image: MatrimonyImg,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Projects
        </h2>

        {/* 
           UPDATED GRID CLASSES:
           1. grid-cols-1: Mobile (1 box per line)
           2. md:grid-cols-2: Tablet (2 boxes per line)
           3. xl:grid-cols-4: Large Screen (4 boxes in one line)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Box */}
              <div className="h-48 overflow-hidden bg-gray-200 relative">
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5 pt-0 mt-auto">
                <a
                  href="#"
                  className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}