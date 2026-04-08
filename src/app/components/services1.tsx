
const Services1 = () => {
  const services = [
    { title: 'Аренда залов', description: 'Проводите мероприятия, лекции и встречи в наших современных и оборудованных залах.' },
    { title: 'Онлайн-ресурсы', description: 'Получите доступ к тысячам электронных книг, журналов и баз данных из любой точки мира.' },
    { title: 'Детский уголок', description: 'Специально оборудованное пространство для маленьких читателей с интерактивными играми и книгами.' },
    { title: 'Коворкинг', description: 'Тихие и удобные зоны для работы и учебы с бесплатным Wi-Fi и доступом к розеткам.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Наши услуги</h2>
          <p className="mt-4 text-lg text-gray-500">Откройте для себя мир возможностей с нашими услугами.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
