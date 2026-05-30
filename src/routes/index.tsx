import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react";
import babaYaga from "@/assets/baba-yaga-house.png";
import bear from "@/assets/bear.jpeg";
import lantern from "@/assets/lantern.png";
import chandelier from "@/assets/chandelier.png";
import hangerTextured from "@/assets/hanger-textured.png";
import hangerOil from "@/assets/hanger-oil.png";
import towerCastle from "@/assets/tower-castle.png";
import bench from "@/assets/bench.jpg";
import woodSlices from "@/assets/wood-slices.png";
import roots from "@/assets/roots.png";
import meotis from "@/assets/meotis-stone.png";
import babaYaga2 from "@/assets/baba-yaga-2.png";
import hangerTextured2 from "@/assets/hanger-textured-2.jpg";
import fence from "@/assets/fence.jpg";
import branchesDecor from "@/assets/branches-decor.jpg";
import keyHolder from "@/assets/key-holder.jpg";
import palisade from "@/assets/palisade.jpg";

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
        content: "Авторские деревянные изделия ручной работы для дачи и загородного дома.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "preload", as: "image", href: babaYaga, fetchpriority: "high" } as never,
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "+7 (920) 380-33-38";
const PHONE_RAW = "+79203803338";
const MAX_LINK = "https://max.ru/join/enmh4l6PS61i-nbXhs98wL4NZemvWmGp17Aa4FtkF4o";

