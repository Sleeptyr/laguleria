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
    schedule: 'Viernes y Sábados 9 a 13 y 17 a 19 hs • Domingos 9 a 13 hs',
    email: 'contacto@laguleria.com.ar'
  },

  // Historia y creadores
  story: {
    badge: 'Arias 730 • Junín',
    greeting: 'Hola, somos Martín & Francina',
    title: 'Cocina con ganas y cosas ricas para pecar',
    intro: 'Somos dos cocineros apasionados por el oficio. En nuestro espacio en Arias 730 elaboramos todo a mano: desde medialunas hojaldradas y nuestras clásicas tortas negras rellenas, hasta las pastas caseras del domingo.',
    paragraph1: 'Creemos en la comida que te alegra el día: manteca de primera calidad, fermentaciones con tiempo y recetas generosas para compartir en familia o con amigos.'
  },

  // Lo que hacemos: Especialidades tentadoras reales
  specialties: [
    {
      title: 'Tortas Negras Rellenas',
      subtitle: 'El clásico indiscutido de La Gulería',
      description: 'Masa tierna y esponjosa, abundante azúcar negra tostada y un relleno generoso de dulce de leche para saciar cualquier antojo.',
      tag: 'La Estrella de la Casa'
    },
    {
      title: 'Medialunas & Danesas de Manteca',
      subtitle: 'Hojaldre crujiente y aroma a horno',
      description: 'Laminadas con manteca pura y fermentación lenta. Doradas, livianas y con el punto justo de brillo y crocancia en cada capa.',
      tag: 'Recién Horneadas'
    },
    {
      title: 'Pastas Caseras del Domingo',
      subtitle: 'La mesa familiar de fin de semana',
      description: 'Sorrentinos rellenos, canelones artesanales y salsas frescas listas para llevar y disfrutar un almuerzo de autor en tu casa.',
      tag: 'Fines de Semana'
    }
  ],

  // Frases del banner rotativo (reales, tentadoras y sin emojis)
  marqueeItems: [
    'Tortas negras rellenas de dulce de leche',
    'Medialunas 100% manteca',
    'Martín & Francina en la cocina',
    'Pastas caseras de domingo',
    'Arias 730 • Junín',
    'Danesas y pastelería fresca',
    'Hornadas del día'
  ]
};

export function getWhatsAppUrl(location: string = 'web'): string {
  const phone = siteConfig.contact.whatsappNumber;
  const msg = encodeURIComponent(`¡Hola Martín y Francina! Les quería consultar por un pedido para retirar en Arias 730...`);
  return `https://wa.me/${phone}?text=${msg}&utm_source=web&utm_medium=button&utm_campaign=${location}`;
}
