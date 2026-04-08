
const WhyChooseUs = () => {
  const reasons = [
    { title: 'Комфорт и технологии', description: 'Современное оборудование и удобные зоны для чтения и работы.' },
    { title: 'Доступ к знаниям', description: 'Огромный выбор книг, периодики и онлайн-ресурсов.' },
    { title: 'Центр сообщества', description: 'Место для встреч, обучения и культурного обмена.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Комфорт и технологии для вашего обучения</h2>
          <p className="mt-4 text-lg text-gray-500">Все, что нужно для продуктивной работы и отдыха, в одном месте.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
