import React from 'react';

import imageNotAvailable from '../../../assets/images/image-not-available.png';

type Props = {
  src: string,
  className?: string,
  alt: string
}

const handlerError = (event: React.InvalidEvent<HTMLImageElement>) => {
  const { target } = event;
  target.src = imageNotAvailable;
};

export const DefaultImage = React.memo(({
  src,
  className,
  alt }: Props) => <img src={src} className={className} alt={alt} onError={handlerError} />);
