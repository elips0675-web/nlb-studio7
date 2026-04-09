
import React, { useCallback } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { catalogServices } from '../data/printing-services';

const ServicesSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">
            Каталог печатных услуг
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {catalogServices.map((service, index) => {
                const Icon = service.icon;
                return(
                <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={service.id}>
                  <Link to={`/printing-services/${service.id}`} className="block group">
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg shadow-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 pt-24 pb-6 px-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-100">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )})}
            </div>
          </div>

          <button 
            onClick={scrollPrev} 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 ml-2"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={scrollNext} 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 mr-2"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
        >
            <Link to="/printing-services">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-2xl transition-shadow text-lg font-semibold">
                Перейти в каталог
            </button>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSlider;
