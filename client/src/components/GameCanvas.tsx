import { useEffect, useRef } from "react";
import { GameEngine } from "../lib/gameEngine";

interface GameCanvasProps {
  gameEngine: GameEngine | null;
}

export default function GameCanvas({ gameEngine }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !gameEngine) return;

    gameEngine.setCanvas(canvas);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gameEngine.resize(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gameEngine]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
}
