import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¡Únete a nuestra plataforma hoy mismo!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Aprovecha nuestras ofertas exclusivas y empieza a aprender con contenido personalizado, diseñado para tu éxito.
        </p>
        <div>
          <Link
            href="/get-started"
            className="bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Comienza ahora
          </Link>
        </div>
      </div>

      {/* Capa de fondo que hace que el texto se resalte */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Banner;
