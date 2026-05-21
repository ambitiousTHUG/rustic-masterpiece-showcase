import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react";
import babaYaga from "@/assets/baba-yaga-house.png";
import bear from "@/assets/bear.jpeg";
import lantern from "@/assets/lantern.png";
import winterHouse from "@/assets/winter-house.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARTSTARINA — Искусство дерева для вашего сада" },
      {
        name: "description",
        content:
          "Ручное производство деревянных изделий для дачи и загородного дома. Авторские светильники, скульптуры и садовые объекты от мастера.",
      },
      { property: "og:title", content: "ARTSTARINA — Искусство дерева для вашего сада" },
      {
        property: "og:description",
        content:
          "Авторские деревянные изделия ручной работы для дачи и загородного дома.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "+7 (920) 380-33-38";
const PHONE_RAW = "+79203803338";
const MAX_LINK = "https://max.me/+79203803338";

const products = [
  {
    title: "Домик Бабы Яги",
    desc: "Высота 1 м 70 см, ширина корня 1 м 70 см. Премиальная садовая скульптура.",
    price: "20 000 ₽",
    img: babaYaga,
    featured: true,
  },
  {
    title: "Медведь",
    desc: "Резная фигура медведя из массива. Ручная работа, защитная пропитка.",
    price: "20 000 ₽",
    img: bear,
  },
  {
    title: "Избушка на корнях",
    desc: "Декоративный домик на природном корне. Состаренное дерево, кровля‑щепа.",
    price: "18 000 ₽",
    img: winterHouse,
  },
  {
    title: "Подсвечник / Светильник",
    desc: "Настенный светильник на массивной деревянной основе с кованым держателем.",
    price: "3 000 ₽",
    img: lantern,
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#catalog", label: "Каталог" },
    { href: "#about", label: "О мастере" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-primary">
          ARTSTARINA
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Открыть меню"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-foreground/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] parchment-card border-l border-border shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-border/60">
            <span className="font-serif tracking-[0.18em] text-primary">ARTSTARINA</span>
            <button aria-label="Закрыть меню" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6 text-lg font-serif">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="parchment-bg border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-32 text-center fade-in">
        <p className="text-xs sm:text-sm tracking-[0.4em] text-accent uppercase mb-6">
          Авторская мастерская
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-foreground">
          ARTSTARINA — <span className="italic text-primary">Искусство дерева</span><br className="hidden sm:block" />
          {" "}для вашего сада
        </h1>
        <div className="mx-auto mt-10 h-px w-24 bg-border" />
        <p className="mx-auto mt-10 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Ручное производство деревянных изделий для дачи и загородного дома. Работаю с деревом
          уже долгое время. Изготавливаю функциональные и долговечные предметы интерьера и сада —
          от садовой мебели до светильников. Использую отборные породы дерева, безопасные пропитки
          и проверенную фурнитуру. Делаю так, чтобы ваше загородное хозяйство радовало глаз и
          служило годами.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-7 py-3 text-sm tracking-widest uppercase hover:bg-accent transition-colors"
          >
            Смотреть каталог
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: (typeof products)[number] }) {
  return (
    <article
      data-reveal
      className="group parchment-card border border-border/70 rounded-sm overflow-hidden flex flex-col"
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
        {p.desc && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        )}
        <div className="mt-5 flex items-baseline justify-between border-t border-border/60 pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Цена</span>
          <span className="font-serif text-xl text-primary">{p.price}</span>
        </div>
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-sm border border-primary text-primary px-5 py-3 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Узнать о наличии
        </a>
      </div>
    </article>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs tracking-[0.4em] text-accent uppercase mb-4">Каталог</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground">Изделия мастерской</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
          {products.map((p) => (
            <ProductCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="parchment-bg border-y border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center" data-reveal>
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-4">О мастере</p>
        <h2 className="font-serif text-3xl sm:text-5xl text-foreground">
          Дерево, время и руки мастера
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />
        <div className="mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            Каждое изделие рождается в небольшой мастерской — без конвейера и спешки. Я выбираю
            отборные породы дерева, сам обрабатываю каждую заготовку и довожу её до образа,
            который должен прожить долгую жизнь в саду или доме.
          </p>
          <p>
            В работе использую только безопасные пропитки и проверенную фурнитуру. Это значит —
            изделие не боится дождя, снега и времени, а сохраняет тёплый характер живого дерева
            на долгие годы.
          </p>
          <p className="font-serif italic text-foreground/80 text-xl">
            «Хорошая вещь должна радовать глаз и служить — не сезон, а поколения.»
          </p>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center" data-reveal>
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-4">Контакты</p>
        <h2 className="font-serif text-3xl sm:text-5xl text-foreground">Связаться с мастером</h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />

        <div className="mt-10 flex flex-col items-center gap-5 text-foreground">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Локация: Кострома, Москва, Ярославль</span>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-3 font-serif text-2xl sm:text-3xl text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Написать в Max Messenger
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-serif tracking-[0.18em] text-primary">ARTSTARINA</span>
        <span>© 2026 ARTSTARINA. Все права защищены.</span>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
