type LoopingVideoProps = {
    src: string;
    style?: React.CSSProperties; // optional overrides
  };
  
  export default function LoopingVideos({ src, style }: LoopingVideoProps) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "#666",
          ...style, // allow overrides
        }}
      />
    );
  }