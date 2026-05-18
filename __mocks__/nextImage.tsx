import * as React from 'react';

const NextImage = ({ src, alt, ...props }: any) => {
  const srcValue = typeof src === 'string' ? src : src?.src ?? '';
  return <img src={srcValue} alt={alt} {...props} />;
};

export default NextImage;
