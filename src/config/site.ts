/**
 * CONFIGURACIÓN CENTRAL DE LA GULERÍA
 * Todos los textos, enlaces y opciones del sitio institucional / presentación.
 */

export const siteConfig = {
  // Identidad básica
  brandName: 'La Gulería',
  tagline: 'Panadería & Pastelería de Especialidad',
  city: 'Junín, Buenos Aires',
  description: 'La Gulería es una propuesta gastronómica artesanal en Junín, Buenos Aires. Masa madre, fermentación lenta y cocina con oficio a cargo de Martín Tonidandel y Francina Melo.',
  url: 'https://laguleria.com.ar',

  // Colores oficiales extraídos directamente del logo
  theme: {
    colorPrimary: '#E6A192', // Rosa cálido oficial del logo de La Gulería
    colorPrimaryDark: '#D48877',
    colorAccent: '#2E2724',
    colorAccentHover: '#181412',
    colorDark: '#261F1C', // Oscuro profundo / café tostado del texto "gulería"
    colorCream: '#E6A192',
    colorSurface: '#FAF2EC', // Crema suave para tarjetas (del texto "la")
    colorMuted: '#5C4A44'
  },

  // Contacto & Ubicación
  contact: {
    whatsappNumber: '5492364266984',
    instagramHandle: '@laguleria_',
    instagramUrl: 'https://instagram.com/laguleria_',
    address: 'Arias 730, Junín, Buenos Aires',
    googleMapsUrl: 'https://maps.google.com/?q=Arias+730,+Junin,+Buenos+Aires,+Argentina',
    schedule: 'Jueves a Domingos desde las 19:30 hs',
    email: 'contacto@laguleria.com.ar'
  },

  // Mensajes de contacto por WhatsApp
  whatsappMessages: {
    header: '¡Hola La Gulería! Vi la web y les escribo para consultarles:',
    hero: '¡Hola La Gulería! Me encantó la propuesta, les escribo para coordinar:',
    footer: '¡Hola La Gulería! Les escribo desde la web para hacer una consulta:'
  },

  // Cintas / Marquee de presentación
  marqueeItems: [
    'Panadería de especialidad',
    'Masa madre & fermentación lenta',
    'Manteca de verdad, cero atajos',
    'Hecho a mano en Junín',
    'Arias 730, Junín',
    'Oficio, fuego y textura'
  ],

  // Sección "Nuestra Filosofía / El Oficio" (Reemplaza a los pasos de venta)
  philosophy: {
    badge: 'Nuestra propuesta',
    title: 'El placer de hacer las cosas bien',
    subtitle: 'Creemos en la cocina sin trampas: procesos lentos, materia prima noble y respeto absoluto por cada masa.',
    pillars: [
      {
        number: '01',
        title: 'Masa & Fermentación',
        description: 'Harinas seleccionadas, fermentaciones largas y paciencia. El tiempo es el ingrediente que no se puede reemplazar.'
      },
      {
        number: '02',
        title: 'Hojaldre & Manteca',
        description: 'Hojaldrado crocante por fuera, aireado y tierno por dentro. Horneado a diario para que cada bocado cruja como debe.'
      },
      {
        number: '03',
        title: 'Pasión por Compartir',
        description: 'Una cocina cercana y cálida en Arias 730. Pensada para disfrutar el momento y saciar el antojo sin culpa.'
      }
    ],
    footNote: 'Elaboración fresca en Arias 730, Junín • Jueves a Domingos desde las 19:30 hs'
  },

  // Sección de los Creadores (Martín & Francina)
  creators: {
    badge: 'Quiénes somos',
    title: 'Detrás del Oficio',
    names: 'Martín Tonidandel & Francina Melo',
    photo: '/images/creadores.webp',
    alt: 'Martín Tonidandel y Francina Melo en La Gulería',
    bio: 'Detrás de La Gulería estamos nosotros. Empezamos con una sola obsesión: reivindicar el oficio de la panadería artesanal, jugar con texturas y llevar a Junín productos con alma propia. Cada preparación que sale del horno tiene nuestras manos, dedicación y mucho amor por la cocina bien hecha.'
  },

  // Analítica (desactivada por defecto)
  analytics: {
    enabled: false,
    googleAnalyticsId: '',
    metaPixelId: ''
  }
};

/**
 * Genera el enlace oficial a WhatsApp
 */
export function getWhatsAppUrl(location: 'header' | 'hero' | 'footer' = 'hero'): string {
  const phone = siteConfig.contact.whatsappNumber;
  const rawMsg = siteConfig.whatsappMessages[location] || siteConfig.whatsappMessages.hero;
  const encodedText = encodeURIComponent(rawMsg);
  return `https://wa.me/${phone}?text=${encodedText}&utm_source=web&utm_medium=button&utm_campaign=${location}`;
}
