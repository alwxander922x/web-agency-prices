/* Plain-language explainer. Shape per language:
   { eye, h, sub, good, bad, pick, topics:[{ t, intro, opts:[{ n, d, good?, bad?, items?, pick? }], foot? }], contract }
   DigitalOcean Basic Droplet prices checked on digitalocean.com/pricing/droplets (USD per month). */
window.EXPLAIN = {
  ru: {
    eye: "Для тех, кто в этом не разбирается",
    h: "Простыми словами",
    sub: "Без сложных терминов: что выбрать, сколько это стоит и кто за что отвечает.",
    good: "Хорошо",
    bad: "Не очень",
    pick: "Выбирайте, если",
    contract: "Перед началом работы мы подписываем договор.",
    topics: [
      {
        t: "Сайт из одной страницы или из нескольких?",
        intro: "Зачем вообще нужен сайт? Клиенты проверяют вас в интернете до звонка. Реклама, Google и Instagram должны вести людей в понятное место. А сайт работает круглосуточно и сам отвечает на одни и те же вопросы, чтобы вам не повторять их каждый день.",
        opts: [
          {
            n: "Одностраничный сайт (лендинг)",
            d: "Всё на одной длинной странице, которую листают вниз.",
            good: ["Дешевле", "Быстро: 3–5 дней", "Отлично подходит для одной услуги или для старта"],
            bad: ["Google находит его хуже: тем мало", "Тяжело расширять, когда бизнес растёт"],
            pick: "у вас одна услуга или одно предложение, либо вы только начинаете."
          },
          {
            n: "Сайт из нескольких страниц",
            d: "Отдельные страницы: Главная, Услуги, О нас, Цены, Контакты.",
            good: ["Выглядит как настоящая компания", "Google находит вас по каждой услуге отдельно", "Легко добавлять новое"],
            bad: ["Дороже", "Дольше: 1–2 недели"],
            pick: "у вас несколько услуг и вы хотите, чтобы вас находили в Google."
          }
        ]
      },
      {
        t: "Сайт с нуля или на WordPress / Tilda?",
        intro: "WordPress и Tilda — это конструкторы: готовые «кубики», из которых собирают сайт. С нуля — это когда мы пишем весь код специально под вас.",
        opts: [
          {
            n: "Конструктор (WordPress, Tilda)",
            d: "Готовая основа, которую настраивают под вас.",
            good: ["Дешевле и быстрее", "Тексты можно менять самому"],
            bad: ["Дизайн и возможности ограничены", "У Tilda есть ежемесячная плата", "Медленнее и менее уникально"],
            pick: "вам нужен недорогой сайт и вы хотите сами править тексты."
          },
          {
            n: "С нуля (наш код)",
            d: "Сайт делается точно под ваши задачи.",
            good: ["Любой дизайн и любые функции", "Быстро работает", "Нет привязки к чужой платформе: сайт ваш"],
            bad: ["Изменения вносим мы (или поддержка)", "Стоит дороже конструктора"],
            pick: "вам важны скорость, уникальность и полный контроль."
          }
        ]
      },
      {
        t: "Домен и хостинг: что это и сколько стоит",
        intro: "Домен — это адрес сайта, например example.md. Его оплачивают раз в год регистратору; цена зависит от регистратора. Хостинг — это компьютер (сервер), на котором сайт хранится и работает 24 часа в сутки.",
        opts: [
          {
            n: "Свой виртуальный сервер",
            d: "Мы рекомендуем виртуальный сервер, например DigitalOcean Droplet. Цены на сервер у DigitalOcean на сегодня:",
            items: [
              "$4 в месяц: 1 ядро, 0,5 ГБ памяти, 10 ГБ диск. Минимум",
              "$6 в месяц: 1 ядро, 1 ГБ памяти, 25 ГБ диск. Хватает для лендинга или небольшого сайта компании",
              "$12 в месяц: 1 ядро, 2 ГБ памяти, 50 ГБ диск. Для магазина, записи клиентов или CRM"
            ],
            pick: "вы хотите, чтобы аккаунт был на ваше имя. Вы платите провайдеру напрямую, а мы всё настраиваем."
          },
          {
            n: "Наш хостинг + домен .md",
            d: "Мы берём это на себя: хостинг и домен в одном месяце платежа.",
            items: ["€20 в месяц, по прайс-листу", "Ничего не нужно настраивать самому"],
            pick: "вы не хотите разбираться с серверами и счетами."
          }
        ]
      },
      {
        t: "Поддержка: что входит и кто за что отвечает",
        intro: "Поддержка — это ежемесячный тариф, он оплачивается отдельно от цены сайта: Basic €80, Standard €190, Premium €400. В него входят обновления безопасности, резервные копии, наблюдение за сайтом, исправление ошибок и часы на изменения: 2, 6 или 15 в месяц.",
        opts: [
          {
            n: "Когда мы отвечаем",
            d: "Пн–Пт, 9:00–18:00 по времени Кишинёва.",
            items: ["Ответ в течение 1 рабочего дня", "В Premium: в течение 4 рабочих часов"]
          },
          {
            n: "Если «упал» сервер",
            d: "За сервер отвечает хостинг-провайдер, за ваш сайт отвечаем мы.",
            items: [
              "С поддержкой: восстановим сайт из копии, перенесём на другой сервер или сами свяжемся с провайдером",
              "Без поддержки: такая работа стоит €30 в час"
            ]
          }
        ]
      }
    ]
  },

  en: {
    eye: "For anyone new to all this",
    h: "In plain words",
    sub: "No jargon: what to choose, what it costs and who is responsible for what.",
    good: "Good",
    bad: "Not so good",
    pick: "Choose this if",
    contract: "We sign a contract before work starts.",
    topics: [
      {
        t: "One-page site or several pages?",
        intro: "Why do you need a website at all? Customers check you online before they call. Ads, Google and Instagram need a place to send people. And a site works 24/7 and answers the same questions for you, so you do not have to repeat them every day.",
        opts: [
          {
            n: "One-page site (landing page)",
            d: "Everything sits on one long page that people scroll down.",
            good: ["Cheaper", "Fast: 3-5 days", "Great for one service or for a start"],
            bad: ["Google finds it less easily: it covers few topics", "Hard to grow later"],
            pick: "you have one service or one offer, or you are just starting."
          },
          {
            n: "Multi-page site",
            d: "Separate pages: Home, Services, About, Prices, Contacts.",
            good: ["Looks like a real company", "Google can find you for each service", "Easy to add more later"],
            bad: ["Costs more", "Takes longer: 1-2 weeks"],
            pick: "you have several services and want to be found in Google."
          }
        ]
      },
      {
        t: "Built from scratch, or WordPress / Tilda?",
        intro: "WordPress and Tilda are website builders: ready-made blocks that are put together into a site. From scratch means we write all the code just for you.",
        opts: [
          {
            n: "Builder (WordPress, Tilda)",
            d: "A ready-made base that is set up for you.",
            good: ["Cheaper and faster", "You can edit the texts yourself"],
            bad: ["Limited design and features", "Tilda charges a monthly fee", "Slower and less unique"],
            pick: "you want an affordable site and like to edit texts yourself."
          },
          {
            n: "From scratch (our code)",
            d: "The site is made exactly for your needs.",
            good: ["Any design, any feature", "Fast", "No lock-in to someone else's platform: you own it"],
            bad: ["Changes go through us (or support)", "Costs more than a builder"],
            pick: "speed, a unique look and full control matter to you."
          }
        ]
      },
      {
        t: "Domain and hosting: what they are and what they cost",
        intro: "A domain is the address of your site, for example example.md. You pay a registrar for it once a year, and the price depends on the registrar. Hosting is a computer (a server) that keeps your site online 24 hours a day.",
        opts: [
          {
            n: "Your own virtual server",
            d: "We recommend a virtual server such as a DigitalOcean Droplet. DigitalOcean's current prices:",
            items: [
              "$4 a month: 1 CPU, 0.5 GB memory, 10 GB disk. The minimum",
              "$6 a month: 1 CPU, 1 GB memory, 25 GB disk. Enough for a landing page or a small business site",
              "$12 a month: 1 CPU, 2 GB memory, 50 GB disk. For a shop, bookings or a CRM"
            ],
            pick: "you want the account in your own name. You pay the provider directly, and we set everything up."
          },
          {
            n: "Our hosting + .md domain",
            d: "We handle it for you: hosting and domain in one monthly payment.",
            items: ["€20 a month, as in the price list", "Nothing for you to set up"],
            pick: "you do not want to deal with servers and bills."
          }
        ]
      },
      {
        t: "Support: what is included and who is responsible for what",
        intro: "Support is a monthly plan, paid separately from the site price: Basic €80, Standard €190, Premium €400. It covers security updates, backups, monitoring, fixing errors and hours for changes: 2, 6 or 15 a month.",
        opts: [
          {
            n: "When we answer",
            d: "Mon-Fri, 9:00-18:00 Chisinau time.",
            items: ["Reply within 1 business day", "Premium: within 4 working hours"]
          },
          {
            n: "If the server goes down",
            d: "The hosting provider is responsible for the server. We are responsible for your site.",
            items: [
              "With support: we restore the site from a backup, move it to another server or contact the provider for you",
              "Without support: this work is billed at €30 an hour"
            ]
          }
        ]
      }
    ]
  },

  ro: {
    eye: "Pentru cei care nu se pricep",
    h: "În cuvinte simple",
    sub: "Fără termeni complicați: ce alegi, cât costă și cine răspunde de ce.",
    good: "Bine",
    bad: "Nu tocmai bine",
    pick: "Alege dacă",
    contract: "Înainte de a începe lucrul, semnăm un contract.",
    topics: [
      {
        t: "Site dintr-o pagină sau din mai multe?",
        intro: "De ce îți trebuie un site? Clienții te caută pe internet înainte să sune. Reclamele, Google și Instagram au nevoie de un loc unde să trimită oamenii. Iar site-ul lucrează non-stop și răspunde la aceleași întrebări în locul tău, ca să nu le repeți zilnic.",
        opts: [
          {
            n: "Site dintr-o singură pagină (landing)",
            d: "Totul e pe o pagină lungă, pe care o derulezi în jos.",
            good: ["Mai ieftin", "Rapid: 3–5 zile", "Foarte bun pentru un singur serviciu sau pentru început"],
            bad: ["Google îl găsește mai greu: are puține subiecte", "E greu de extins când afacerea crește"],
            pick: "ai un singur serviciu sau o singură ofertă, ori abia începi."
          },
          {
            n: "Site cu mai multe pagini",
            d: "Pagini separate: Acasă, Servicii, Despre noi, Prețuri, Contacte.",
            good: ["Arată ca o companie serioasă", "Google te găsește pentru fiecare serviciu în parte", "Poți adăuga ușor lucruri noi"],
            bad: ["Costă mai mult", "Durează mai mult: 1–2 săptămâni"],
            pick: "ai mai multe servicii și vrei să fii găsit în Google."
          }
        ]
      },
      {
        t: "Site de la zero sau pe WordPress / Tilda?",
        intro: "WordPress și Tilda sunt constructoare de site-uri: blocuri gata făcute, din care se asamblează un site. „De la zero” înseamnă că scriem tot codul special pentru tine.",
        opts: [
          {
            n: "Constructor (WordPress, Tilda)",
            d: "O bază gata făcută, pe care o adaptăm pentru tine.",
            good: ["Mai ieftin și mai rapid", "Poți schimba singur textele"],
            bad: ["Design și funcții limitate", "Tilda cere o plată lunară", "Mai lent și mai puțin unic"],
            pick: "vrei un site ieftin și îți place să-ți schimbi singur textele."
          },
          {
            n: "De la zero (codul nostru)",
            d: "Site-ul e făcut exact pentru nevoile tale.",
            good: ["Orice design și orice funcție", "Merge repede", "Nu depinzi de platforma altcuiva: site-ul e al tău"],
            bad: ["Modificările le facem noi (sau suportul)", "Costă mai mult decât un constructor"],
            pick: "contează viteza, unicitatea și controlul deplin."
          }
        ]
      },
      {
        t: "Domeniu și hosting: ce sunt și cât costă",
        intro: "Domeniul e adresa site-ului, de exemplu example.md. Îl plătești o dată pe an unui registrar, iar prețul depinde de registrar. Hostingul e un calculator (server) care ține site-ul pornit non-stop.",
        opts: [
          {
            n: "Server virtual propriu",
            d: "Recomandăm un server virtual, de exemplu DigitalOcean Droplet. Prețurile actuale la DigitalOcean:",
            items: [
              "$4 pe lună: 1 procesor, 0,5 GB memorie, 10 GB disc. Minimul",
              "$6 pe lună: 1 procesor, 1 GB memorie, 25 GB disc. Ajunge pentru un landing sau un site mic de firmă",
              "$12 pe lună: 1 procesor, 2 GB memorie, 50 GB disc. Pentru magazin, programări sau CRM"
            ],
            pick: "vrei ca contul să fie pe numele tău. Plătești direct furnizorului, iar noi configurăm totul."
          },
          {
            n: "Hostingul nostru + domeniu .md",
            d: "Ne ocupăm noi: hosting și domeniu într-o singură plată lunară.",
            items: ["€20 pe lună, conform listei de prețuri", "Nu ai nimic de configurat"],
            pick: "nu vrei să te ocupi de servere și facturi."
          }
        ]
      },
      {
        t: "Suportul: ce include și cine răspunde de ce",
        intro: "Suportul e un abonament lunar, plătit separat de prețul site-ului: Basic €80, Standard €190, Premium €400. Include actualizări de securitate, copii de rezervă, monitorizare, remedierea erorilor și ore pentru modificări: 2, 6 sau 15 pe lună.",
        opts: [
          {
            n: "Când îți răspundem",
            d: "Luni–vineri, 9:00–18:00, ora Chișinăului.",
            items: ["Răspuns în cel mult 1 zi lucrătoare", "Premium: în 4 ore lucrătoare"]
          },
          {
            n: "Dacă „cade” serverul",
            d: "De server răspunde furnizorul de hosting. De site-ul tău răspundem noi.",
            items: [
              "Cu suport: restabilim site-ul din copia de rezervă, îl mutăm pe alt server sau vorbim noi cu furnizorul",
              "Fără suport: această muncă costă €30 pe oră"
            ]
          }
        ]
      }
    ]
  }
};
