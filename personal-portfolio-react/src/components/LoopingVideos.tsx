import { useState } from 'react';

type LoopingVideoProps = {
  src: string;
  text?: string;
  className?: string;
};

export default function LoopingVideos({ src, text, className }: LoopingVideoProps) {
  const [controls, setControls] = useState(false);

  return (
    <div
      className="group text-sm"
      onMouseEnter={() => setControls(true)}
      onMouseLeave={() => setControls(false)}
      onFocus={() => setControls(true)}
      onBlur={() => setControls(false)}
      onClick={() => setControls(true)}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls={controls}
        preload="metadata"
        className={`bg-[#15191c] shadow-[0_18px_70px_rgba(0,0,0,0.24)] ${className || ''}`}
      />
      {text && <div className="mt-3 text-sm leading-relaxed text-gray-400">{text}</div>}
    </div>
  );
}
