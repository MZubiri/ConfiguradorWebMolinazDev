/**
 * Catálogo Central de Demos Turísticas - Molinaz Dev
 * Optimizado para Presentación Comercial por Google Meet
 */

export const categories = [
  { id: "all", label: "Todas las Demos", icon: "compass" },
  { id: "receptivo", label: "Receptivo Cusco & Paquetes", icon: "map-pin" },
  { id: "vivencial", label: "Vivencial & Andino (Ayacucho)", icon: "mountain" },
  { id: "aventura", label: "Aventura & Colca (Arequipa)", icon: "footprints" },
  { id: "lujo", label: "Playa, Yates & Lujo", icon: "sun" }
];

export const demosData = [
  {
    id: "maxistravel",
    name: "MaxisTravel Cusco",
    category: "receptivo",
    categoryLabel: "Receptivo Tradicional & Paquetes",
    badge: "🏔️ Top Ventas Cusco & Machu Picchu",
    region: "Cusco • Imperio Inca",
    location: "Cusco, Machu Picchu, Valle Sagrado y Montaña 7 Colores",
    url: "https://maxistravel.com/",
    tagline: "Agencia receptiva líder: tours tradicionales, boletos a Machu Picchu y flota de transporte turístico privado.",
    description: "Estructura corporativa sólida para agencias en Cusco con alta afluencia de pasajeros. Incluye paquetes multidía, excursiones diarias y alquiler de movilidad privada.",
    // Argumentos de Venta organizados para el Vendedor en Google Meet
    salesPitch: [
      "Catálogo de alta rotación: Machu Picchu, Laguna Humantay, Maras-Moray y Montaña de 7 Colores.",
      "Módulo de Flota de Transporte: Vende traslados privados hotel-aeropuerto y movilidad con chofer para elevar el ticket promedio.",
      "Cotizador dinámico de itinerarios: Permite a familias y grupos cotizar paquetes multidía en segundos.",
      "Cero intermediarios: Todas las solicitudes llegan directamente al WhatsApp y correo del operador."
    ],
    features: [
      "Catálogo Extenso",
      "Módulo de Transporte",
      "Cotizador a Medida",
      "Reservas Directas",
      "Flota con Chofer"
    ],
    themeColors: {
      primary: "#8C4331", // Arcilla inca
      accent: "#D6AA5C",  // Oro
      badgeBg: "#632719",
      badgeBorder: "#D6AA5C"
    },
    techStack: "Modern Web SPA / Angular / 100% Móvil",
    idealFor: "Agencias receptivas en Cusco, Lima, Puno o Arequipa con alto volumen de pasajeros.",
    previewImage: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80",
    embedSafe: false // maxistravel bloquea iframes por X-Frame-Options de su hosting, abrir directo en pestaña
  },
  {
    id: "sondondo",
    name: "Valle del Sondondo Expeditions",
    category: "vivencial",
    categoryLabel: "Turismo Vivencial & Comunitario",
    badge: "🦅 Ruta del Cóndor & Andenes",
    region: "Ayacucho • Valle del Sondondo",
    location: "Andamarca, Mayobamba y Puquio (Ayacucho)",
    url: "https://sondondo.molinazdev.lat/",
    tagline: "Turismo vivencial, avistamiento del Cóndor Andino en Mayobamba, andenerías vivas y la Danza de las Tijeras.",
    description: "Diseño cálido y editorial andino, pensado para agencias que operan rutas culturales, trekking de altura y turismo rural comunitario en los Andes.",
    salesPitch: [
      "Storytelling visual que conecta emocionalmente con el turista extranjero que busca experiencias auténticas.",
      "Fichas técnicas con altimetría (hasta 5,112 msnm en el Apu Qarhuarazo), nivel de dificultad y aclimatación.",
      "Botón WhatsApp 1-Click en cada circuito para reservas rápidas con el guía o coordinador local.",
      "Posicionamiento SEO en Google para búsquedas de nicho ('Tours Valle del Sondondo', 'Cóndor Mayobamba')."
    ],
    features: [
      "Storytelling Andino",
      "WhatsApp Directo",
      "Altimetría y Dificultad",
      "Galería Vivencial",
      "Rutas y Mapas"
    ],
    themeColors: {
      primary: "#1B3527", // Forest andino
      accent: "#C85A32",  // Terracota
      badgeBg: "#1B3527",
      badgeBorder: "#C85A32"
    },
    techStack: "Angular SPA / Responsive / Arquitectura Limpia",
    idealFor: "Operadores de turismo comunitario, rutas arqueológicas y trekking vivencial en Ayacucho, Puno o Cusco.",
    previewImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    embedSafe: true
  },
  {
    id: "kgoriwayra",
    name: "Cabalgatas Kgoriwayra",
    category: "aventura",
    categoryLabel: "Aventura & Actividades",
    badge: "🐎 Caballo Peruano de Paso",
    region: "Arequipa • Cañón del Colca",
    location: "Yanque, Valle y Cañón del Colca (Arequipa)",
    url: "https://kgoriwayra.molinazdev.lat/",
    tagline: "Excursiones a caballo peruano de paso por sitios arqueológicos y miradores del Cañón del Colca.",
    description: "Estética rústico-boutique de alta gama que resalta la elegancia del caballo peruano de paso y la inmensidad de los paisajes andinos de Yanque.",
    salesPitch: [
      "Eleva el ticket promedio: Transmite un servicio VIP y exclusivo para cobrar tarifas competitivas en dólares.",
      "Claridad para el turista: Detalla niveles de experiencia (principiantes o jinetes avanzados) y seguridad.",
      "Optimizado para reservas de último minuto: Turistas que ya están en el hotel y reservan desde su celular.",
      "Reseñas y credenciales a la vista para eliminar cualquier duda antes del pago."
    ],
    features: [
      "Estilo Rústico-Boutique",
      "Ficha de Circuitos",
      "Reserva Rápida",
      "Testimonios de Viajeros",
      "100% Adaptable a Móvil"
    ],
    themeColors: {
      primary: "#C2622D", // Cobre Yanque
      accent: "#D4A853",  // Oro
      badgeBg: "#A04A1B",
      badgeBorder: "#D4A853"
    },
    techStack: "Angular / Mobile-First / Rendimiento Optimizado",
    idealFor: "Operadores de tours a caballo, deportes de aventura, cuatrimotos o excursiones outdoor.",
    previewImage: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80",
    embedSafe: true
  },
  {
    id: "toursgotravel",
    name: "GoTravel México & Caribe",
    category: "lujo",
    categoryLabel: "Playa, Yates & Lujo",
    badge: "⛵ Yates & Experiencias VIP",
    region: "Los Cabos • Cancún • Puerto Vallarta",
    location: "Caribe Mexicano y Pacífico",
    url: "https://toursgotravel.com/es",
    tagline: "Tours exclusivos, alquiler de yates privados, catamaranes y deportes acuáticos en destinos de playa.",
    description: "Plataforma de estilo Dark Luxury, totalmente bilingüe y multisede, ideal para operadores que buscan proyectar lujo y exclusividad náutica.",
    salesPitch: [
      "Estructura Multi-destino: Demuestra al cliente cómo gestionar varias ciudades o zonas desde una misma web.",
      "Bilingüe nativo (Español / Inglés): Imprescindible para captar turistas de EE.UU., Canadá y Europa.",
      "Módulo de Yates y Veleros: Galería fotográfica en alta definición que vende experiencias de ticket alto.",
      "WhatsApp flotante 24/7 con detección automática del tour que el usuario está consultando."
    ],
    features: [
      "Bilingüe (ES / EN)",
      "Multi-Destino",
      "Diseño Exclusivo",
      "Alquiler de Yates",
      "Atención 24/7 WhatsApp"
    ],
    themeColors: {
      primary: "#162E25", // Verde esmeralda profundo
      accent: "#D4A853",  // Oro
      badgeBg: "#0F201A",
      badgeBorder: "#D4A853"
    },
    techStack: "Next.js / SSR & Edge CDN / Tailwind CSS",
    idealFor: "Agencias náuticas, charters de yates, turismo de playa o agencias peruanas que operan paquetes a Máncora/Punta Sal.",
    previewImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    embedSafe: true
  }
];

