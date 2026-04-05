import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function InteractiveMapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Интерактивная карта
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Найдите нужные вам залы и услуги в здании Национальной библиотеки Беларуси.
          </p>
          <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.by/maps/org/natsionalnaya_biblioteka_belarusi/1087338903/?ll=27.646090%2C53.931243&z=18"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              style={{position: 'relative'}}
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
