import React from 'react';

import imageNotAvailable from '../../../assets/images/image-not-available.png';

type Props = {
  src: string,
  className?: string,
  alt: string,
  onClick: () => void
}

const handlerError = (event: React.InvalidEvent<HTMLImageElement>) => {
  const { target } = event;
  target.src = imageNotAvailable;
};

export const DefaultImage = React.memo(({
  src,
  onClick,
  className,
  alt }: Props) => (

    <img
      role="presentation"
      src={src}
      onKeyDown={onClick}
      onClick={onClick}
      className={className}
      alt={alt}
      onError={handlerError}
      />
));