/**
 * Paletas de Colores Inspiradas en las 100 Mejores Combinaciones de Canva para Turismo y Naturaleza
 * Agrupadas en 5 categorías para que el cliente y vendedor elijan la identidad visual exacta.
 */
export const canvaPaletteCategories = [
  { id: "all", label: "Todas las Paletas (41)", count: 41 },
  { id: "tierra", label: "⛰️ Tierra & Andes", count: 8 },
  { id: "selva", label: "🌿 Amazonía & Selva", count: 8 },
  { id: "glaciar", label: "❄️ Glaciares & Lagunas", count: 6 },
  { id: "costa", label: "🏖️ Costas & Playas", count: 7 },
  { id: "lujo", label: "✨ Lujo & Boutique", count: 6 },
  { id: "canva", label: "🎨 Canva Populares", count: 6 }
];

export const canvaColorPalettes = [
  // 1. TIERRA & ANDES
  {
    id: "paleta-andina",
    name: "Tierra Andina & Adobe",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Tradicional, cálido, identitario y artesanal",
    bestFor: "Turismo vivencial, trekking y rutas culturales",
    colors: [
      { name: "Terracota Andina", hex: "#C85A32", isPrimary: true },
      { name: "Oro Inca", hex: "#D4A853" },
      { name: "Verde Bosque", hex: "#1B3527" },
      { name: "Lino Alpaca", hex: "#FAF7F2" },
      { name: "Tierra Café", hex: "#382A21" }
    ]
  },
  {
    id: "paleta-cusco-imperial",
    name: "Cusco Colonial & Oro",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Elegante, histórico, formal y de prestigio",
    bestFor: "Agencias receptivas en Cusco, Machu Picchu y City Tours",
    colors: [
      { name: "Azul Casona Colonial", hex: "#1E293B", isPrimary: true },
      { name: "Dorado Inti", hex: "#E5B869" },
      { name: "Rojo Carmín Andino", hex: "#9E2A2B" },
      { name: "Piedra Inca", hex: "#E2E8F0" },
      { name: "Carbón Noche", hex: "#0F172A" }
    ]
  },
  {
    id: "paleta-colca-aventura",
    name: "Cañón del Colca & Aventura",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Robusto, expedición, seguridad y energía",
    bestFor: "Cabalgatas, rafting, ciclismo y montañismo",
    colors: [
      { name: "Cobre Yanque", hex: "#C2622D", isPrimary: true },
      { name: "Cuero Caramelo", hex: "#A0522D" },
      { name: "Verde Pino Colca", hex: "#2D4F3E" },
      { name: "Arena Volcánica", hex: "#EAD8C0" },
      { name: "Cacao Andino", hex: "#3E2723" }
    ]
  },
  {
    id: "paleta-sacsayhuaman",
    name: "Sacsayhuamán & Piedra Andina",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Monumental, sólido, sobrio e incaico",
    bestFor: "Circuitos arqueológicos y tours históricos",
    colors: [
      { name: "Gris Piedra Megalítica", hex: "#4A5568", isPrimary: true },
      { name: "Ocre Terrenal", hex: "#D97706" },
      { name: "Pizarra Andina", hex: "#1E293B", isDark: true },
      { name: "Ceniza Inca", hex: "#CBD5E1" },
      { name: "Blanco Salineras", hex: "#F8FAFC" }
    ]
  },
  {
    id: "paleta-chulucanas",
    name: "Cerámica Chulucanas & Arcilla",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Artesanal, auténtico, terracota vibrante",
    bestFor: "Rutas de artesanos, gastronomía y pueblos típicos",
    colors: [
      { name: "Arcilla Quemada", hex: "#9A3412", isPrimary: true },
      { name: "Naranja Vasija", hex: "#EA580C" },
      { name: "Melocotón Suave", hex: "#FED7AA" },
      { name: "Humo Negro Artesanal", hex: "#1C1917" },
      { name: "Marfil Ahumado", hex: "#FAFAF9" }
    ]
  },
  {
    id: "paleta-muros-incas",
    name: "Muros Incas & Oro Sagrado",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Noble, arqueológico, señorial",
    bestFor: "Paquetes clásicos Cusco, Valle y Puno",
    colors: [
      { name: "Bronce Andino", hex: "#78350F", isPrimary: true },
      { name: "Oro Viejo", hex: "#B45309" },
      { name: "Mostaza Inti", hex: "#F59E0B" },
      { name: "Arena Quechua", hex: "#FEF3C7" },
      { name: "Sillar Oscuro", hex: "#1E1B18" }
    ]
  },

  // 2. SELVA & AMAZONÍA
  {
    id: "paleta-valle-sagrado",
    name: "Valle Sagrado & Ecoturismo",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Natural, relajante, orgánico y sustentable",
    bestFor: "Ecolodges, turismo holístico, retiros y naturaleza",
    colors: [
      { name: "Verde Valle Sagrado", hex: "#1B3527", isPrimary: true },
      { name: "Bambú Suave", hex: "#5C8374" },
      { name: "Salvia Andina", hex: "#9EC8B9" },
      { name: "Maíz Blanco", hex: "#E8C872" },
      { name: "Piedra Urubamba", hex: "#27374D" }
    ]
  },
  {
    id: "paleta-selva-tambopata",
    name: "Amazonía Viva (Tambopata / Iquitos)",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Biodiversidad, vitalidad tropical y misterio",
    bestFor: "Lodges en la selva, cruceros por el Amazonas y fauna",
    colors: [
      { name: "Verde Selva Virgen", hex: "#15803D", isPrimary: true },
      { name: "Hoja Tropical", hex: "#22C55E" },
      { name: "Flor de Guacamayo", hex: "#EF4444" },
      { name: "Sol de Ceja de Selva", hex: "#FACC15" },
      { name: "Madera Caoba", hex: "#3F2E1B" }
    ]
  },
  {
    id: "paleta-ceja-selva",
    name: "Ceja de Selva & Orquídeas",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Exótico, fresco, orquídeas y cataratas",
    bestFor: "Tours a Chanchamayo, Tarapoto y Oxapampa",
    colors: [
      { name: "Esmeralda Selvático", hex: "#047857", isPrimary: true },
      { name: "Menta Neón", hex: "#10B981" },
      { name: "Orquídea Silvestre", hex: "#EC4899" },
      { name: "Rocío Matutino", hex: "#FDF2F8" },
      { name: "Sombra de Cañón", hex: "#064E3B" }
    ]
  },
  {
    id: "paleta-cafe-cacao",
    name: "Ruta del Café & Cacao",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Aromático, gourmet, cálido y agroturístico",
    bestFor: "Turismo gastronómico, fincas de café y chocolate",
    colors: [
      { name: "Café Tostado Chanchamayo", hex: "#451A03", isPrimary: true },
      { name: "Cacao Marrón", hex: "#78350F" },
      { name: "Caramelo Miel", hex: "#B45309" },
      { name: "Crema de Café", hex: "#FEF3C7" },
      { name: "Lino Tostado", hex: "#F5EBE1" }
    ]
  },
  {
    id: "paleta-flora-rio",
    name: "Río Madre de Dios & Flora",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Aventura fluvial, expedición y naturaleza pura",
    bestFor: "Navegación en ríos, avistamiento de nutrias y tapires",
    colors: [
      { name: "Verde Río Turbio", hex: "#166534", isPrimary: true },
      { name: "Follaje Lima", hex: "#84CC16" },
      { name: "Arena Amazónica", hex: "#EAB308" },
      { name: "Ceiba Oscura", hex: "#365314" },
      { name: "Bruma Fluvial", hex: "#FEFCE8" }
    ]
  },
  {
    id: "paleta-palmera-esmeralda",
    name: "Bosque Nublado del Manu",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Místico, denso, ecológico y científico",
    bestFor: "Birdwatching, turismo científico y reservas naturales",
    colors: [
      { name: "Musgo de Altura", hex: "#064E3B", isPrimary: true },
      { name: "Verde Helecho", hex: "#059669" },
      { name: "Tierra Húmeda", hex: "#D97706" },
      { name: "Niebla del Bosque", hex: "#ECFDF5" },
      { name: "Corteza Tropical", hex: "#022C22" }
    ]
  },

  // 3. GLACIARES & LAGUNAS
  {
    id: "paleta-glaciar-humantay",
    name: "Laguna Humantay & Glaciares",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Fresco, moderno, cristalino y fotogénico",
    bestFor: "Tours de alta montaña, lagunas y senderismo",
    colors: [
      { name: "Turquesa Glaciar", hex: "#0284C7", isPrimary: true },
      { name: "Azul Nevado", hex: "#38BDF8" },
      { name: "Blanco Hielo", hex: "#F0F9FF" },
      { name: "Gris Pizarra", hex: "#334155" },
      { name: "Plata Andina", hex: "#94A3B8" }
    ]
  },
  {
    id: "paleta-lago-titicaca",
    name: "Lago Titicaca & Taquile",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Ancestral, profundo, místico y celestial",
    bestFor: "Tours a los Uros, Taquile, Amantaní y Puno",
    colors: [
      { name: "Azul Zafiro Titicaca", hex: "#0369A1", isPrimary: true },
      { name: "Celeste Lago Sagrado", hex: "#0EA5E9" },
      { name: "Totora Dorada", hex: "#D97706" },
      { name: "Cielo Andino Despejado", hex: "#E0F2FE" },
      { name: "Profundidad Altiplano", hex: "#0C4A6E" }
    ]
  },
  {
    id: "paleta-aguas-millpu",
    name: "Aguas Turquesas de Millpu",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Esmeralda cristalino, cañones y aguas termales",
    bestFor: "Circuitos en Ayacucho, cañones y piscinas naturales",
    colors: [
      { name: "Turquesa Pozas Millpu", hex: "#0D9488", isPrimary: true },
      { name: "Aguamarina Viva", hex: "#2DD4BF" },
      { name: "Roca Travertino", hex: "#CCFBF1" },
      { name: "Cañón de Huancapi", hex: "#134E4A" },
      { name: "Espuma de Cascada", hex: "#F0FDFA" }
    ]
  },
  {
    id: "paleta-laguna-69",
    name: "Laguna 69 & Cordillera Blanca",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Hielo puro, cumbres nevadas y trekking de altura",
    bestFor: "Agencias en Huaraz, Huascarán y Santa Cruz",
    colors: [
      { name: "Azul Eléctrico Glaciar", hex: "#0284C7", isPrimary: true },
      { name: "Cian Nevado", hex: "#06B6D4" },
      { name: "Granito Cordillera", hex: "#164E63" },
      { name: "Hielo Milenario", hex: "#CFFAFE" },
      { name: "Cumbre Nevada", hex: "#ECFEFF" }
    ]
  },
  {
    id: "paleta-ausangate",
    name: "Nevado Ausangate & 7 Lagunas",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Respeto a los Apus, senderismo extremo y alta montaña",
    bestFor: "Circuitos de trekking de 4 y 5 días alrededor del Ausangate",
    colors: [
      { name: "Azul Añil de Altura", hex: "#1E40AF", isPrimary: true },
      { name: "Azul Cobalto", hex: "#3B82F6" },
      { name: "Gris Morrena", hex: "#93C5FD" },
      { name: "Blanco Glaciar", hex: "#EFF6FF" },
      { name: "Noche Cordillerana", hex: "#172554" }
    ]
  },

  // 4. COSTAS & PLAYAS
  {
    id: "paleta-desierto-paracas",
    name: "Dunas de Ica & Paracas",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Cálido, atardecer, arena y aventura costera",
    bestFor: "Tours en buggy, Huacachina, Islas Ballestas y Líneas de Nazca",
    colors: [
      { name: "Duna Ocre", hex: "#D97706", isPrimary: true },
      { name: "Canela Cálida", hex: "#B45309" },
      { name: "Arena Dorada", hex: "#FDE68A" },
      { name: "Mar Pacífico", hex: "#0E7490" },
      { name: "Noche Desértica", hex: "#1C1917" }
    ]
  },
  {
    id: "paleta-playa-mancora",
    name: "Máncora & Sol Pacífico",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Lujo relajado, surf, brisa marina y coctelería",
    bestFor: "Hoteles de playa, paseos en catamarán y avistamiento de ballenas",
    colors: [
      { name: "Azul Océano Profundo", hex: "#0F172A", isPrimary: true },
      { name: "Esmeralda Marino", hex: "#10B981" },
      { name: "Oro Arena", hex: "#D4A853" },
      { name: "Coral Atardecer", hex: "#F87171" },
      { name: "Blanco Perla", hex: "#F8FAFC" }
    ]
  },
  {
    id: "paleta-punta-sal",
    name: "Punta Sal & Atardecer de Verano",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Romántico, sunset, calidez tropical y descanso",
    bestFor: "Resorts all-inclusive, lunamieleros y viajes familiares de playa",
    colors: [
      { name: "Puesta de Sol Terracota", hex: "#C2410C", isPrimary: true },
      { name: "Naranja Atardecer", hex: "#F97316" },
      { name: "Sol Dorado", hex: "#FBBF24" },
      { name: "Azul Océano Cálido", hex: "#0369A1" },
      { name: "Arena Crema", hex: "#FFF7ED" }
    ]
  },
  {
    id: "paleta-ballestas-flamingos",
    name: "Islas Ballestas & Flamingos",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Costero, vibrante, fauna marina y cielo despejado",
    bestFor: "Excursiones en lancha a las islas y paseos marítimos",
    colors: [
      { name: "Flamingo Andino", hex: "#BE185D", isPrimary: true },
      { name: "Rosa Bahía", hex: "#F472B6" },
      { name: "Azul Marino Intenso", hex: "#0E7490" },
      { name: "Espuma Marina", hex: "#FDF2F8" },
      { name: "Guano Pardo", hex: "#500724" }
    ]
  },
  {
    id: "paleta-oasis-huacachina",
    name: "Oasis de Huacachina & Buggies",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Aventura extrema, arena dorada y palmeras",
    bestFor: "Sandboarding, tours en tubulares y vivencias en el desierto",
    colors: [
      { name: "Palmera del Oasis", hex: "#047857", isPrimary: true },
      { name: "Arena de Duna", hex: "#F59E0B" },
      { name: "Atardecer del Desierto", hex: "#EA580C" },
      { name: "Espejo de Agua", hex: "#38BDF8" },
      { name: "Noche de Huacachina", hex: "#1C1917" }
    ]
  },

  // 5. LUJO, BOUTIQUE & NOCTURNO
  {
    id: "paleta-dark-luxury",
    name: "Dark Luxury & Oro Elegante",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Ultra premium, exclusivo, sofisticado y nocturno",
    bestFor: "Charters privados, hoteles 5 estrellas y agencias de alta gama",
    colors: [
      { name: "Negro Obsidiana", hex: "#121212", isPrimary: true, isDark: true },
      { name: "Oro Puro 24K", hex: "#D4AF37" },
      { name: "Gris Titanio", hex: "#262626" },
      { name: "Bronce Cepillado", hex: "#8C7B4F" },
      { name: "Blanco Platino", hex: "#FFFFFF" }
    ]
  },
  {
    id: "paleta-noche-andina",
    name: "Noche Andina & Vía Láctea",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Astroturismo, planetarios, cielo estrellado y silencio",
    bestFor: "Tours de observación de estrellas, glamping y turismo místico",
    colors: [
      { name: "Azul Cósmico", hex: "#0F172A", isPrimary: true, isDark: true },
      { name: "Índigo Altiplánico", hex: "#312E81" },
      { name: "Nebulosa Andina", hex: "#818CF8" },
      { name: "Luz Estelar", hex: "#EEF2FF" },
      { name: "Plata Lunar", hex: "#F8FAFC" }
    ]
  },
  {
    id: "paleta-boutique-lino",
    name: "Boutique Minimal & Lino Andino",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Sereno, minimalista, limpio y acogedor",
    bestFor: "Hoteles boutique, spas en el Valle Sagrado y retiros",
    colors: [
      { name: "Lino Natural", hex: "#A8A29E", isPrimary: true },
      { name: "Terracota Sutil", hex: "#D97706" },
      { name: "Alpaca Cruda", hex: "#F5F5F4" },
      { name: "Piedra Cálida", hex: "#78716C" },
      { name: "Carbón Madera", hex: "#292524" }
    ]
  },
  {
    id: "paleta-sillar-arequipa",
    name: "Sillar de Arequipa & Cacao",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Ciudad Blanca, arquitectura colonial y sofisticación",
    bestFor: "City tours en Arequipa, monasterio de Santa Catalina y picanterías",
    colors: [
      { name: "Blanco Sillar Volcánico", hex: "#F8FAFC", isPrimary: true },
      { name: "Rojo Santa Catalina", hex: "#991B1B" },
      { name: "Azul Añil Colonial", hex: "#1E3A8A" },
      { name: "Cacao Picantería", hex: "#451A03" },
      { name: "Gris Ceniza Misti", hex: "#334155" }
    ]
  },
  {
    id: "paleta-marina-veleros",
    name: "Yates & Veleros del Pacífico",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Náutico premium, exclusividad, brisa marina",
    bestFor: "Paseos en velero, pesca de altura y charters privados",
    colors: [
      { name: "Azul Marino Náutico", hex: "#0A2540", isPrimary: true },
      { name: "Dorado Brújula", hex: "#E5A93C" },
      { name: "Cubierta Teca", hex: "#8F5E38" },
      { name: "Vela Blanca", hex: "#FFFFFF" },
      { name: "Cielo de Altamar", hex: "#E8F0FE" }
    ]
  },
  {
    id: "paleta-belmond-expedicion",
    name: "Exclusivo Belmond & Hiram Bingham",
    category: "lujo",
    categoryLabel: "Lujo & Boutique",
    vibe: "Lujo clásico ferrocarrilero, caoba, vajilla fina y coctelería",
    bestFor: "Agencias receptivas VIP, trenes de lujo y servicios de alta gama",
    colors: [
      { name: "Azul Tren Imperial", hex: "#1E3A8A", isPrimary: true },
      { name: "Oro Filigrana", hex: "#D4AF37" },
      { name: "Borgoña Terciopelo", hex: "#831843" },
      { name: "Marfil Vajilla", hex: "#F8FAFC" },
      { name: "Carbón Ferrovía", hex: "#0F172A" }
    ]
  },

  // ADICIONALES: TIERRA & ANDES
  {
    id: "paleta-textiles-pisac",
    name: "Textiles de Písac & Telar Andino",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Folclórico, artesanal, tejido tradicional y calor humano",
    bestFor: "Rutas de tejedores en Chinchero, ferias artesanales y vivencial",
    colors: [
      { name: "Rojo Telar Andino", hex: "#A8201A", isPrimary: true },
      { name: "Terracota Hilada", hex: "#E07A5F" },
      { name: "Índigo Tradición", hex: "#3D405B" },
      { name: "Lana de Alpaca Natural", hex: "#F4F1DE" },
      { name: "Noche Andina", hex: "#264653" }
    ]
  },
  {
    id: "paleta-vinicunca-arcoiris",
    name: "Vinicunca 7 Colores & Valle Rojo",
    category: "tierra",
    categoryLabel: "Tierra & Andes",
    vibe: "Geológico, impactante, vibrante y multicolor",
    bestFor: "Excursiones a la Montaña de 7 Colores, Palccoyo y Valle Rojo",
    colors: [
      { name: "Rojo Mineral Vinicunca", hex: "#C0392B", isPrimary: true },
      { name: "Ocre Arcilloso", hex: "#E67E22" },
      { name: "Turquesa Sedimento", hex: "#16A085" },
      { name: "Amarillo Azufre", hex: "#F39C12" },
      { name: "Piedra Cordillera", hex: "#2C3E50" }
    ]
  },

  // ADICIONALES: SELVA & AMAZONÍA
  {
    id: "paleta-tarapoto-cataratas",
    name: "Cataratas de Tarapoto & Selva Alta",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Fresco, cataratas, bruma selvática y aventura acuática",
    bestFor: "Tours a Laguna Azul, Ahuashiyacu, rafting en Mayo y Lamas",
    colors: [
      { name: "Esmeralda Cascada", hex: "#059669", isPrimary: true },
      { name: "Aguas Cristalinas", hex: "#0284C7" },
      { name: "Sol de Tarapoto", hex: "#F59E0B" },
      { name: "Espuma de Caída", hex: "#ECFDF5" },
      { name: "Roca Húmeda", hex: "#1E293B" }
    ]
  },
  {
    id: "paleta-oxapampa-madera",
    name: "Oxapampa & Pozuzo Campestre",
    category: "selva",
    categoryLabel: "Amazonía & Selva",
    vibe: "Campestre, colonial tirolés, madera tallada y praderas",
    bestFor: "Turismo rural, lodges de montaña, canopy y gastronomía típica",
    colors: [
      { name: "Castaño Madera Rústica", hex: "#78350F", isPrimary: true },
      { name: "Verde Pastizal", hex: "#15803D" },
      { name: "Miel Silvestre", hex: "#FDE68A" },
      { name: "Corteza de Pino", hex: "#3F2E1B" },
      { name: "Lino Campestre", hex: "#FAF5EF" }
    ]
  },

  // ADICIONALES: GLACIARES & LAGUNAS
  {
    id: "paleta-huayhuash",
    name: "Cordillera Huayhuash & Trekking Extremo",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Aventura técnica, campamentos bajo las estrellas y alta montaña",
    bestFor: "Circuitos de trekking de 8 a 12 días en Huayhuash y Yerupajá",
    colors: [
      { name: "Azul Cielo de Altura", hex: "#0369A1", isPrimary: true },
      { name: "Turquesa Laguna Glaciar", hex: "#0891B2" },
      { name: "Morrena Gris", hex: "#64748B" },
      { name: "Nieve Eterna", hex: "#F0F9FF" },
      { name: "Abismo Rocoso", hex: "#0F172A" }
    ]
  },
  {
    id: "paleta-pastoruri",
    name: "Glaciar Pastoruri & Puya Raimondi",
    category: "glaciar",
    categoryLabel: "Glaciares & Lagunas",
    vibe: "Reserva de la biosfera, clima gélido y flora endémica",
    bestFor: "Tours de cambio climático, Huascarán y queñuales",
    colors: [
      { name: "Azul Hielo Pastoruri", hex: "#0284C7", isPrimary: true },
      { name: "Verde Puya Raimondi", hex: "#84CC16" },
      { name: "Pizarra Helada", hex: "#475569" },
      { name: "Brisa de Ventisquero", hex: "#E0F2FE" },
      { name: "Basalto Cordillerano", hex: "#1E293B" }
    ]
  },

  // ADICIONALES: COSTAS & PLAYAS
  {
    id: "paleta-vichayito-sunset",
    name: "Vichayito & Arenas Cálidas",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Tranquilidad, carpas beduinas en la playa y descanso total",
    bestFor: "Kitesurf, cabalgatas en la playa al atardecer y glamping",
    colors: [
      { name: "Cobre Sunset Norteño", hex: "#EA580C", isPrimary: true },
      { name: "Arena Dorada Piura", hex: "#FBBF24" },
      { name: "Océano Cristalino", hex: "#0284C7" },
      { name: "Cáscara de Coco", hex: "#FFFBEB" },
      { name: "Madera de Muelle", hex: "#292524" }
    ]
  },
  {
    id: "paleta-caballitos-totora",
    name: "Huanchaco & Caballitos de Totora",
    category: "costa",
    categoryLabel: "Costas & Playas",
    vibe: "Milenario, pesquero, olas de surf y costa norteña",
    bestFor: "Ruta Moche, Trujillo, surf en Huanchaco y cevicherías de playa",
    colors: [
      { name: "Ocre Totora Seca", hex: "#D97706", isPrimary: true },
      { name: "Azul Ola Izquierda", hex: "#0284C7" },
      { name: "Barro Chan Chan", hex: "#78350F" },
      { name: "Espuma Marina", hex: "#FEF3C7" },
      { name: "Humo Marino", hex: "#1E293B" }
    ]
  },

  // 6. CANVA POPULARES & ATARDECERES (Guía Oficial Canva 100)
  {
    id: "paleta-canva-sunset",
    name: "Atardecer Dorado (Canva #12)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Energético, audaz, moderno y de altísimo contraste",
    bestFor: "Portales de aventura, parapente y experiencias urbanas",
    colors: [
      { name: "Rojo Atardecer Intenso", hex: "#E63946", isPrimary: true },
      { name: "Azul Petróleo", hex: "#1D3557" },
      { name: "Azul Acero", hex: "#457B9D" },
      { name: "Celeste Suave", hex: "#A8DADC" },
      { name: "Blanco Cáscara", hex: "#F1FAEE" }
    ]
  },
  {
    id: "paleta-canva-forest-berries",
    name: "Bayas Silvestres & Bosque (Canva #28)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Elegante, contemporáneo, fresco y sofisticado",
    bestFor: "Agroturismo, rutas del arándano y lodges gourmet",
    colors: [
      { name: "Rojo Rubí Silvestre", hex: "#D90429", isPrimary: true },
      { name: "Cereza Intenso", hex: "#EF233C" },
      { name: "Azul Noche Profundo", hex: "#2B2D42" },
      { name: "Gris Plata", hex: "#8D99AE" },
      { name: "Blanco Puro", hex: "#EDF2F4" }
    ]
  },
  {
    id: "paleta-canva-warm-rustic",
    name: "Cálido Rústico & Cuero (Canva #45)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Rústico, orgánico, acogedor y de campiña andina",
    bestFor: "Haciendas coloniales, cabalgatas y turismo rural",
    colors: [
      { name: "Cuero Oscuro", hex: "#582F0E", isPrimary: true },
      { name: "Caramelo Tostado", hex: "#7F4F24" },
      { name: "Canela Cálida", hex: "#936639" },
      { name: "Arena Suave", hex: "#C6AC8F" },
      { name: "Lino Crudo", hex: "#EAE0D5" }
    ]
  },
  {
    id: "paleta-canva-pastel-coastal",
    name: "Costa Suave & Menta (Canva #63)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Armónico, retro-costero, relajado y veraniego",
    bestFor: "Hostales boutique, escuelas de surf y yoga retreats",
    colors: [
      { name: "Turquesa Menta", hex: "#2A9D8F", isPrimary: true },
      { name: "Coral Terracota", hex: "#E76F51" },
      { name: "Melocotón Suave", hex: "#F4A261" },
      { name: "Mostaza Pastel", hex: "#E9C46A" },
      { name: "Verde Petróleo Oscuro", hex: "#264653" }
    ]
  },
  {
    id: "paleta-canva-terracota-sage",
    name: "Terracota & Salvia Botánica (Canva #77)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Ecológico, zen, balance natural y gastronomía saludable",
    bestFor: "Ecolodges de autor, spas termales y retiros de bienestar",
    colors: [
      { name: "Terracota Noble", hex: "#A44A3F", isPrimary: true },
      { name: "Arena Ocre", hex: "#D4A373" },
      { name: "Verde Salvia", hex: "#CCD5AE" },
      { name: "Brote Oliva", hex: "#E9EDC9" },
      { name: "Verde Bosque Nuboso", hex: "#354F52" }
    ]
  },
  {
    id: "paleta-canva-vintage-andes",
    name: "Vintage Andino & Ocre (Canva #94)",
    category: "canva",
    categoryLabel: "Canva Populares",
    vibe: "Aventurero, expedición vintage, energía y calidez",
    bestFor: "Agencias jóvenes, road trips en furgoneta y turismo de aventura",
    colors: [
      { name: "Rojo Carmesí Retro", hex: "#D62828", isPrimary: true },
      { name: "Naranja Atardecer", hex: "#F77F00" },
      { name: "Oro Amarillo Mostaza", hex: "#FCBF49" },
      { name: "Azul Prusiano", hex: "#003049" },
      { name: "Vainilla Antigua", hex: "#EAE2B7" }
    ]
  }
];

