
import { Printer, FileText, CreditCard, BookOpen, Package, CupSoda, Shirt, GalleryHorizontal } from 'lucide-react';

export const catalogServices = [
  {
    id: 'paper-printing',
    icon: Printer,
    title: 'Печать документов',
    description: 'Чёрно-белая и цветная печать любых форматов. Идеально для рефератов, отчетов и курсовых.',
    image: 'https://images.unsplash.com/photo-1588868562479-ecf936d4a5c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGRvY3VtZW50cyUyMHByaW50aW5nfGVufDF8fHx8MTc3NTMwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'business-cards',
    icon: CreditCard,
    title: 'Визитки',
    description: 'Профессиональная печать визиток на различных материалах. Создайте первое впечатление.',
    image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3MlMjBjYXJkc3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'brochures',
    icon: FileText,
    title: 'Брошюры и буклеты',
    description: 'Рекламные материалы, каталоги и меню. Любые тиражи и виды скрепления.',
    image: 'https://images.unsplash.com/photo-1612351217829-9e467539406f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZXMlMjBmbHllcnMlMjBjYXRhbG9nfGVufDF8fHx8MTc3NTA1NzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'large-format',
    icon: Package,
    title: 'Широкоформатная печать',
    description: 'Печать баннеров, плакатов и постеров для наружной и интерьерной рекламы.',
    image: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBwb3N0ZXIlMjBwcmludGluZ3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'bookbinding',
    icon: BookOpen,
    title: 'Переплёт и брошюровка',
    description: 'Твёрдый и мягкий переплёт для дипломных работ, отчетов и презентаций.',
    image: 'https://images.unsplash.com/photo-1762113246719-1a6adc837209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rYmluZGluZyUyMGhhcmRjb3ZlciUyMGJvb2tzfGVufDF8fHx8MTc3NTA1NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 't-shirts',
    icon: Shirt,
    title: 'Печать на футболках',
    description: 'Напечатаем любой принт, логотип или фото на качественной одежде из 100% хлопка.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0JTIwcHJpbnRpbmdfZW58MXx8fHwxNzc1MzAzMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-sky-500 to-fuchsia-500',
  },
  {
    id: 'posters',
    icon: GalleryHorizontal,
    title: 'Печать постеров',
    description: 'Яркие постеры и плакаты для декора стен, выставок или мероприятий. Фотокачество.',
    image: 'https://images.unsplash.com/photo-154184859-5989b3889895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBwcmludGluZyUyMHdhbGx8ZW58MXx8fHwxNzc1MzAzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-lime-500 to-teal-500',
  },
];
