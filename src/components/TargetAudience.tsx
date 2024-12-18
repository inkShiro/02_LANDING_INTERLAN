import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importa los íconos de react-icons

const TargetAudience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { name: 'Gamers', image: '/Assets/006.webp', bgPosition: 'center' },
    { name: 'Escolares', image: '/Assets/007.webp', bgPosition: 'center' },
    { name: 'Casas', image: '/Assets/009.webp', bgPosition: 'top 30%' },
    { name: 'Negocios', image: '/Assets/008.webp', bgPosition: '60%' }
  ];

  // Cambiar la tarjeta cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [cards.length]); // Agregar cards.length como dependenci

  // Función para manejar el cambio manual de tarjetas
  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Funciones para la navegación
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center relative px-12">
        {/* Botones de navegación con react-icons */}
        <button
          onClick={handlePrevious}
          className="ml-16 absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-8 text-black">DIRIGIDO PARA</h2>

        <button
          onClick={handleNext}
          className="mr-16 absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto place-items-center max-w-7xl px-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center h-64 w-52 pt-8 transform transition-all duration-500 ease-in-out ${
                index === currentIndex ? 'scale-110' : 'scale-100'
              } cursor-pointer`}
              onClick={() => handleCardClick(index)} // Hacer clic para activar tarjeta
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: card.bgPosition, // Posición configurada
              }}
            >
              <div className="flex-grow"></div> {/* Espacio flexible para empujar el texto hacia abajo */}
              <h3 className="text-2xl font-semibold mb-4 transform rotate-30 text-white">
                {card.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Marcador de puntos para el carrusel */}
        <div className="absolute bottom-[-32px] left-0 right-0 flex justify-center items-center space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-400' : 'bg-white'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
