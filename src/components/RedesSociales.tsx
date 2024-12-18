import { FC } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const RedesSociales: FC = () => {
  return (
    <section className="bg-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Síguenos en nuestras redes sociales</h2>
        
        <div className="flex justify-center space-x-6">
          <Link href="https://www.facebook.com" passHref>
            <div className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition" aria-label="Facebook">
              <FaFacebook className="text-white text-2xl" />
            </div>
          </Link>
          
          <Link href="https://www.twitter.com" passHref>
            <div className="bg-blue-400 p-4 rounded-full hover:bg-blue-300 transition" aria-label="Twitter">
              <FaTwitter className="text-white text-2xl" />
            </div>
          </Link>
          
          <Link href="https://www.instagram.com" passHref>
            <div className="bg-pink-600 p-4 rounded-full hover:bg-pink-500 transition" aria-label="Instagram">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </Link>
          
          <Link href="https://www.linkedin.com" passHref>
            <div className="bg-blue-700 p-4 rounded-full hover:bg-blue-600 transition" aria-label="LinkedIn">
              <FaLinkedin className="text-white text-2xl" />
            </div>
          </Link>
          
          <Link href="https://www.youtube.com" passHref>
            <div className="bg-red-600 p-4 rounded-full hover:bg-red-500 transition" aria-label="YouTube">
              <FaYoutube className="text-white text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RedesSociales;
