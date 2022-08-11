const {defaultLangKey} = require('./src/i18n');

exports.onRenderBody = ({pathname, setHtmlAttributes, loadPageDataSync}) => {
  if (process.env.NODE_ENV !== 'development') {
    const {
      result: {pageContext: {langKey}},
    } = loadPageDataSync(pathname);
    setHtmlAttributes({lang: langKey ? langKey : defaultLangKey});
  }
};
