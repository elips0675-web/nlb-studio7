import React, { useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { servicesData } from '../../data/service-details';
import { ArrowRight, Check, Plus, Minus, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-2 z-10"
        onClick={onClick}>
          <ChevronRight className="w-6 h-6 text-white" />
      </button>
    );
  }
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-2 z-10"
        onClick={onClick}>
          <ChevronLeft className="w-6 h-6 text-white" />
      </button>
    );
  }

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

export default function PrintingServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];
  const fileInputRef = useRef(null);

  const [quantity, setQuantity] = useState(10);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [options, setOptions] = useState(() => {
    const defaultOptions = {};
    if (service && service.calculator) {
      service.calculator.options.forEach(opt => {
        defaultOptions[opt.id] = opt.default;
      });
    }
    return defaultOptions;
  });

  const totalPrice = useMemo(() => {
    if (!service || !service.calculator) return '0.00';

    let basePrice = service.calculator.pricing.base;
    let multiplier = 1;

    for (const [key, value] of Object.entries(options)) {
      const pricingConfig = service.calculator.pricing[key];
      if (pricingConfig && pricingConfig[value]) {
        multiplier *= pricingConfig[value];
      }
    }
    
    const finalPrice = basePrice * multiplier * quantity;
    return finalPrice.toFixed(2);
  }, [quantity, options, service]);
  
  const handleOrder = () => {
    const queryParams = new URLSearchParams({
      serviceTitle: service.title,
      quantity: quantity.toString(),
      totalPrice: totalPrice,
      options: JSON.stringify(options),
    }).toString();

    navigate(`/printing-services/order-confirmation?${queryParams}`);
  };

  if (!service) {
    return <div className="flex items-center justify-center h-screen">Услуга не найдена</div>;
  }

  const Icon = service.icon;

  const handleOptionChange = (optionId, value) => {
    setOptions(prev => ({ ...prev, [optionId]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className={`pt-32 pb-16 relative overflow-hidden bg-gradient-to-br ${service.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-12 h-12"/>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl sm:text-2xl opacity-90">{service.subtitle}</p>
            </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Подробное описание</h2>
            <div className="prose prose-lg text-gray-600 max-w-none mb-12">
              {service.fullDescription.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
             <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative shadow-2xl rounded-2xl">
                <Slider {...sliderSettings}>
                    {service.images.map((img, i) => (
                        <div key={i}>
                            <ImageWithFallback src={img} alt={`${service.title} image ${i+1}`} className="w-full h-80 object-cover rounded-2xl" />
                        </div>
                    ))}
                </Slider>
            </motion.div>
          </div>
          {service.calculator && (
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-28 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Калькулятор стоимости</h3>
                
                {/* Options */}
                <div className="space-y-4 mb-6">
                  {service.calculator.options.map(opt => (
                    <div key={opt.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{opt.name}</label>
                      {opt.type === 'radio' && (
                        <div className="flex flex-wrap gap-2">
                          {opt.values.map(val => (
                            <button key={val} onClick={() => handleOptionChange(opt.id, val)} className={`px-4 py-2 rounded-lg text-sm transition ${options[opt.id] === val ? `bg-gradient-to-r ${service.color} text-white shadow` : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
                              {val}
                            </button>
                          ))}
                        </div>
                      )}
                      {opt.type === 'select' && (
                        <select onChange={(e) => handleOptionChange(opt.id, e.target.value)} value={options[opt.id]} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                          {opt.values.map(val => <option key={val}>{val}</option>)}
                        </select>
                      )}
                    </div>
                  ))}
                </div>

                {/* Image Upload */}
                {service.allowImageUpload && (
                  <div className="mb-6">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Ваш дизайн</label>
                     <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
                     <button 
                        onClick={() => fileInputRef.current.click()}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
                         <Upload className="w-5 h-5"/>
                         <span>{uploadedImage ? "Изменить фото" : "Загрузить фото"}</span>
                     </button>
                     {uploadedImage && <img src={uploadedImage} alt="Uploaded design" className="mt-4 rounded-lg shadow-md"/>}
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{service.id === 'large-format' ? 'Площадь (м²)': 'Количество'}</label>
                  <div className="flex items-center">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><Minus className="w-4 h-4"/></button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} className="w-20 text-center border-0 bg-transparent text-lg font-semibold focus:ring-0"/>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><Plus className="w-4 h-4"/></button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Примерная стоимость</p>
                  <p className="text-4xl font-bold text-gray-900">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{totalPrice}₽</span>
                  </p>
                </div>

                <button onClick={handleOrder} className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2 group`}>
                  Заказать
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
