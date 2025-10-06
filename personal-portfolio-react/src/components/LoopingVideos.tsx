type LoopingVideoProps = {
  src: string;
  text?: string;
  className?: string;
};

export default function LoopingVideos({ src, text, className }: LoopingVideoProps) {
  return (
    <div
      className="hover:brightness-110 hover:scale-102 text-sm hover:text-lg
         transition-all ease-in "
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`rounded-lg bg-gray-600  ${className || ''}`}
      />
      <div className="mt-2 text-gray-300">{text}</div>
    </div>
  );
}
