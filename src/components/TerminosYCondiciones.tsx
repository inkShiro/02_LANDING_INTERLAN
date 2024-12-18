import { FC } from 'react';

const TerminosYCondiciones: FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Términos y Condiciones</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            Antes de utilizar nuestros servicios, te pedimos que leas cuidadosamente estos Términos y Condiciones. Al acceder o utilizar nuestro sitio web, aceptas cumplir con los términos y condiciones establecidos a continuación.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">1. Aceptación de los términos</h3>
          <p className="text-lg mb-6">
            Al acceder o utilizar este sitio web, aceptas estar sujeto a los Términos y Condiciones, así como a todas las leyes y regulaciones aplicables.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">2. Uso del sitio web</h3>
          <p className="text-lg mb-6">
            Estás de acuerdo en usar el sitio web de manera responsable y no utilizarlo para fines ilegales o no autorizados. No podrás realizar actividades que infrinjan los derechos de propiedad intelectual de la empresa.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Privacidad</h3>
          <p className="text-lg mb-6">
            Tu privacidad es importante para nosotros. Te invitamos a revisar nuestra <span className="text-blue-600 underline">Política de Privacidad</span> para obtener más detalles sobre cómo recopilamos y utilizamos tus datos personales.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Modificaciones de los Términos</h3>
          <p className="text-lg mb-6">
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en esta página y será efectivo inmediatamente después de su publicación.
          </p>

          <h3 className="text-2xl font-semibold mb-4">5. Contacto</h3>
          <p className="text-lg mb-6">
            Si tienes alguna pregunta sobre estos Términos y Condiciones, no dudes en ponerte en contacto con nosotros a través de nuestro formulario de contacto.
          </p>
          
          <div className="mt-8">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition">
              Acepto los términos
            </button>
            <button className="ml-4 text-blue-600 py-2 px-6 border border-blue-600 rounded-lg hover:bg-blue-100 transition">
              No acepto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminosYCondiciones;
