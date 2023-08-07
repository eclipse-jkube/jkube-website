const {defaultLocale} = require('./src/i18n');

exports.onRenderBody = ({pathname, setHtmlAttributes, loadPageDataSync}) => {
  if (process.env.NODE_ENV !== 'development') {
    const {
      result: {pageContext: {locale = defaultLocale}}
    } = loadPageDataSync(pathname);
    setHtmlAttributes({lang: locale.substring(0, locale.indexOf('-'))});
  }
};
