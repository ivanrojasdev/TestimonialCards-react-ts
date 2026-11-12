import type { Testimonial } from '@/types/testimonial';

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  const { image, name, country, jobTitle, company, quote } = testimonial;

  return (
    <article className="laptop:flex laptop:w-full w-80 overflow-hidden rounded-md shadow-md 2xl:m-auto 2xl:w-11/12">
      <img
        src={`/images/testimonials/${image}.png`}
        className="h-80 w-80 object-cover"
        alt={`Foto de ${name}`}
      />
      <div className="content-center bg-white px-7 py-10 xl:px-10">
        <h3 className="mb-3.5 text-center text-xl lg:text-2xl">
          <strong>{name}</strong> en {country}
        </h3>
        <p className="mb-7 text-center text-xl lg:text-2xl">
          {jobTitle} en <strong>{company}</strong>
        </p>
        <p className="text-lg">{quote}</p>
      </div>
    </article>
  );
}
