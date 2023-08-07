
const defaultLocale = 'en-US';

const resolveI18nPath = locale => path => {
  if (locale === defaultLocale) {
    return path;
  }
  return `${locale.substring(0, locale.indexOf('-'))}/${path}`;
};

module.exports = {
  defaultLocale,
  resolveI18nPath
};
