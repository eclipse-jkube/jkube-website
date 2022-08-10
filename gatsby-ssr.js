const {defaultLangKey} = require('./src/i18n');

exports.onRenderBody = ({pathname, setHtmlAttributes, loadPageDataSync}) => {
  const {
    result: {pageContext: {langKey}},
  } = loadPageDataSync(pathname);
  setHtmlAttributes({lang: langKey ? langKey : defaultLangKey});
};