export const deliveryInfo = {
  minDays: 10,
  maxDays: 20,
  headline: "Entrega en 10 a 20 días hábiles con Feedback Continuo",
  subheadline: "Acompañamiento cercano durante todo el proceso. Realizamos revisiones constantes para que la web quede 100% a tu medida y gusto antes del lanzamiento.",
  methodology: [
    {
      step: "1. Levantamiento & Personalización (Días 1-4)",
      desc: "Definimos tu catálogo de tours, tarifas, fotos y la paleta de colores de tu marca."
    },
    {
      step: "2. Desarrollo & Revisiones Continuas (Días 5-14)",
      desc: "Te mostramos avances en un link privado y ajustamos textos, fotos y detalles según tus observaciones."
    },
    {
      step: "3. Pruebas de Reserva & Conexión (Días 15-18)",
      desc: "Validamos la conexión con tu WhatsApp, pasarela de pagos, visualización en celulares y velocidad."
    },
    {
      step: "4. Lanzamiento Oficial & Capacitación (Días 19-20)",
      desc: "Publicación en tu dominio propio (.com o .pe) y sesión para enseñarte a cambiar precios y tours fácilmente."
    }
  ]
};

/**
 * Módulos Turísticos Disponibles para el Configurador Interactivo
 */
export const tourModules = [
  // 1. Esenciales Core
  {
    id: "hero-video",
    name: "Hero Panorámico con Llamado a la Acción",
    category: "core",
    categoryLabel: "Esenciales Core",
    source: "Visto en Demos",
    desc: "Cabecera de alto impacto visual con video o carrusel fotográfico de destinos y botón directo a reservar.",
    defaultChecked: true,
    impact: "Impacto visual instantáneo al abrir la web"
  },
  {
    id: "catalogo-filtros",
    name: "Catálogo de Tours con Filtros Dinámicos",
    category: "core",
    categoryLabel: "Esenciales Core",
    source: "Visto en Demos",
    desc: "Buscador y filtros por destino (Cusco, Colca, etc.), duración en días y tipo de actividad.",
    defaultChecked: true,
    impact: "El viajero encuentra en segundos el tour que busca"
  },
  {
    id: "itinerario-diario",
    name: "Ficha de Tour con Itinerario Día por Día",
    category: "core",
    categoryLabel: "Esenciales Core",
    source: "Visto en Demos",
    desc: "Desglose por horas o días con acordeones: Qué incluye, Qué no incluye y Recomendaciones de equipaje.",
    defaultChecked: true,
    impact: "Resuelve el 90% de las preguntas frecuentes del pasajero"
  },
  {
    id: "whatsapp-directo",
    name: "Botón de Reserva WhatsApp 1-Click Pre-llenado",
    category: "core",
    categoryLabel: "Esenciales Core",
    source: "Visto en Demos",
    desc: "Mensaje automático que indica el nombre del tour, fecha y número de personas directo a tu WhatsApp.",
    defaultChecked: true,
    impact: "Cero fricción, 100% ganancia directa sin comisiones"
  },

  // 2. Conversión & Aumento de Ticket
  {
    id: "flota-transporte",
    name: "Módulo de Flota y Traslados Turísticos Privados",
    category: "ventas",
    categoryLabel: "Conversión & Ticket Alto",
    source: "Visto en MaxisTravel",
    desc: "Venta de traslados aeropuerto-hotel, alquiler de minivans, sprinters y autos con chofer certificado.",
    defaultChecked: true,
    impact: "Aumenta el ticket promedio vendiendo transporte privado"
  },
  {
    id: "cotizador-medida",
    name: "Cotizador Interactivo de Paquetes a Medida",
    category: "ventas",
    categoryLabel: "Conversión & Ticket Alto",
    source: "Visto en MaxisTravel / Recomendado",
    desc: "Formulario por pasos donde el cliente elige destinos, número de personas, categoría de hotel y fechas.",
    defaultChecked: false,
    impact: "Capta familias y grupos corporativos de alto presupuesto"
  },
  {
    id: "pasarela-pagos",
    name: "Pasarela de Pagos Online Multimoneda (Soles y USD)",
    category: "ventas",
    categoryLabel: "Conversión & Ticket Alto",
    source: "Recomendado por Molinaz Dev",
    desc: "Cobro de reservas o señas (30% - 50%) con tarjeta de crédito/débito vía Culqi, Niubiz, Stripe o PayPal.",
    defaultChecked: false,
    impact: "Asegura la venta inmediata y evita cancelaciones"
  },
  {
    id: "calendario-salidas",
    name: "Calendario de Salidas Confirmadas y Cupos",
    category: "ventas",
    categoryLabel: "Conversión & Ticket Alto",
    source: "Recomendado por Molinaz Dev",
    desc: "Visualización de fechas abiertas con contador de cupos restantes para generar sentido de urgencia.",
    defaultChecked: false,
    impact: "Acelera la decisión de compra antes de que se agoten cupos"
  },

  // 3. Especializados Andinos & Aventura
  {
    id: "altimetria-dificultad",
    name: "Ficha Técnica de Altimetría y Aclimatación",
    category: "andino",
    categoryLabel: "Andino & Aventura",
    source: "Visto en Sondondo",
    desc: "Gráfico de altitud máxima (msnm), desnivel acumulado y consejos médicos para prevenir el soroche.",
    defaultChecked: false,
    impact: "Fundamental para rutas de trekking y alta montaña"
  },
  {
    id: "fichas-actividad",
    name: "Fichas de Actividades y Niveles de Experiencia",
    category: "andino",
    categoryLabel: "Andino & Aventura",
    source: "Visto en Kgoriwayra",
    desc: "Detalle de caballos de paso, equipamiento de seguridad y categorización (principiante, intermedio, experto).",
    defaultChecked: false,
    impact: "Transmite seguridad total para turismo de aventura"
  },
  {
    id: "multidioma",
    name: "Soporte Multilingüe Nativo (Español / Inglés / PT)",
    category: "andino",
    categoryLabel: "Andino & Aventura",
    source: "Visto en GoTravel",
    desc: "Selector rápido de idioma que traduce tours y precios para captar turistas de EE.UU. y Europa.",
    defaultChecked: false,
    impact: "Multiplica las ventas al mercado extranjero receptivo"
  },

  // 4. Confianza & Fidelización
  {
    id: "testimonios-google",
    name: "Muro de Reseñas de Google Reviews y TripAdvisor",
    category: "confianza",
    categoryLabel: "Confianza & Marca",
    source: "Visto en Demos",
    desc: "Incrustación de opiniones reales con 5 estrellas para validar la reputación de la agencia.",
    defaultChecked: true,
    impact: "El 85% de los turistas lee reseñas antes de reservar"
  },
  {
    id: "sellos-formalidad",
    name: "Sellos de Formalidad (Mincetur, Dircetur, PromPerú)",
    category: "confianza",
    categoryLabel: "Confianza & Marca",
    source: "Recomendado por Molinaz Dev",
    desc: "Insignias de agencia formal registrada, licencias y acreditación oficial.",
    defaultChecked: true,
    impact: "Elimina el miedo a estafas o informalidad en internet"
  },
  {
    id: "blog-guias-seo",
    name: "Blog de Rutas y Guías de Viaje para Google (SEO)",
    category: "confianza",
    categoryLabel: "Confianza & Marca",
    source: "Recomendado por Molinaz Dev",
    desc: "Artículos con consejos de viaje que posicionan en las primeras búsquedas de Google sin pagar anuncios.",
    defaultChecked: false,
    impact: "Tráfico orgánico gratis y constante hacia tus tours"
  },
  {
    id: "descarga-pdf",
    name: "Generador de Ficha de Itinerario en PDF Imprimible",
    category: "confianza",
    categoryLabel: "Confianza & Marca",
    source: "Recomendado por Molinaz Dev",
    desc: "Botón que genera una ficha profesional en PDF con el logotipo de la agencia para enviar por correo.",
    defaultChecked: false,
    impact: "Ideal para cotizaciones formales a grupos o agencias aliadas"
  }
];

export const googleMeetSalesGuide = [
  {
    step: "Paso 1",
    title: "Pregunta su especialidad de tours",
    script: "¿Tu agencia se enfoca en paquetes tradicionales a Machu Picchu, en turismo vivencial comunitario o en deportes de aventura? Tenemos una arquitectura pensada para cada caso."
  },
  {
    step: "Paso 2",
    title: "Muestra la web en vivo compartiendo pantalla",
    script: "Haz clic en 'Abrir Web en Pestaña Completa' para que el cliente viva la experiencia real de navegación sin restricciones de navegador."
  },
  {
    step: "Paso 3",
    title: "Enfócate en las comisiones que dejará de pagar",
    script: "Viator o Civitatis te cobran entre el 20% y el 30% por cada reserva. Con esta web propia, el botón de WhatsApp directo asegura que el 100% de la ganancia sea para ti."
  },
  {
    step: "Paso 4",
    title: "Configura su web en vivo con módulos y colores",
    script: "Baja a la sección 'Configurador en Vivo', elige su paleta favorita de Canva y marca los módulos que necesita. Muéstrale que en 10 a 20 días hábiles la entregamos con feedback continuo hasta que quede a su gusto."
  }
];

