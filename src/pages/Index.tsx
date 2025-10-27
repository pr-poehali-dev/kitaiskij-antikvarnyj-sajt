import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const products = [
    {
      id: 1,
      name: 'Ваза династии Мин',
      description: 'Фарфоровая ваза с драконом, XV век',
      price: '450 000 ₽',
      image: 'https://cdn.poehali.dev/projects/3f27fc26-1682-489a-9a7c-ff111567f25e/files/e1fe674a-d334-4f8b-a11c-b69f9a273850.jpg',
    },
    {
      id: 2,
      name: 'Нефритовый дракон',
      description: 'Резьба по зелёному нефриту, династия Цин',
      price: '780 000 ₽',
      image: 'https://cdn.poehali.dev/projects/3f27fc26-1682-489a-9a7c-ff111567f25e/files/6e4f2994-1318-47f1-851f-876bae67da56.jpg',
    },
    {
      id: 3,
      name: 'Шкатулка для чая',
      description: 'Красный лак с золотой росписью, XIX век',
      price: '120 000 ₽',
      image: 'https://cdn.poehali.dev/projects/3f27fc26-1682-489a-9a7c-ff111567f25e/files/5f5806cf-4116-48be-bed9-a5fcc48ba76e.jpg',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Мария Соколова',
      text: 'Приобрела нефритовый кулон. Качество потрясающее, доставка быстрая. Спасибо!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Александр Петров',
      text: 'Купил вазу династии Мин для коллекции. Экспертиза подтвердила подлинность.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Елена Васильева',
      text: 'Прекрасный магазин! Консультанты помогли с выбором подарка. Рекомендую.',
      rating: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🏺</div>
              <h1 className="text-2xl font-serif font-bold text-primary">龍寶</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-sans">
                Каталог
              </a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-sans">
                Отзывы
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-sans">
                Контакты
              </a>
            </nav>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Сокровища Поднебесной
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans mb-8">
            Аутентичный китайский антиквариат. Экспертиза подлинности. Доставка по всей России.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl font-serif font-bold text-primary mb-3">Популярные товары</h3>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Card
              key={product.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-accent"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-2">{product.name}</h4>
                <p className="text-muted-foreground font-sans mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary font-sans">{product.price}</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-serif font-bold text-primary mb-3">Отзывы покупателей</h3>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.id}
                className="p-6 animate-fade-in hover:shadow-lg transition-shadow border-l-4 border-accent"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground font-sans mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-primary font-serif">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-serif font-bold text-primary mb-3">Свяжитесь с нами</h3>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 animate-fade-in">
              <h4 className="text-xl font-serif font-semibold text-primary mb-4">Контактная информация</h4>
              <div className="space-y-4 font-sans">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span className="text-foreground">Москва, ул. Арбат, 24</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span className="text-foreground">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span className="text-foreground">info@longbao.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span className="text-foreground">Пн-Пт: 10:00 - 19:00</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <h4 className="text-xl font-serif font-semibold text-primary mb-4">Обратная связь</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-sans"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-sans"
                />
                <Textarea
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-sans min-h-[120px]"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                  Отправить сообщение
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 text-center font-sans">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-3xl">🏺</div>
            <h1 className="text-2xl font-serif font-bold">龍寶</h1>
          </div>
          <p className="text-primary-foreground/80">© 2024 Магазин китайского антиквариата. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
