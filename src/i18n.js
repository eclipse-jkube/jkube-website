
const defaultLangKey = 'en';

const resolveI18nPath = langKey => path =>
  langKey === defaultLangKey ? path : `${langKey}/${path}`;

module.exports = {
  defaultLangKey,
  resolveI18nPath
};
