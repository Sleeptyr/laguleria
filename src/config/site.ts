/**
 * CONFIGURACIÓN CENTRAL DE LA GULERÍA
 * Web institucional y de presentación centrada en quiénes son Martín & Francina.
 */

export const siteConfig = {
  brandName: 'La Gulería',
  tagline: 'Cocina artesanal por Martín Tonidandel & Francina Melo',
  city: 'Junín, Buenos Aires',
  description: 'Somos Martín Tonidandel y Francina Melo. Creamos La Gulería en Junín para compartir nuestra pasión por la panadería de masa madre y la cocina artesanal.',
  url: 'https://laguleria.com.ar',

  // Colores oficiales
  theme: {
    colorPrimary: '#E6A192',
    colorPrimaryDark: '#D48877',
    colorAccent: '#261F1C',
    colorDark: '#261F1C',
    colorCream: '#E6A192',
    colorSurface: '#FAF2EC',
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

  // Historia personal
  story: {
    badge: 'Quiénes somos',
    greeting: 'Hola, somos Martín & Francina',
    title: 'Bienvenidos a La Gulería',
    intro: 'Cocinamos juntos, investigamos masas y creamos este rincón en Junín para compartir lo que más amamos: la pastelería y la panadería artesanal hecha con el corazón, sin apuros ni atajos.',
    paragraph1: 'Detrás de cada preparación que sale del horno estamos nosotros dos. La Gulería no es una fábrica ni una franquicia: es nuestro taller de cocina, un espacio donde reivindicamos el oficio de hacer las cosas bien.',
    paragraph2: 'Creemos en las fermentaciones largas, en usar manteca de verdad y en darle a cada masa el tiempo que necesita. Para nosotros, la cocina es una forma de dar cariño y reunir a la gente alrededor de la mesa.'
  },

  // El Proyecto / Lo que hacemos
  craft: {
    badge: 'Nuestra cocina',
    title: 'Masa madre, manteca y paciencia',
    subtitle: 'Hacemos lotes chicos y horneamos a diario para cuidar cada detalle.',
    details: [
      {
        title: 'Fermentación lenta',
        description: 'Usamos masa madre y fermentaciones prolongadas para lograr digestibilidad, aroma profundo y textura inolvidable.'
      },
      {
        title: 'Materia prima noble',
        description: 'Harinas limpias, manteca de primera calidad y recetas creadas sin conservantes ni premezclas.'
      },
      {
        title: 'Elaboración a la vista',
        description: 'En Arias 730 cuidamos cada bandeja que sale del horno para que llegue a tu mesa en su mejor momento.'
      }
    ]
  },

  // Frases del banner rotativo (sin emojis)
  marqueeItems: [
    'Masa madre de fermentación lenta',
    'Martín & Francina',
    'Manteca pura de primera calidad',
    'Arias 730 • Junín',
    'Sin premezclas ni aditivos',
    'Hecho a mano cada día',
    'El oficio de cocinar con calma'
  ]
};

export function getWhatsAppUrl(location: string = 'web'): string {
  const phone = siteConfig.contact.whatsappNumber;
  const msg = encodeURIComponent(`¡Hola Martín y Francina! Vi la web de La Gulería y les quería escribir para...`);
  return `https://wa.me/${phone}?text=${msg}&utm_source=web&utm_medium=button&utm_campaign=${location}`;
}
