"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [IdBanner, setIdBanner] = useState(1); // Estado para el Id del banner
  const [direction, setDirection] = useState<"left" | "right" | null>(null); // Estado para la dirección del movimiento

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.8,
      }
    );

    const element = document.getElementById("hero-banner");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Autoavance cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement(); // Activar botón derecho automáticamente
    }, 10000);

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, [IdBanner]); // Ejecutar en cada cambio de IdBanner

  const handleDecrement = () => {
    setDirection("left"); // Dirección de salida hacia la izquierda
    setTimeout(() => {
      setIdBanner((prev) => (prev === 1 ? 3 : prev - 1)); // Si es 1, pasa a 3
      setDirection(null); // Resetear dirección
    }, 300); // Tiempo de animación
  };

  const handleIncrement = () => {
    setDirection("right"); // Dirección de salida hacia la derecha
    setTimeout(() => {
      setIdBanner((prev) => (prev === 3 ? 1 : prev + 1)); // Si es 3, pasa a 1
      setDirection(null); // Resetear dirección
    }, 300); // Tiempo de animación
  };

  const getAnimationClass = (currentId: number) => {
    const isLeftJump = direction === "left" && IdBanner === 1 && currentId === 3;
    const isRightJump = direction === "right" && IdBanner === 3 && currentId === 1;

    if (isLeftJump) return "animate-move-in-left"; // Animación especial para saltar de 1 a 3
    if (isRightJump) return "animate-move-in-right"; // Animación especial para saltar de 3 a 1
    if (direction === "left" && currentId === IdBanner) return "animate-move-out-right";
    if (direction === "right" && currentId === IdBanner) return "animate-move-out-left";
    if (direction === "left" && currentId === IdBanner - 1) return "animate-move-in-left";
    if (direction === "right" && currentId === IdBanner + 1) return "animate-move-in-right";
    if (currentId === IdBanner) return "animate-move-in";
    return "hidden";
  };

  return (
<section
  id="hero-banner"
  className="relative h-screen overflow-hidden"
  style={{ backgroundColor: "#EFF6FF" }}
>
  <div
    id="banner-container"
    className="p-8 absolute inset-0 flex justify-between items-center"
    style={{
      background: "radial-gradient(circle, #3001C1, #140140)",
      maskImage: "url(/Assets/mask00.png)",
      WebkitMaskImage: "url(/Assets/mask00.png)",
      maskSize: "cover",
      WebkitMaskSize: "cover",
    }}
  >
    {/* Botón izquierdo */}
    <button
      onClick={handleDecrement}
      className="z-10 text-white p-4 bg-black rounded-full hover:bg-gray-800 transition duration-200"
    >
      <FaChevronLeft className="w-6 h-6" />
    </button>

    {/* Imágenes de IdBanner 1 */}
    {IdBanner === 1 && (
      <div
        className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(1)}`}
      >
        {/* Imágenes específicas para IdBanner 1 */}
        <Image
          src="/Assets/000.webp"
          alt="Fondo de Hero Banner"
          fill // Reemplaza layout="fill" con la propiedad 'fill'
          style={{
            objectFit: "contain", // Reemplaza objectFit="contain"
            transform: isVisible
              ? "translateY(8vh) scaleY(1.15) scaleX(-1.15)"
              : "translateY(10vh) scaleY(1.1) scaleX(-1.1)",
            transition: "transform 1s ease-in-out",
          }}
          className="absolute inset-0"
        />
        <Image
          src="/Assets/001.webp"
          alt="Segunda imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[17.5vh] translate-x-[18vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/002.webp"
          alt="Tercera imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[-14vh] translate-x-[24vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/003.webp"
          alt="Cuarta imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[14vh] translate-x-[-24vw] scale-y-[0.3] scale-x-[0.3] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.35] scale-x-[0.35]" : ""
          }`}
        />
      </div>
    )}

    {/* Imágenes de IdBanner 2 */}
    {IdBanner === 2 && (
      <div
        className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(2)}`}
      >
        {/* Imágenes específicas para IdBanner 2 */}
        <Image
          src="/Assets/004.webp"
          alt="Fondo de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[10vh] scale-y-[1.1] scale-x-[-1.1] transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-y-[8vh] scale-y-[1.15] scale-x-[-1.15]" : ""
          }`}
        />
        <Image
          src="/Assets/001.webp"
          alt="Segunda imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[17.5vh] translate-x-[18vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/002.webp"
          alt="Tercera imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[-14vh] translate-x-[24vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/003.webp"
          alt="Cuarta imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[14vh] translate-x-[-24vw] scale-y-[0.3] scale-x-[0.3] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.35] scale-x-[0.35]" : ""
          }`}
        />
      </div>
    )}

    {/* Imágenes de IdBanner 3 */}
    {IdBanner === 3 && (
      <div
        className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(3)}`}
      >
        {/* Imágenes específicas para IdBanner 3 */}
        <Image
          src="/Assets/005.webp"
          alt="Fondo de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[10vh] scale-y-[1.1] scale-x-[-1.1] transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-y-[8vh] scale-y-[1.15] scale-x-[-1.15]" : ""
          }`}
        />
        <Image
          src="/Assets/001.webp"
          alt="Segunda imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[17.5vh] translate-x-[18vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/002.webp"
          alt="Tercera imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[-14vh] translate-x-[24vw] scale-y-[0.2] scale-x-[0.2] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.25] scale-x-[0.25]" : ""
          }`}
        />
        <Image
          src="/Assets/003.webp"
          alt="Cuarta imagen de Hero Banner"
          layout="fill"
          objectFit="contain"
          className={`absolute inset-0 transform translate-y-[14vh] translate-x-[-24vw] scale-y-[0.3] scale-x-[0.3] transition-transform duration-1000 ease-in-out ${
            isVisible ? "scale-y-[0.35] scale-x-[0.35]" : ""
          }`}
        />
      </div>
    )}

    {/* Botón derecho */}
    <button
      onClick={handleIncrement}
      className="z-10 text-white p-4 bg-black rounded-full hover:bg-gray-800 transition duration-200"
    >
      <FaChevronRight className="w-6 h-6" />
    </button>
  </div>

  {/* Marcador debajo */}
  <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
    {[1, 2, 3].map((id) => (
      <div
        key={id}
        className={`w-3 h-3 rounded-full ${
          id === IdBanner ? "bg-gray-400" : "bg-white"
        } transition-colors duration-300`}
      />
    ))}
  </div>

  {/* Estilos de movimiento */}
  <style jsx>{`
    .animate-move-out-right {
      transform: translateX(100%);
      opacity: 0;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .animate-move-out-left {
      transform: translateX(-100%);
      opacity: 0;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .animate-move-in-right {
      transform: translateX(100%);
      opacity: 1;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .animate-move-in-left {
      transform: translateX(-100%);
      opacity: 1;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .animate-move-in {
      transform: translateX(0);
      opacity: 1;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .hidden {
      display: none;
    }
  `}</style>
</section>

  );
};

export default HeroBanner;
