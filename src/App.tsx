import React, { useState, useEffect } from 'react';
import { Leaf, Sun, Droplets, Wind, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'vision', 'productos', 'valores', 'galeria', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Reemplazamos el texto por el logo */}
            <img src="/Logo.png" alt="Logo" className="h-16 w-auto rounded-full"/>
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}> {isMenuOpen ? <X /> : <Menu />}</button>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              {['inicio', 'servicios', 'productos', 'valores', 'galeria', 'visión'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${
                    activeSection === item 
                      ? 'text-green-600 font-semibold' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))} 
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
          alt="Bosque natural"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Natu Style</h1>
          <p className="text-xl md:text-2xl text-green-50 mb-8">Que tu estilo resuene en todo el planeta</p>
          <button 
            onClick={() => scrollToSection('servicios')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Descubre más
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Venta de Productos Artesanales"
              description="A través de tienda física, ecommerce y plataformas de artesanía."
            />
            <FeatureCard 
              icon={<Sun className="w-8 h-8 text-green-600" />}
              title="Venta al por Mayor"
              description="Ofrecemos productos a tiendas minoristas o mayoristas."
            />
            <FeatureCard 
              icon={<Droplets className="w-8 h-8 text-green-600" />}
              title="Personalización de Productos"
              description="Nuestros clientes pueden personalizar sus productos con opciones de colores, materiales, diseños o grabados."
            />
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">
            Línea de Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              image="/bolso.jpeg"
              title="Bolsos"
              description="Creados con materiales sostenibles y técnicas tradicionales"
            />
            <ProductCard
              image="/mochila.webp"
              title="Mochilas"
              description="Comodidad, estilo y tradición en un solo accesorio"
            />
            <ProductCard
              image="/sombrero.jpeg"
              title="Sombreros"
              description="Elegancia y protección con un toque artesanal"
            />
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValorCard
              title="Respeto"
              description="Fomentamos un ambiente de trabajo donde se valora la opinión y el esfuerzo de cada 
              colaborador, respetando las tradiciones artesanales y asegurando precios justos para los artesanos."
            />
            <ValorCard
              title="Tolerancia"
              description="Aceptamos y valoramos la diversidad de ideas, culturas y formas de trabajo dentro 
              de la empresa, siendo inclusivos en la contratación y en la colaboración con diferentes comunidades 
              artesanales."
            />
            <ValorCard
              title="Responsabilidad"
              description="Cumplimos con los compromisos con clientes, proveedores y colaboradores, garantizando 
              productos de calidad y manteniendo una gestión eficiente de recursos."
            />
            <ValorCard
              title="Responsabilidad Ambiental"
              description="Utilizamos materiales sostenibles o reciclados en la fabricación de los bolsos, para 
              así implementar procesos de producción que minimicen el impacto ambiental, reduciendo desechos y 
              consumo energético."
            />
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">
            Nuestra Galería
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "sombreroG.jpeg",
              "bolso1.jpeg",
              "bolso2.jpeg",
              "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&q=80",
              "bolso3.jpeg"
            ].map((img, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden aspect-square rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Nuestra Visión</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Ser reconocido en el mercado a nivel nacional en el 2026 por nuestra comercialización y fabricación de nuestros productos ofreciendo una calidad excepcional y sostenible respaldados por una identidad de marca sólida y coherente.
          </p>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 ml-10">
            {/*<img 
              src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80"
              alt="Naturaleza"
              className="rounded-lg shadow-xl"
            />*/}
            <video 
            src="/video1.mp4"
            className="w-64 max-w-md h-auto rounded-lg shadow-xl"
            controls autoPlay loop muted playsInline/>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700">
            En Natu style somos una empresa dedicada a la fabricación y comercialización de productos artesanales con materiales reciclables, priorizando la conservación ambiental y responsabilidad social. En Natu style fomentamos la innovación para satisfacer las necesidades del consumidor y tener así un impacto positivo en la sociedad.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition-all transform hover:scale-105">
              Conoce nuestra historia
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Natu Style</h3>
            <p className="text-green-200">
            Que Tu Estilo Resuene en todo el Planeta
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-green-200">
              Email: Yaritza_mejia@soy.sena.edu.co<br />
              Tel: (+57) 302 2016637
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-green-50 p-6 rounded-xl text-center transition-all transform hover:scale-105">
      <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductCard({ image, title, description }) {
  return (
    <div className="bg-green-50 rounded-xl overflow-hidden shadow-lg transition-all transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ValorCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-green-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;