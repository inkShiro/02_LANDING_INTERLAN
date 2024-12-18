import { FC, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  date: string;
  rating: number; // Calificación de estrellas
}

const testimonios: Testimonial[] = [
  {
    name: 'Juan Pérez',
    role: 'Estudiante de Matemáticas',
    text: '¡Esta plataforma ha cambiado mi forma de aprender! Los ejercicios son dinámicos y me ayudan a reforzar los conceptos que más me cuestan.',
    image: '/images/juan.jpg',
    date: '12 de diciembre de 2024',
    rating: 5,
  },
  {
    name: 'Ana García',
    role: 'Profesora de Física',
    text: 'Los recursos interactivos de esta plataforma me han permitido mejorar la comprensión de mis estudiantes. La flexibilidad y personalización son clave.',
    image: '/images/ana.jpg',
    date: '11 de diciembre de 2024',
    rating: 4,
  },
  {
    name: 'Carlos Méndez',
    role: 'Empresario',
    text: 'Utilizo esta plataforma para capacitar a mis empleados. Es fácil de usar y ofrece un enfoque práctico que se adapta a sus necesidades.',
    image: '/images/carlos.jpg',
    date: '10 de diciembre de 2024',
    rating: 4,
  },
  {
    name: 'Laura Sánchez',
    role: 'Estudiante de Psicología',
    text: 'Excelente plataforma. Me ha permitido mejorar mi rendimiento académico de manera significativa.',
    image: '/images/laura.jpg',
    date: '9 de diciembre de 2024',
    rating: 5,
  },
  {
    name: 'José López',
    role: 'Profesor de Historia',
    text: 'Las herramientas son increíbles, especialmente los ejercicios interactivos. Me han ayudado a explicar conceptos de forma más clara.',
    image: '/images/jose.jpg',
    date: '8 de diciembre de 2024',
    rating: 5,
  },
];

const Testimonios: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 3) % testimonios.length); // Cambiado a 3
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonios.length - 3 : prevIndex - 3 // Cambiado a 3
    );
  };

  const visibleTestimonials = testimonios.slice(currentTestimonial, currentTestimonial + 3); // Obtener 3 testimonios

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Botones de navegación */}
        <div className="flex justify-center mb-8">
          <button
            onClick={prevTestimonial}
            className="bg-gray-800 text-white p-2 rounded-full mr-4 hover:bg-gray-700 transition"
          >
            &lt;
          </button>

          <h2 className="text-3xl font-bold mb-8 text-gray-800">TESTIMONIOS</h2>

          <button
            onClick={nextTestimonial}
            className="bg-gray-800 text-white p-2 rounded-full ml-4 hover:bg-gray-700 transition"
          >
            &gt;
          </button>
        </div>

        {/* Carrusel de testimonios */}
        <div className="flex space-x-4 justify-center">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-80 flex flex-col items-center text-center">
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              /> */}
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-sm text-gray-400 mb-2">{testimonial.date}</p>

              {/* Ranking de estrellas */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.27l-3.763 2.293 1.455-4.961-3.867-3.021 4.923-.03L10 0l1.455 4.548 4.923.03-3.867 3.021 1.455 4.961L10 15.27z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
