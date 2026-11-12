import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials.ts';

export default function App() {
  return (
    <main>
      <section className="bg-gray-50 py-24">
        <div className="mx-auto w-[90%] max-w-7xl 2xl:w-full">
          <h2 className="mb-10 text-center text-[32px] leading-[1.1] font-bold text-indigo-950 lg:mx-auto lg:text-4xl xl:mb-14">
            Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
          </h2>
          <div className="mx-auto grid justify-center gap-6 md:gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
