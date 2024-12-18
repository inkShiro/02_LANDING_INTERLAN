import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sección de enlaces */}
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <Link href="/" className="text-white hover:text-gray-400 px-4 py-2">
            Inicio
          </Link>
          <Link href="/plans" className="text-white hover:text-gray-400 px-4 py-2">
            Planes
          </Link>
          <Link href="/coverage" className="text-white hover:text-gray-400 px-4 py-2">
            Cobertura
          </Link>
          <Link href="/payment" className="text-white hover:text-gray-400 px-4 py-2">
            Formas de pago
          </Link>
        </div>

        {/* Sección de redes sociales */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <Link href="https://facebook.com" target="_blank" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>

        {/* Sección de derechos de autor */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
