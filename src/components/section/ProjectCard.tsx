import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[]; // 2 images ka array
};

export default function ProjectCard({ title, description, images }: ProjectCardProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image src={images[0]} alt={`${title} Screenshot 1`} fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image src={images[1]} alt={`${title} Screenshot 2`} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}