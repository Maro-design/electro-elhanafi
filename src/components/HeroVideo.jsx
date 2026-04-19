import { useEffect, useRef, memo } from 'react';

const HeroVideo = memo(() => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const src = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';
    
    const initHls = async () => {
      const Hls = (await import('hls.js')).default;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    };
    
    initHls();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 1,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
});

export default HeroVideo;
