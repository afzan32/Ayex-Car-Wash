export type Language = 'en' | 'ar';

export const en = {
  nav: {
    about: "About",
    services: "Services",
    pricing: "Pricing",
    areas: "Areas",
    faq: "FAQ",
    contact: "Contact"
  },
  hero: {
    headline: "AYEX CAR WASH Premium Mobile Car Wash Service in Abu Dhabi",
    subtext: "Convenience. Quality. Eco-Friendly.",
    bookNow: "Book Now",
    contactUs: "Contact Us"
  },
  stats: {
    vehicles: "Vehicles Served",
    corporate: "Corporate Clients",
    years: "Years of Excellence",
    eco: "Eco-Friendly Products"
  },
  about: {
    badge: "Eco-Certified & Licensed",
    title: "The Shine That Lasts Forever",
    desc1: "Ayex Car Wash is Abu Dhabi's premier mobile vehicle detailing service, bringing unparalleled care directly to your doorstep.",
    desc2: "We specialize in serving residential towers, commercial buildings, corporate fleets, and government clients with absolute professionalism. Our waterless and eco-friendly techniques ensure a pristine finish while protecting the environment.",
    features: ["Professional Staff", "Eco-Friendly", "On-Site Service"]
  },
  services: {
    title: "Our Premium Services",
    subtitle: "Comprehensive care for your vehicle, wherever you are.",
    s1: { title: "Waterless Wash", desc: "Eco-friendly exterior cleaning using premium biodegradable products." },
    s2: { title: "Mobile Detailing", desc: "Full service detailing brought directly to your home or office." },
    s3: { title: "Interior Deep Clean", desc: "Thorough vacuuming, stain removal, and upholstery conditioning." },
    s4: { title: "Steam Cleaning", desc: "High-pressure steam to sanitize AC vents and kill 99% of bacteria." },
    s5: { title: "Fleet Cleaning", desc: "Tailored wash programs for corporate and government fleets." },
    s6: { title: "Annual Contracts", desc: "Scheduled regular visits for residential towers and VIP clients." }
  },
  pricing: {
    title: "Transparent Packages",
    subtitle: "Choose the perfect care level for your vehicle.",
    requestQuote: "Request a Quote",
    popular: "Most Popular",
    silver: { name: "Silver", price: "Basic", desc: "Exterior wash for individuals", features: ["Waterless Exterior Wash", "Tire & Rim Shine", "Window Cleaning (Outside)"] },
    gold: { name: "Gold", price: "Standard", desc: "Full interior & exterior", features: ["Everything in Silver", "Interior Vacuuming", "Dashboard Polishing", "Window Cleaning (Inside)"] },
    platinum: { name: "Platinum", price: "Premium", desc: "Ultimate detailing & corporate", features: ["Everything in Gold", "AC Steam Sanitization", "Leather Conditioning", "Monthly Reporting (Fleets)"] }
  },
  contract: {
    title: "Corporate & Residential Annual Contracts",
    desc: "Perfect for property managers and corporate clients. Includes dedicated teams, customized scheduling, and detailed monthly reports.",
    cta: "Get a Contract Proposal"
  },
  areas: {
    title: "Service Coverage Areas",
    subtitle: "We cover all major districts across Abu Dhabi.",
    list: ["Al Khalidiya", "Al Reem Island", "Al Markaziyah", "Al Bateen", "Corniche", "Yas Island", "Saadiyat Island", "And Surrounding Areas"]
  },
  features: {
    title: "Why Choose Ayex Car Wash?",
    subtitle: "Operational excellence meets premium customer service.",
    f1: "Trained Professionals",
    f2: "Eco-Friendly Products",
    f3: "Modern Equipment",
    f4: "Reliable Scheduling",
    f5: "Flexible Contracts",
    f6: "Safety Compliant"
  },
  gallery: {
    title: "Before & After",
    subtitle: "Witness the Ayex transformation."
  },
  testimonials: {
    title: "Client Success Stories",
    subtitle: "Trusted by Abu Dhabi's finest."
  },
  faq: {
    title: "Frequently Asked Questions",
    q1: { q: "Is waterless wash safe for luxury cars?", a: "Yes, our waterless products encapsulate dirt particles and lift them safely from the surface without scratching the paint." },
    q2: { q: "How often will the team visit for contracts?", a: "We offer flexible schedules: weekly, bi-weekly, or customized frequencies based on your contract terms." },
    q3: { q: "Are staff background-checked?", a: "Absolutely. All our staff undergo rigorous background checks and continuous professional training." },
    q4: { q: "What's included in an annual contract?", a: "Dedicated teams, priority scheduling, discounted rates, and comprehensive monthly operational reports." }
  },
  booking: {
    title: "Book Your Wash",
    subtitle: "Experience the ultimate convenience.",
    name: "Full Name",
    phone: "Phone Number",
    // email: "Email Address",
    service: "Service Type",
    date: "Preferred Date & Time",
    vehicles: "Number of Vehicles",
    location: "Location / Building Name",
    notes: "Special Notes",
    submit: "Confirm Booking",
    fleetBtn: "Corporate & Fleet Inquiry",
    success: "Booking Request Received",
    successDesc: "Our team will contact you shortly to confirm your appointment."
  },
  footer: {
    tagline: "The Shine That Lasts Forever",
    rights: "© 2026 Ayex Car Wash. All rights reserved.",
    address: "Daratul Miya, Al Khalidiya, Abu Dhabi",
    phone: "+971 56 912 5329",
    email: "info@ayexcarwash.com"
  }
};

