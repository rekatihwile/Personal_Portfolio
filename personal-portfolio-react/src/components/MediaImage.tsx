import { type ImgHTMLAttributes, useEffect, useState } from 'react';
import { getMediaFallback } from '../lib/mediaFallback';

type MediaImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function MediaImage({ src, onError, ...props }: MediaImageProps) {
  const [activeSrc, setActiveSrc] = useState(src);

  useEffect(() => {
    setActiveSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={activeSrc}
      onError={(event) => {
        const fallbackSrc = getMediaFallback(activeSrc);
        if (fallbackSrc && fallbackSrc !== activeSrc) {
          setActiveSrc(fallbackSrc);
          return;
        }

        onError?.(event);
      }}
    />
  );
}
