import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, Droplet, Dumbbell, Wifi, Clock, Users, ArrowRight, Check, Calendar, MapPin, Phone, Mail, Star, Plus } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const servicesData: Record<string, any> = {
  'observation-deck': {
    id: 'observation-deck',
    icon: Eye,
    title: 'Обзорная площадка',
    subtitle: 'Панорамный вид на город',
    description: 'Посетите нашу обзорную площадку на 10-м этаже с потрясающим видом на город. Идеальное место для вдохновения и отдыха.',
    fullDescription: 'Обзорная площадка Библиотеки 2026 — это не просто смотровая площадка, а настоящее пространство для вдохновения и отдыха. Панорамное остекление позволяет наслаждаться видами города в любую погоду. На территории площадки расположено уютное кафе с террасой, где можно выпить кофе или чай, наслаждаясь захватывающими видами.\n\nПлощадка оборудована удобными зонами отдыха, бесплатным Wi-Fi и специальными местами для фотосессий. Здесь регулярно проводятся мастер-классы по фотографии, встречи поэтов и писателей, а также романтические мероприятия на закате.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    images: [
      'https://images.unsplash.com/photo-1721031711599-44c286fda0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHBhbm9yYW1pYyUyMHZpZXd8ZW58MXx8fHwxNzc1MTA2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764654371856-376dc6c13897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNlcnZhdGlvbiUyMGRlY2slMjB0ZXJyYWNlJTIwdXJiYW58ZW58MXx8fHwxNzc1MTA2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1626279484248-59d4cc4ab19f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJ2FmZSUyMHRlcnJhY2V8ZW58MXx8fHwxNzc1MTA2ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: MapPin, title: 'Высота 40 метров', description: '10-й этаж здания библиотеки' },
      { icon: Eye, title: 'Панорамное остекление 360°', description: 'Обзор всего города без препятствий' },
      { icon: Users, title: 'Зона для фотосессий', description: 'Специально оборудованные места' },
      { icon: Wifi, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет' },
      { icon: Clock, title: 'Кафе с террасой', description: 'Напитки и лёгкие закуски' },
      { icon: Star, title: 'Мероприятия', description: 'Регулярные культурные события' },
    ],
    pricing: [
      { name: 'Для читателей библиотеки', price: 'Бесплатно', features: ['Свободный доступ', 'Wi-Fi', 'Зона отдыха'] },
      { name: 'Для посетителей', price: '200₽', features: ['1 посещение', 'Wi-Fi', 'Зона отдыха', 'Скидка в кафе 10%'] },
      { name: 'Фотосессия', price: '1500₽/час', features: ['Аренда площадки', 'Доступ ко всем зонам', 'Помощь в организации'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '10:00 - 22:00' },
      { day: 'Суббота - Воскресенье', time: '09:00 - 23:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-67',
      email: 'observation@library2026.ru',
    },
  },
  'sauna': {
    id: 'sauna',
    icon: Droplet,
    title: 'Сауна',
    subtitle: 'Релаксация и восстановление',
    description: 'Современный спа-комплекс с финской сауной, хаммамом и зоной отдыха. Идеально после долгого рабочего дня.',
    fullDescription: 'Наш спа-комплекс оснащён всем необходимым для полноценного отдыха и восстановления. Финская сауна с температурой до 90°C помогает очистить организм и укрепить иммунитет. Турецкий хаммам с влажным паром идеально подходит для глубокого очищения кожи и расслабления мышц.\n\nПросторная зона отдыха с удобными шезлонгами, современные душевые кабины с тропическим душем, ароматерапия и возможность заказа массажа — всё это создаёт атмосферу настоящего спа-курорта в центре города. Мы используем только натуральные масла и ароматы.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    images: [
      'https://images.unsplash.com/photo-1757940113920-69e3686438d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXVuYSUyMGludGVyaW9yfGVufDF8fHx8MTc3NTEwNjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1723641349153-1e81030ab2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwcG9vbHxlbnwxfHx8fDE3NzUxMDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBzdGVhbSUyMHJvb20lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzUxMDY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Droplet, title: 'Финская сауна', description: 'Температура до 90°C' },
      { icon: Droplet, title: 'Турецкий хаммам', description: 'Влажный пар и ароматерапия' },
      { icon: Users, title: 'Зона отдыха', description: 'Комфортные шезлонги' },
      { icon: Check, title: 'Душевые кабины', description: 'С тропическим душем' },
      { icon: Clock, title: 'Массаж', description: 'По предварительной записи' },
      { icon: Star, title: 'Ароматерапия', description: 'Натуральные масла' },
    ],
    pricing: [
      { name: '1 час', price: '500₽', features: ['Сауна или хаммам', 'Душевые', 'Зона отдыха', 'Полотенца'] },
      { name: '2 часа', price: '900₽', features: ['Сауна + хаммам', 'Душевые', 'Зона отдыха', 'Полотенца', 'Чай'] },
      { name: 'Абонемент 10 посещений', price: '4000₽', features: ['1 час за посещение', 'Скидка 20%', 'Приоритетная запись', '3 месяца'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '14:00 - 23:00' },
      { day: 'Суббота - Воскресенье', time: '10:00 - 23:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-68',
      email: 'spa@library2026.ru',
    },
  },
  'gym': {
    id: 'gym',
    icon: Dumbbell,
    title: 'Спортзал',
    subtitle: 'Фитнес и здоровье',
    description: 'Полностью оборудованный тренажёрный зал с современным оборудованием и профессиональными тренерами.',
    fullDescription: 'Наш тренажёрный зал оснащён оборудованием ведущих мировых производителей. Просторная кардио-зона с беговыми дорожками, эллипсами и велотренажёрами. Силовая зона с полным набором тренажёров для всех групп мышц и свободными весами.\n\nОтдельная студия для групповых занятий йогой, пилатесом и функциональным тренингом. Опытные персональные тренеры помогут составить индивидуальную программу тренировок и достичь ваших целей. Комфортные раздевалки с душевыми и сейфами.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    images: [
      'https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnQlMjBmaXRuZXNzfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761971975651-4fdd4abc200f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwd29ya291dCUyMHNwYWNlfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Dumbbell, title: 'Кардио-зона', description: 'Беговые дорожки, эллипсы, велотренажёры' },
      { icon: Dumbbell, title: 'Силовые тренажёры', description: 'Полный набор оборудования' },
      { icon: Users, title: 'Зона для йоги', description: 'Групповые занятия' },
      { icon: Star, title: 'Персональные тренировки', description: 'Индивидуальные программы' },
      { icon: Check, title: 'Раздевалки с душем', description: 'Современные удобства' },
      { icon: Clock, title: 'Гибкий график', description: 'С раннего утра до позднего вечера' },
    ],
    pricing: [
      { name: '1 месяц', price: '1000₽', features: ['Безлимитное посещение', 'Раздевалки и душ', 'Групповые занятия', 'Пробное занятие с тренером'] },
      { name: '3 месяца', price: '2700₽', features: ['Скидка 10%', 'Все преимущества', 'Заморозка до 7 дней', 'Бесплатный фитнес-тест'] },
      { name: 'Персональная тренировка', price: '1500₽', features: ['1 занятие с тренером', 'Индивидуальная программа', 'Контроль техники', '60 минут'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '07:00 - 23:00' },
      { day: 'Суббота - Воскресенье', time: '09:00 - 22:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-69',
      email: 'gym@library2026.ru',
    },
  },
  'coworking': {
    id: 'coworking',
    icon: Wifi,
    title: 'Коворкинг',
    subtitle: 'Пространство для работы',
    description: 'Современное коворкинг-пространство для продуктивной работы и сотрудничества с единомышленниками.',
    fullDescription: 'Наш коворкинг — это не просто рабочее пространство, а настоящее сообщество единомышленников. Ergonomичные рабочие места с регулируемыми столами и креслами, розетками и USB-портами. Интернет со скоростью 1 Гбит/с обеспечит комфортную работу с любыми задачами.\n\nПереговорные комнаты для встреч и презентаций, оборудованные проекторами и досками. Тихие зоны для концентрированной работы и зоны для неформального общения. Бесплатный кофе, чай и вода. Принтер, сканер и другая офисная техника. Регулярные нетворкинг-мероприятия и профессиональные воркшопы.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    images: [
      'https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzUxMDY4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMGNvbmZlcmVuY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc1MTA2ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1741466071728-cc5691bfb535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBzZXR1cHxlbnwxfHx8fDE3NzUwNjM0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Wifi, title: 'Скоростной интернет 1 Гбит/с', description: 'Стабильное соединение' },
      { icon: Users, title: 'Рабочие места', description: 'Ergonomичная мебель' },
      { icon: MapPin, title: 'Переговорные комнаты', description: 'С оборудованием' },
      { icon: Check, title: 'Принтер и сканер', description: 'Бесплатное использование' },
      { icon: Clock, title: 'Кофе и чай', description: 'Бесплатные напитки' },
      { icon: Star, title: 'Нетворкинг', description: 'Регулярные мероприятия' },
    ],
    pricing: [
      { name: '1 час', price: '200₽', features: ['Рабочее место', 'Wi-Fi', 'Кофе/чай', 'Офисная техника'] },
      { name: '1 день', price: '800₽', features: ['Весь день', 'Все преимущества', 'Переговорная 1 час', 'Шкафчик'] },
      { name: 'Месячный абонемент', price: '5000₽', features: ['Безлимитный доступ', 'Фиксированное место', 'Переговорная 10 часов', 'Приоритетная поддержка'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '08:00 - 22:00' },
      { day: 'Суббота - Воскресенье', time: '10:00 - 20:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-70',
      email: 'coworking@library2026.ru',
    },
  },
};

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(id ? servicesData[id] : null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [isAddPhotoOpen, setAddPhotoOpen] = useState(false);

  const service = currentService;

  const handleAddPhoto = () => {
    setAddPhotoOpen(true);
  };

  const handleConfirmAddPhoto = () => {
    if (!service) return;
    const newImage = `https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
    const updatedService = {
        ...service,
        images: [...service.images, newImage]
    };
    setCurrentService(updatedService);
    toast.success('Фотография успешно добавлена!');
    setAddPhotoOpen(false);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Услуга не найдена</h1>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
          >
            Вернуться к услугам
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
        toast.error('Пожалуйста, заполните все обязательные поля.');
        return;
    }
    if (!service) return;

    const storedServices = localStorage.getItem('bookedServices');
    const bookedServices = storedServices ? JSON.parse(storedServices) : [];

    const newBooking = {
        id: `${service.id}-${formData.date}-${formData.time}`,
        serviceId: service.id,
        title: service.title,
        image: service.images[0],
        color: service.color,
        date: formData.date,
        time: formData.time,
    };

    if (bookedServices.find((b: any) => b.id === newBooking.id)) {
        toast.info('Эта услуга на это время уже забронирована.');
        return;
    }

    bookedServices.push(newBooking);
    localStorage.setItem('bookedServices', JSON.stringify(bookedServices));

    toast.success('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/services')}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Назад к услугам</span>
          </motion.button>

          <div className="grid gap-12 items-start">
            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Режим работы</h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    {service.schedule.map((item: any, index: number) => (
                      <div key={index}>
                        <span className="font-medium">{item.day}:</span> {item.time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Контакты</h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>{service.contacts.phone}</div>
                    <div>{service.contacts.email}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
                >
                    Галерея
                </motion.h2>
                <motion.button
                    onClick={handleAddPhoto}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    <Plus className="w-5 h-5" />
                    <span>Добавить фото</span>
                </motion.button>
            </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {service.images.map((image: string, index: number) => (
                <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg group"
                >
                    <ImageWithFallback
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Что входит в услугу
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: any, index: number) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <FeatureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Цены и тарифы
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  index === 1 ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full mb-4">
                    Популярный
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transition-all font-medium`}>
                  Выбрать тариф
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Забронировать
              </h2>
              <p className="text-lg text-gray-600">
                Заполните форму, и мы свяжемся с вами для подтверждения брони
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Дата *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Время *
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Дополнительная информация или пожелания..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-2xl transition-all text-lg font-semibold flex items-center justify-center gap-2`}
              >
                Отправить заявку
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Обязательные поля. Мы свяжемся с вами в течение 1 часа для подтверждения брони.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />

      <Dialog open={isAddPhotoOpen} onOpenChange={setAddPhotoOpen}>
        <DialogContent className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Добавить новую фотографию</h3>
            <div className="flex flex-col items-center justify-center w-full h-48 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mb-6">
                <p className="text-gray-500">Перетащите фото сюда или нажмите для выбора</p>
            </div>
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => setAddPhotoOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                    Отмена
                </button>
                <button
                    onClick={handleConfirmAddPhoto}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Добавить
                </button>
            </div>
        </DialogContent>
    </Dialog>

    </div>
  );
}
