import React from 'react';
import {Highlight, themes} from 'prism-react-renderer';

import '../styles/components/code.scss';

const baseClass = 'eclipse-jkube-code';

const interpolateString = (string, props) => {
  return string.replace(/\${([^${}\s]+)}/g, (original, match) => {
    let prop = {props};
    for (const p of match.split('.')) {
      if (prop[p]) {
        prop = prop[p];
      } else {
        prop = original;
        break;
      }
    }
    return prop;
  });
};

export const Code = ({
  className = '',
  language = className.replace(/language-/, ''),
  children,
  ...props
}) => {
  if (typeof children === 'string') {
    children = children.replace(/\n$/, '');
    children = interpolateString(children, props);
  }
  return (
    <Highlight code={children} language={language} theme={themes.vsLight}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <code className={`${baseClass} ${className}`} style={{...style, backgroundColor: undefined}}>
          {tokens.map((line, index) => {
            const lineProps = {...getLineProps({line, key: index})};
            lineProps.style = {...lineProps.style, display: 'block'}
            return (
              <span key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </span>
            );
          })}
        </code>
      )}
    </Highlight>
  );
};

export const CodeBlock = ({
  className = '',
  children,
  ...props
}) => {
  className += ` ${baseClass}__container`;
  if (/^language-\S+$/.test(children?.props?.className)) {
    className += ` ${children.props.className}`
  }
    return <pre className={className} {...props}>{children}</pre>;
}
