/**
 * CONFIGURACIÓN CENTRAL DE LA GULERÍA
 * Todos los textos, enlaces, números de contacto y opciones editables del sitio.
 * Modificá este archivo para actualizar cualquier dato de la landing.
 */

export const siteConfig = {
  // Identidad básica
  brandName: 'La Gulería',
  tagline: 'Pecar nunca fue tan rico',
  city: 'Junín, Buenos Aires',
  description: 'Landing page oficial de La Gulería en Junín. Propuesta gastronómica de alto impacto y placer sin culpa. Escribinos directo por WhatsApp para pedidos, consultas y reservas.',
  url: 'https://laguleria.com.ar',

  // Colores oficiales extraídos directamente del logo
  theme: {
    colorPrimary: '#E6A192', // Rosa cálido oficial del logo de La Gulería
    colorPrimaryDark: '#D48877',
    colorAccent: '#2E2724', // Carbón profundo para máxima legibilidad y punch
    colorAccentHover: '#181412',
    colorDark: '#261F1C', // Oscuro profundo / café tostado del texto "gulería"
    colorCream: '#E6A192', // Fondo general con el rosa del logo
    colorSurface: '#FAF2EC', // Crema suave para tarjetas (del texto "la")
    colorMuted: '#5C4A44'
  },

  // Contacto & Redes (Completar con datos finales de los clientes)
  contact: {
    // Número con código de país sin espacios ni símbolos (+). Ej: 5492364XXXXXX
    whatsappNumber: '5492364000000', // [REEMPLAZAR CON NÚMERO REAL]
    instagramHandle: '@laguleria_',
    instagramUrl: 'https://instagram.com/laguleria_',
    address: 'Junín, Buenos Aires, Argentina', // [REEMPLAZAR CON DIRECCIÓN EXACTA]
    googleMapsUrl: 'https://maps.google.com/?q=Junin,+Buenos+Aires,+Argentina', // [REEMPLAZAR CON LINK GOOGLE MAPS]
    schedule: 'Jueves a Domingos de 19:30 a 00:00 hs', // [REEMPLAZAR CON HORARIOS REALES]
    email: 'contacto@laguleria.com.ar' // [OPCIONAL]
  },

  // Mensajes prearmados para WhatsApp por ubicación
  whatsappMessages: {
    header: '¡Hola La Gulería! Vi la web y les escribo para hacerles una consulta:',
    hero: '¡Hola La Gulería! Quiero pecar, les escribo para coordinar un pedido/reserva:',
    footer: '¡Hola La Gulería! Les escribo desde el pie de la web para consultar:'
  },

  // Cintas / Marquee
  marqueeItems: [
    'Pecar nunca fue tan rico',
    'Gula pura, cero culpa',
    'Cocina de autor en Junín',
    'El verdadero pecado gastronómico',
    'Fuego, texturas y sabor descarado',
    'Pedidos & reservas directo por WhatsApp'
  ],

  // Sección "Cómo funciona" (3 pasos indispensables)
  howItWorks: {
    title: 'Cómo saciar el antojo',
    subtitle: 'Sin formularios eternos ni vueltas. En tres pasos ya estás comiendo.',
    steps: [
      {
        number: '01',
        title: 'Tocá el botón',
        description: 'Hacé clic en cualquier botón de la página para abrir nuestro WhatsApp directo.'
      },
      {
        number: '02',
        title: 'Contanos qué querés',
        description: 'Decinos si buscás delivery, retiro en el local, una reserva o tenés alguna consulta.'
      },
      {
        number: '03',
        title: 'Coordinamos al toque',
        description: 'Te confirmamos disponibilidad al instante y preparamos tu pecado gastronómico.'
      }
    ],
    deliveryNote: 'Take away y envíos en Junín. Horarios de atención: Jue a Dom desde las 19:30 hs.'
  },

  // Sección "Detrás del Fuego" (Opcional, alternable con este booleano)
  behindTheFire: {
    enabled: true, // Si el cliente prefiere no mostrarla, cambiar a false
    title: 'Detrás del Fuego',
    creators: 'Martín Tonidandel & Francina Melo',
    photo: '/images/creadores.webp',
    alt: 'Martín Tonidandel y Francina Melo en La Gulería',
    bio: 'Nacimos con una sola obsesión: cocinar bien, jugar con texturas que sorprendan y llevar la escena gastronómica de Junín más lejos. Sin caretas, sin timidez y con producto de primera calidad para que cada bocado sea una fiesta.'
  },

  // Analítica (desactivada por defecto hasta confirmación legal y configuración)
  analytics: {
    enabled: false,
    googleAnalyticsId: '', // Ej: G-XXXXXXXXXX
    metaPixelId: '' // Ej: 1234567890
  }
};

/**
 * Genera el enlace oficial a WhatsApp con UTMs y texto codificado
 */
export function getWhatsAppUrl(location: 'header' | 'hero' | 'footer' = 'hero'): string {
  const phone = siteConfig.contact.whatsappNumber;
  const rawMsg = siteConfig.whatsappMessages[location] || siteConfig.whatsappMessages.hero;
  const encodedText = encodeURIComponent(rawMsg);
  return `https://wa.me/${phone}?text=${encodedText}&utm_source=landing&utm_medium=button&utm_campaign=${location}`;
}
