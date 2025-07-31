import { useRhythm } from "../lib/stores/useRhythm";

export default function FlashOverlay() {
  const flashIntensity = useRhythm((state) => state.flashIntensity);

  if (flashIntensity <= 0) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle, rgba(255,255,255,${flashIntensity * 0.8}) 0%, rgba(255,200,100,${flashIntensity * 0.6}) 30%, rgba(255,100,200,${flashIntensity * 0.4}) 60%, transparent 100%)`,
        opacity: flashIntensity,
        mixBlendMode: 'screen'
      }}
    />
  );
}