// Internationalization configuration and translations

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'ar';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Hero
    'hero.title': 'END TO END',
    'hero.subtitle': 'MUSIC EVENTS',
    'hero.tagline': 'From Underground Shows to Stadium Tours',
    'hero.bookEvent': 'Book Your Event',
    'hero.viewPortfolio': 'View Portfolio',
    
    // Navigation
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.events': 'Coming Events',
    'nav.tickets': 'Ticket Sales',
    'nav.login': 'Login / Register',
    
    // About
    'about.title': 'YOUR SOUND,',
    'about.titleHighlight': 'OUR STAGE',
    'about.showsProduced': 'Shows Produced',
    'about.yearsLive': 'Years Live',
    'about.fansReached': 'Fans Reached',
    
    // Global Stats
    'stats.globalEvents': 'Global Events',
    'stats.countries': 'Countries',
    'stats.cities': 'Cities Worldwide',
    'stats.attendees': 'Total Attendees',
    'stats.artists': 'Artists Booked',
    'stats.venues': 'Partner Venues',
    
    // Services
    'services.title': 'OUR',
    'services.titleHighlight': 'SERVICES',
    'services.subtitle': 'Complete Music Event Solutions',
    'services.learnMore': 'Learn More',
  },
  es: {
    // Hero
    'hero.title': 'DE PRINCIPIO A FIN',
    'hero.subtitle': 'EVENTOS MUSICALES',
    'hero.tagline': 'Desde Shows Subterráneos hasta Giras de Estadios',
    'hero.bookEvent': 'Reserva Tu Evento',
    'hero.viewPortfolio': 'Ver Portafolio',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.news': 'Noticias',
    'nav.events': 'Próximos Eventos',
    'nav.tickets': 'Venta de Entradas',
    'nav.login': 'Iniciar Sesión / Registrarse',
    
    // About
    'about.title': 'TU SONIDO,',
    'about.titleHighlight': 'NUESTRO ESCENARIO',
    'about.showsProduced': 'Shows Producidos',
    'about.yearsLive': 'Años en Vivo',
    'about.fansReached': 'Fans Alcanzados',
    
    // Global Stats
    'stats.globalEvents': 'Eventos Globales',
    'stats.countries': 'Países',
    'stats.cities': 'Ciudades en Todo el Mundo',
    'stats.attendees': 'Asistentes Totales',
    'stats.artists': 'Artistas Contratados',
    'stats.venues': 'Lugares Asociados',
    
    // Services
    'services.title': 'NUESTROS',
    'services.titleHighlight': 'SERVICIOS',
    'services.subtitle': 'Soluciones Completas para Eventos Musicales',
    'services.learnMore': 'Saber Más',
  },
  fr: {
    // Hero
    'hero.title': 'DE BOUT EN BOUT',
    'hero.subtitle': 'ÉVÉNEMENTS MUSICAUX',
    'hero.tagline': 'Des Spectacles Underground aux Tournées de Stade',
    'hero.bookEvent': 'Réserver Votre Événement',
    'hero.viewPortfolio': 'Voir le Portfolio',
    
    // Navigation
    'nav.home': 'Accueil',
    'nav.news': 'Actualités',
    'nav.events': 'Événements à Venir',
    'nav.tickets': 'Billetterie',
    'nav.login': 'Connexion / Inscription',
    
    // About
    'about.title': 'VOTRE SON,',
    'about.titleHighlight': 'NOTRE SCÈNE',
    'about.showsProduced': 'Spectacles Produits',
    'about.yearsLive': 'Années en Direct',
    'about.fansReached': 'Fans Atteints',
    
    // Global Stats
    'stats.globalEvents': 'Événements Mondiaux',
    'stats.countries': 'Pays',
    'stats.cities': 'Villes dans le Monde',
    'stats.attendees': 'Total des Participants',
    'stats.artists': 'Artistes Réservés',
    'stats.venues': 'Lieux Partenaires',
    
    // Services
    'services.title': 'NOS',
    'services.titleHighlight': 'SERVICES',
    'services.subtitle': 'Solutions Complètes pour Événements Musicaux',
    'services.learnMore': 'En Savoir Plus',
  },
  de: {
    // Hero
    'hero.title': 'VON ANFANG BIS ENDE',
    'hero.subtitle': 'MUSIK EVENTS',
    'hero.tagline': 'Von Underground-Shows bis zu Stadion-Tourneen',
    'hero.bookEvent': 'Event Buchen',
    'hero.viewPortfolio': 'Portfolio Ansehen',
    
    // Navigation
    'nav.home': 'Startseite',
    'nav.news': 'Nachrichten',
    'nav.events': 'Kommende Events',
    'nav.tickets': 'Ticketverkauf',
    'nav.login': 'Anmelden / Registrieren',
    
    // About
    'about.title': 'DEIN SOUND,',
    'about.titleHighlight': 'UNSERE BÜHNE',
    'about.showsProduced': 'Produzierte Shows',
    'about.yearsLive': 'Jahre Live',
    'about.fansReached': 'Erreichte Fans',
    
    // Global Stats
    'stats.globalEvents': 'Globale Events',
    'stats.countries': 'Länder',
    'stats.cities': 'Städte Weltweit',
    'stats.attendees': 'Gesamtbesucher',
    'stats.artists': 'Gebuchte Künstler',
    'stats.venues': 'Partner-Veranstaltungsorte',
    
    // Services
    'services.title': 'UNSERE',
    'services.titleHighlight': 'DIENSTLEISTUNGEN',
    'services.subtitle': 'Komplette Musik-Event-Lösungen',
    'services.learnMore': 'Mehr Erfahren',
  },
  ja: {
    // Hero
    'hero.title': 'エンド・トゥ・エンド',
    'hero.subtitle': '音楽イベント',
    'hero.tagline': 'アンダーグラウンドショーからスタジアムツアーまで',
    'hero.bookEvent': 'イベントを予約',
    'hero.viewPortfolio': 'ポートフォリオを見る',
    
    // Navigation
    'nav.home': 'ホーム',
    'nav.news': 'ニュース',
    'nav.events': '今後のイベント',
    'nav.tickets': 'チケット販売',
    'nav.login': 'ログイン / 登録',
    
    // About
    'about.title': 'あなたのサウンド、',
    'about.titleHighlight': '私たちのステージ',
    'about.showsProduced': '制作されたショー',
    'about.yearsLive': 'ライブ年数',
    'about.fansReached': '到達したファン',
    
    // Global Stats
    'stats.globalEvents': 'グローバルイベント',
    'stats.countries': '国',
    'stats.cities': '世界の都市',
    'stats.attendees': '総参加者数',
    'stats.artists': '予約されたアーティスト',
    'stats.venues': 'パートナー会場',
    
    // Services
    'services.title': '私たちの',
    'services.titleHighlight': 'サービス',
    'services.subtitle': '完全な音楽イベントソリューション',
    'services.learnMore': '詳細を見る',
  },
  ar: {
    // Hero
    'hero.title': 'من البداية إلى النهاية',
    'hero.subtitle': 'فعاليات موسيقية',
    'hero.tagline': 'من العروض السرية إلى جولات الملاعب',
    'hero.bookEvent': 'احجز فعاليتك',
    'hero.viewPortfolio': 'عرض الأعمال',
    
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.news': 'الأخبار',
    'nav.events': 'الفعاليات القادمة',
    'nav.tickets': 'بيع التذاكر',
    'nav.login': 'تسجيل الدخول / التسجيل',
    
    // About
    'about.title': 'صوتك،',
    'about.titleHighlight': 'منصتنا',
    'about.showsProduced': 'العروض المنتجة',
    'about.yearsLive': 'سنوات مباشرة',
    'about.fansReached': 'المعجبون الذين تم الوصول إليهم',
    
    // Global Stats
    'stats.globalEvents': 'فعاليات عالمية',
    'stats.countries': 'دول',
    'stats.cities': 'مدن حول العالم',
    'stats.attendees': 'إجمالي الحضور',
    'stats.artists': 'الفنانون المحجوزون',
    'stats.venues': 'الأماكن الشريكة',
    
    // Services
    'services.title': 'خدماتنا',
    'services.titleHighlight': '',
    'services.subtitle': 'حلول كاملة لفعاليات الموسيقى',
    'services.learnMore': 'اعرف المزيد',
  },
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const getTranslation = (key: string, lang: Language = 'en'): string => {
  return translations[lang]?.[key] || translations['en'][key] || key;
};
