import { useEffect, useState } from 'react';

export default function App() {
  const [letters, setLetters] = useState<{ id: number; x: number; y: number; char: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetters(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: -20,
          char: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        },
      ]);
    }, 300);

    const moveInterval = setInterval(() => {
      setLetters(prev =>
        prev
          .map(l => ({ ...l, y: l.y + 5 }))
          .filter(l => l.y < window.innerHeight + 20)
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <div>
      {letters.map(letter => (
        <div
          key={letter.id}
          style={{
            position: 'absolute',
            left: letter.x,
            top: letter.y,
            fontSize: 24,
            color: 'black',
            pointerEvents: 'none',
          }}
        >
          {letter.char}
        </div>
      ))}
    </div>
  );
}