const products = [
  {
    title: "Домик Бабы Яги",
    desc: "Высота 1 м 70 см, ширина корня 1 м 70 см. Премиальная садовая скульптура.",
    price: "20 000 ₽",
    img: babaYaga,
  },
  {
    title: "Медведь",
    desc: "Резная фигура медведя из массива. Ручная работа, защитная пропитка.",
    price: "20 000 ₽",
    img: bear,
  },
  {
    title: "Подсвечник / Светильник",
    desc: "Настенный светильник на массивной деревянной основе с кованым держателем.",
    price: "3 000 ₽",
    img: lantern,
  },
  {
    title: "Люстра «Орех»",
    desc: "Брашированная, с выраженной текстурой. Длина 1 м 70 см, ширина 60 см.",
    price: "14 000 ₽",
    img: chandelier,
    contain: true,
  },
  {
    title: "Вешалка с текстурой",
    desc: "Брашированная фактура дерева. Длина 75 см, высота 55 см.",
    price: "3 000 ₽",
    img: hangerTextured,
  },
  {
    title: "Вешалка «Масло-воск»",
    desc: "Покрытие маслом и воском. Длина 1 м 10 см.",
    price: "4 000 ₽",
    img: hangerOil,
    contain: true,
  },
  {
    title: "Домик Бабы Яги для вашей дачи",
    desc: "Высота 1 м 20 см, ширина корня 1 м 30 см.",
    price: "15 000 ₽",
    img: babaYaga2,
    contain: true,
  },
  {
    title: "Башня-замок",
    desc: "Декоративная садовая башня из массива. Высота 1 м.",
    price: "4 000 ₽",
    img: towerCastle,
  },
  {
    title: "Лавка из сосны",
    desc: "Массив сосны, покрытие маслом и воском. Прочная и долговечная.",
    price: "20 000 ₽",
    img: bench,
  },
  {
    title: "Спилы",
    desc: "Деревянные спилы различных пород и размеров.",
    price: "500 ₽",
    img: woodSlices,
  },
  {
    title: "Корень любых размеров от 1 до 5 метров",
    desc: "Натуральные корни любых размеров для декора и ландшафта.",
    price: "Цена по договорённости",
    img: roots,
  },
  {
    title: "Камень меотис",
    desc: "Природный камень меотис для садовых композиций.",
    price: "8 000 ₽",
    img: meotis,
  },
  {
    title: "Изогнутые деревья и ветки",
    desc: "Декоративные ветки и деревья любых размеров для сада и дачи.",
    price: "Цена по договорённости",
    img: branchesDecor,
    contain: true,
  },
  {
    title: "Забор на заказ",
    desc: "Заборы любых размеров, любой сложности и по вашему чертежу.",
    price: "Цена по договорённости",
    img: fence,
    contain: true,
  },
  {
    title: "Ключница",
    desc: "Покрытие маслом и воском. Длина 35 см, высота 15 см.",
    price: "3 000 ₽",
    img: hangerTextured2,
    contain: true,
  },
  {
    title: "Вешалка с текстурой",
    desc: "Брашированная фактура дерева. Длина 75 см, высота 55 см.",
    price: "4 000 ₽",
    img: keyHolder,
    contain: true,
  },
  {
    title: "Частокол",
    desc: "Частокол любых размеров на заказ.",
    price: "Цена по договорённости",
    img: palisade,
    contain: true,
  },

];

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", href);
  }, []);
}

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
} as const;

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const smoothScroll = useSmoothScroll();
  const links = [
    { href: "#catalog", label: "Каталог" },
    { href: "#about", label: "О мастере" },
    { href: "#contacts", label: "Контакты" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScroll(e, href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/85 will-change-transform">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "#top")}
          className="font-serif text-xl sm:text-2xl tracking-[0.32em] text-primary"
        >
          ARTSTARINA
        </a>
        <nav className="hidden md:flex items-center gap-12 text-xs tracking-[0.28em] uppercase text-foreground/75">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="hover:text-accent transition-colors"
            >
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
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          style={{ transform: open ? "translate3d(0,0,0)" : "translate3d(100%,0,0)" }}
          className="absolute right-0 top-0 h-full w-80 max-w-[85%] parchment-card border-l border-border shadow-2xl transition-transform duration-300 ease-out will-change-transform"
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-border/60">
            <span className="font-serif tracking-[0.28em] text-primary">ARTSTARINA</span>
            <button aria-label="Закрыть меню" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6 text-sm tracking-[0.28em] uppercase">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
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
  const smoothScroll = useSmoothScroll();
  return (
    <section id="top" className="parchment-hero border-b border-border/60">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-5 sm:px-8 py-24 sm:py-36 text-center overflow-hidden"
      >
        <p className="text-[11px] sm:text-xs tracking-[0.45em] text-primary/70 uppercase mb-10">
          Мастерская дерева
        </p>
        <h1 className="font-serif font-semibold text-[3.25rem] xs:text-6xl sm:text-7xl md:text-[6rem] leading-[1] text-primary tracking-tight break-words">
          ARTSTARINA
        </h1>
        <p className="mt-6 font-serif italic text-2xl sm:text-3xl text-primary/85">
          — Искусство дерева для вашего сада
        </p>
        <div className="mx-auto mt-8 h-px w-20 bg-primary/40" />
        <p className="mx-auto mt-10 max-w-xl text-[15px] sm:text-base leading-[1.85] text-foreground/80">
          Ручное производство деревянных изделий для дачи и загородного дома. Работаю с деревом
          уже долгое время. Изготавливаю функциональные и долговечные предметы интерьера и сада —
          от садовой мебели до светильников. Использую отборные породы дерева, безопасные пропитки
          и проверенную фурнитуру. Делаю так, чтобы ваше загородное хозяйство радовало глаз и
          служило годами.
        </p>
        <div className="mt-12">
          <a
            href="#catalog"
            onClick={(e) => smoothScroll(e, "#catalog")}
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.32em] uppercase hover:bg-accent transition-colors duration-300"
          >
            Смотреть каталог
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ProductCard({ p, index }: { p: (typeof products)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group parchment-card border border-border/70 rounded-sm overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(90,60,30,0.45)] hover:border-accent/60"
    >
      <div className="aspect-[4/5] overflow-hidden bg-background">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${p.contain ? "object-contain p-4" : "object-cover"} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]`}
        />
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
        {p.desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>}
        <div className="mt-5 flex items-baseline justify-between border-t border-border/60 pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Цена</span>
          <span className="font-serif text-xl text-primary">{p.price}</span>
        </div>
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-300"
        >
          Узнать о наличии
        </a>
      </div>

    </motion.article>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-accent uppercase mb-4">Каталог</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground">Изделия мастерской</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-border" />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
          {products.map((p, i) => (
            <ProductCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="parchment-bg border-y border-border/60 py-20 sm:py-28 scroll-mt-20">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
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
      </Reveal>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-28 scroll-mt-20">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
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
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-300"
        >
          <MessageCircle className="h-4 w-4" />
          Написать в Max Messenger
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-serif tracking-[0.18em] text-primary">ARTSTARINA</span>
        <span>© 2026 ARTSTARINA. Все права защищены.</span>
        <span>
          Сайт разработан{" "}
          <a
            href="https://scopegfx.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors underline-offset-2 hover:underline"
          >
            scopegfx studios
          </a>
        </span>
      </div>
    </footer>
  );
}

function Index() {
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
