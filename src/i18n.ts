import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pt_arc from './locales/pt';
import en_arc from './locales/en';

Vue.use(VueI18n);

const messages = {
  pt: pt_arc,
  en: en_arc
};

const i18n = new VueI18n({
  locale: 'en', // Defina o idioma padrão aqui
  messages,
});

export default i18n;