export const ar: typeof en = {
  nav: {
    about: "عن الشركة",
    services: "الخدمات",
    pricing: "الأسعار",
    areas: "المناطق",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا"
  },
  hero: {
    headline: "خدمات غسيل سيارات متنقلة متميزة في أبوظبي",
    subtext: "الراحة. الجودة. صديق للبيئة.",
    bookNow: "احجز الآن",
    contactUs: "اتصل بنا"
  },
  stats: {
    vehicles: "مركبة تم خدمتها",
    corporate: "عميل مؤسسي",
    years: "سنوات من التميز",
    eco: "منتجات صديقة للبيئة"
  },
  about: {
    badge: "معتمد بيئياً ومرخص",
    title: "اللمعان الذي يدوم للأبد",
    desc1: "أيكس هي خدمة غسيل السيارات المتنقلة الرائدة في أبوظبي، حيث نجلب العناية الفائقة مباشرة إلى باب منزلك.",
    desc2: "نحن متخصصون في خدمة الأبراج السكنية والمباني التجارية وأساطيل الشركات والعملاء الحكوميين باحترافية مطلقة. تضمن تقنياتنا الخالية من الماء والصديقة للبيئة تشطيباً أصلياً مع حماية البيئة.",
    features: ["طاقم محترف", "صديق للبيئة", "خدمة في الموقع"]
  },
  services: {
    title: "خدماتنا المتميزة",
    subtitle: "عناية شاملة لسيارتك، أينما كنت.",
    s1: { title: "غسيل بدون ماء", desc: "تنظيف خارجي صديق للبيئة باستخدام منتجات متميزة قابلة للتحلل." },
    s2: { title: "تلميع متنقل", desc: "خدمات تلميع كاملة يتم إحضارها مباشرة إلى منزلك أو مكتبك." },
    s3: { title: "تنظيف داخلي عميق", desc: "تنظيف شامل بالمكنسة الكهربائية، إزالة البقع، وتكييف المفروشات." },
    s4: { title: "تنظيف بالبخار", desc: "بخار عالي الضغط لتعقيم فتحات التكييف وقتل 99٪ من البكتيريا." },
    s5: { title: "غسيل الأساطيل", desc: "برامج غسيل مخصصة لأساطيل الشركات والحكومة." },
    s6: { title: "عقود سنوية", desc: "زيارات منتظمة مجدولة للأبراج السكنية وكبار الشخصيات." }
  },
  pricing: {
    title: "باقات شفافة",
    subtitle: "اختر مستوى العناية المثالي لسيارتك.",
    requestQuote: "اطلب عرض سعر",
    popular: "الأكثر طلباً",
    silver: { name: "الفضية", price: "أساسي", desc: "غسيل خارجي للأفراد", features: ["غسيل خارجي بدون ماء", "تلميع الإطارات", "تنظيف النوافذ (من الخارج)"] },
    gold: { name: "الذهبية", price: "قياسي", desc: "داخلي وخارجي بالكامل", features: ["كل شيء في الفضية", "تنظيف داخلي بالمكنسة", "تلميع لوحة القيادة", "تنظيف النوافذ (من الداخل)"] },
    platinum: { name: "البلاتينية", price: "متميز", desc: "تلميع فائق وعقود شركات", features: ["كل شيء في الذهبية", "تعقيم المكيف بالبخار", "تكييف الجلد", "تقارير شهرية (للأساطيل)"] }
  },
  contract: {
    title: "عقود سنوية للشركات والمجمعات السكنية",
    desc: "مثالي لمديري العقارات وعملاء الشركات. يشمل فرقاً مخصصة، وجدولة مخصصة، وتقارير تشغيلية شهرية مفصلة.",
    cta: "احصل على مقترح عقد"
  },
  areas: {
    title: "مناطق تغطية الخدمة",
    subtitle: "نغطي جميع المناطق الرئيسية في جميع أنحاء أبوظبي.",
    list: ["الخالدية", "جزيرة الريم", "المركزية", "البطين", "الكورنيش", "جزيرة ياس", "جزيرة السعديات", "والمناطق المحيطة بها"]
  },
  features: {
    title: "لماذا تختار أيكس؟",
    subtitle: "التميز التشغيلي يلتقي بخدمة العملاء الفائقة.",
    f1: "محترفون مدربون",
    f2: "منتجات صديقة للبيئة",
    f3: "معدات حديثة",
    f4: "جدولة موثوقة",
    f5: "عقود مرنة",
    f6: "متوافق مع السلامة"
  },
  gallery: {
    title: "قبل وبعد",
    subtitle: "شاهد تحول أيكس."
  },
  testimonials: {
    title: "قصص نجاح العملاء",
    subtitle: "موثوق بها من قبل الأفضل في أبوظبي."
  },
  faq: {
    title: "الأسئلة الشائعة",
    q1: { q: "هل الغسيل بدون ماء آمن للسيارات الفاخرة؟", a: "نعم، تقوم منتجاتنا الخالية من الماء بتغليف جزيئات الأوساخ ورفعها بأمان من السطح دون خدش الطلاء." },
    q2: { q: "كم مرة سيزور الفريق للعقود؟", a: "نقدم جداول مرنة: أسبوعية، نصف شهرية، أو ترددات مخصصة بناءً على شروط عقدك." },
    q3: { q: "هل يتم فحص خلفية الموظفين؟", a: "بالتأكيد. يخضع جميع موظفينا لفحوصات خلفية صارمة وتدريب مهني مستمر." },
    q4: { q: "ما المشمول في العقد السنوي؟", a: "فرق مخصصة، جدولة ذات أولوية، أسعار مخفضة، وتقارير تشغيلية شهرية شاملة." }
  },
  booking: {
    title: "احجز غسيل سيارتك",
    subtitle: "جرب أقصى درجات الراحة.",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    service: "نوع الخدمة",
    date: "التاريخ والوقت المفضل",
    vehicles: "عدد المركبات",
    location: "الموقع / اسم المبنى",
    notes: "ملاحظات خاصة",
    submit: "تأكيد الحجز",
    fleetBtn: "استفسار الشركات والأساطيل",
    success: "تم استلام طلب الحجز",
    successDesc: "سيتصل بك فريقنا قريباً لتأكيد موعدك."
  },
  footer: {
    tagline: "اللمعان الذي يدوم للأبد",
    rights: "© 2024 أيكس لغسيل السيارات. جميع الحقوق محفوظة.",
    address: "دارة المياه، الخالدية، أبوظبي",
    phone: "+971 56 912 5329",
    email: "info@ayexcarwash.com"
  }
};

export const translations: Record<Language, typeof en> = { en, ar };
