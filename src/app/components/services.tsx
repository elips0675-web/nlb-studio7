import { motion } from 'motion/react';
import { Wifi, Coffee, Monitor, Users, Printer, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const services = [
  { icon: Wifi, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех зонах' },
  { icon: Coffee, title: 'Кафе и зоны отдыха', description: 'Комфортные пространства для работы' },
  { icon: Monitor, title: 'Компьютерные залы', description: 'Современное оборудование для работы' },
  { icon: Users, title: 'Залы для мероприятий', description: 'Конференц-залы и аудитории' },
  { icon: Printer, title: 'Печать и сканирование', description: 'Копировальные услуги' },
  { icon: Clock, title: 'Гибкий график', description: 'Работаем с 8:00 до 22:00' },
];

export function Services() {
  return (
    <section id="услуги" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680534240478-08c865dc608f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzc1MDU2MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Услуги библиотеки"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Small image overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728450136822-f0a58df17825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1MDMxMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Цифровые технологии"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative blob */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full text-sm mb-4 shadow-sm">
                Наши услуги
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Комфорт и технологии для вашего обучения
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Мы создали современное пространство, где каждый найдёт идеальные условия 
                для работы, учёбы и творчества
              </p>
            </motion.div>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <Link to="/services">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-shadow">
                  Узнать все услуги
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}