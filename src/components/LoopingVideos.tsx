import { useEffect, useRef, useState } from 'react';

// Named size presets — each maps to a CSS variable in index.css :root.
// Tune the variables there to resize all videos of that size at once.
export type VideoSize = 'xs' | 'sm' | 'md' | 'lg' | 'full';

const SIZE_VAR: Record<VideoSize, string> = {
  xs:   'var(--media-xs)',    // ~320px — thumbnail / small inline
  sm:   'var(--media-sm)',    // ~480px — small / accent
  md:   'var(--media-md)',    // ~720px — medium, alongside text
  lg:   'var(--media-lg)',    // ~896px — large standalone
  full: 'var(--media-full)',  // 100%   — fills column
};

type LoopingVideoProps = {
  src: string;
  text?: string;
  poster?: string;
  startAt?: number;
  /** Extra CSS classes for visual styling: rounded-xl, border, etc. (not sizing) */
  className?: string;
  /**
   * Named size preset — maps to --media-xs/sm/md/lg/full in index.css.
   * Default: 'full' (fills the column).
   */
  size?: VideoSize;
  /**
   * Portrait / vertical video mode.
   * Applies --media-portrait-h as max-height so tall videos don't dominate the page.
   * Combine with size= to also cap the width.
   */
  portrait?: boolean;
  /**
   * Per-instance width override — any valid CSS value.
   * Examples: '800px', '60%', 'var(--media-lg)'
   * Overrides the size= preset.
   */
  maxWidth?: string;
  /**
   * Per-instance height override — any valid CSS value.
   * Examples: '400px', 'var(--media-portrait-h)'
   * Overrides the portrait= default.
   */
  maxHeight?: string;
};

export default function LoopingVideos({
  src,
  text,
  poster,
  startAt = 0,
  className,
  size = 'full',
  portrait = false,
  maxWidth,
  maxHeight,
}: LoopingVideoProps) {
  const [controls, setControls] = useState(false);
  const hasSeekedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only download + play once the video scrolls near the viewport, and pause
  // again when it leaves — keeps pages with several demos from fetching
  // everything up front.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay rejection is fine */
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = {
    width: maxWidth ?? SIZE_VAR[size],
    ...(portrait && !maxHeight ? { maxHeight: 'var(--media-portrait-h)' } : {}),
    ...(maxHeight ? { maxHeight } : {}),
  };

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
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        controls={controls}
        preload="none"
        onLoadedMetadata={(event) => {
          if (startAt <= 0 || hasSeekedRef.current) return;
          const video = event.currentTarget;
          const safeStartTime = Math.min(startAt, Math.max(video.duration - 0.1, 0));
          video.currentTime = safeStartTime;
          hasSeekedRef.current = true;
        }}
        style={style}
        className={`block mx-auto max-w-full bg-[#15191c] shadow-[0_18px_70px_rgba(0,0,0,0.24)] ${className ?? ''}`}
      />
      {text && <div className="mt-3 text-sm leading-relaxed text-gray-400">{text}</div>}
    </div>
  );
}
