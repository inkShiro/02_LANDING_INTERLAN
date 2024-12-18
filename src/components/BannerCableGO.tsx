import Link from 'next/link';

const BannerCableGO = () => {
  return (
    <section className="bg-blue-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Imagen del banner (opcional) */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          {/* <img
            src="/path-to-your-image.jpg"
            alt="CableGO"
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
        </div>
  
        {/* Texto y llamada a la acción */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡La mejor conexión para tu hogar con CableGO!
          </h2>
          <p className="text-lg mb-6">
            Disfruta de servicios de cable de alta calidad, con opciones flexibles y accesibles para todos los hogares.
            ¡Conéctate hoy mismo y vive la experiencia CableGO!
          </p>
          <Link
            href="/get-started"
            className="bg-yellow-500 text-white py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition"
          >
            Empieza ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerCableGO;
