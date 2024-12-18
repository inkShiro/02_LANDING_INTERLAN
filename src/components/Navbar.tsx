import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-32">
        {/* Logo en el lado izquierdo */}
        <div className="flex items-center">
          <h1>Logo</h1>
        </div>

        {/* Enlaces y botones visibles en pantallas grandes */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Enlaces de navegación */}
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-gray-400">
                Planes+
              </Link>
            </li>
            <li>
              <Link href="/coverage" className="hover:text-gray-400">
                Cobertura
              </Link>
            </li>
            <li>
              <Link href="/payment" className="hover:text-gray-400">
                Formas de pago
              </Link>
            </li>
          </ul>

          {/* Botones circulares y el botón rectangular */}
          <div className="flex space-x-4 items-center">
            <button className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-blue-400">
              1
            </button>
            <button className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-green-400">
              2
            </button>
            <button className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-red-400">
              3
            </button>
            <Link href="/my-plan" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400">
              Mi plan
            </Link>
          </div>
        </div>

        {/* Menú para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <Link href="/my-plan" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400">
            Mi plan
          </Link>
          <button onClick={toggleMenu} className="text-white ml-4">
            {/* Icono de 3 puntos */}
            <span className="text-2xl">⋮</span>
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-700 p-4 mt-4">
          <ul className="text-white">
            <li>
              <Link href="/" className="block hover:text-gray-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/plans" className="block hover:text-gray-400">
                Planes+
              </Link>
            </li>
            <li>
              <Link href="/coverage" className="block hover:text-gray-400">
                Cobertura
              </Link>
            </li>
            <li>
              <Link href="/payment" className="block hover:text-gray-400">
                Formas de pago
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;