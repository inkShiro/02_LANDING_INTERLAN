const Advantages = () => {
    return (
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            ¿Por qué elegir nuestra plataforma?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Educación personalizada
              </h3>
              <p className="text-lg text-gray-600">
                Adapta los contenidos a tus necesidades y aprende a tu propio ritmo, con ejercicios que refuerzan tus conocimientos.
              </p>
            </div>
            
            {/* Ventaja 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contenido accesible
              </h3>
              <p className="text-lg text-gray-600">
                Accede a una amplia variedad de materiales en cualquier momento y desde cualquier dispositivo.
              </p>
            </div>
            
            {/* Ventaja 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Resultados medibles
              </h3>
              <p className="text-lg text-gray-600">
                Mide tu progreso con métricas personalizadas para saber en qué áreas mejorar y qué ejercicios te funcionan mejor.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Advantages;