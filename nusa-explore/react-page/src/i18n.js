import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      reviewTitle: "Your Recent Reviews",
      viewAll: "View All",
      // ...tambahkan lainnya
    }
  },
  id: {
    translation: {
      welcome: "Selamat Datang",
      reviewTitle: "Ulasan Terbaru Anda",
      viewAll: "Lihat Semua",
      // ...tambahkan lainnya
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'id', // bahasa default
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
