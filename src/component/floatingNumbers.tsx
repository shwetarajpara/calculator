import { useState } from "react";
const symbols: string[] = ["0","1","2","3","4","5","6","7","8","9","+","-","×","÷","%"];
type NumberType = {
  id: number;
  value: string;
  left: number;
  top: number;
  duration: number;
  size: number;
};

const generateNumbers = (): NumberType[] =>
  Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    // value: Math.floor(Math.random() * 10),
    //  value: symbols[Math.floor(Math.random() * symbols.length)],
    value: symbols[Math.floor(Math.random() * symbols.length)],
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 9 + Math.random() * 10,
    size: 10 + Math.random() * 24,
  }));

const FloatingNumbers = () => {
  const [numbers] = useState<NumberType[]>(generateNumbers);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {numbers.map((num) => (
        <span
          key={num.id}
          // className="absolute text-white/30 font-bold animate-float drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          // className="absolute text-cyan-300 font-bold animate-float 
          // drop-shadow-[0_0_5px_rgba(0,255,255,0.8)] 
          // drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
          className="absolute text-purple-300 font-bold animate-float 
          drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]
          drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]
          drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          style={{
            left: `${num.left}%`,
            top: `${num.top}%`,
            fontSize: `${num.size}px`,
            animationDuration: `${num.duration}s`,
          }}
        >
          {num.value}
        </span>
      ))}
    </div>
  );
};

export default FloatingNumbers;