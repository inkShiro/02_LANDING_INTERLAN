import Image from 'next/image';

const Plans = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Nuestras Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-24">
          {['016.webp', '017.webp', '018.webp', '019.webp'].map((image, index) => (
            <div key={index} className="relative">
              <div className="relative group">
                {/* Contenedor de la imagen con overflow-hidden para recortar */}
                <div className="w-full h-[calc(100%_-_140px)] overflow-hidden relative">
                  <Image
                    src={`/Assets/${image}`}
                    alt={`Imagen ${image}`}
                    width={800}
                    height={300}
                    className="w-full h-[calc(100%_-_140px)] object-cover shadow-lg rounded-3xl hover:shadow-2xl transition-all"
                    objectFit="contain"
                  />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
