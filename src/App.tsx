import { useEffect, useState } from 'react';
import './App.css'
import FloatingNumbers from './component/floatingNumbers'

function App() {
  const [input, setInput] = useState("");
  const [expression, setExpression] = useState("");
  const handleClick = (value: string) => {
    let newInput = input;
    let newExp = expression;

    const last = input.slice(-1);
    const needsMultiply = /[0-9π)]/.test(last);

    // π
    if (value === "pi") {
      if (needsMultiply) {
        newInput += "×";
        newExp += "*";
      }
      newInput += "π";
      newExp += "Math.PI";
    }

    // √
    else if (value === "sqrt") {
      if (needsMultiply) {
        newInput += "×";
        newExp += "*";
      }
      newInput += "√";
      newExp += "Math.sqrt(";
    }

    // Normal values
    else {
      newInput += value;
      newExp += value;
    }

    // update ONCE
    setInput(newInput);
    setExpression(newExp);
  };
  const handleClear = () => {
    setInput("");
  };

 const handleCalculate = () => {
    try {
      let exp = expression;

      // 👉 Fix symbols
      exp = exp
        .replace(/×/g, "*")
        .replace(/÷/g, "/");

      // 👉 Auto close brackets
      const open = (exp.match(/\(/g) || []).length;
      const close = (exp.match(/\)/g) || []).length;

      if (open > close) {
        exp += ")".repeat(open - close);
      }

      console.log("FINAL EXP:", exp); // debug

      const result = eval(exp);

      setInput(result.toString());
      setExpression(result.toString());
    } catch (err) {
      console.log("ERROR:", err);
      setInput("Error");
      setExpression("");
    }
  };

  // const needsMultiply = (prev:string) => {
  //   if (!prev) return false;

  //   const last = prev.slice(-1);

  //   return (
  //     /[0-9π)]/.test(last) // number, π, or closing bracket
  //   );
  // };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleInputChange = (value: string) => {
    // allow only numbers + operators
    const valid = value.replace(/[^0-9+\-*/%.]/g, "");
    setInput(valid);
  };
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleCalculate();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input]);

  // const btn = `
  //   w-12 h-12 text-sm rounded-full m-1 
  //   border border-transparent 
  //   hover:bg-gray-700 hover:scale-105 
  //   active:scale-90 
  //   focus:outline-none 
  //   focus:ring-2 focus:ring-blue-700 
  //   transition-all duration-150
  //   `;

  // const btn = `
  //   h-14 rounded-2xl text-lg font-medium 
  //   bg-white/5 text-white 
  //   border border-white/10 
  //   shadow-md backdrop-blur-md

  //   hover:bg-white/10 hover:scale-105 
  //   active:scale-95 
  //   transition-all duration-150 ease-in-out
  //   `;

  // Button base
const btn = `
  h-14 rounded-2xl text-base font-medium
  flex items-center justify-center
  bg-[#1c1c1c] text-[#e8e8e8] border border-[#282828]
  transition-all duration-200
  hover:bg-[#242424] hover:border-[#3b82f6]/50
  hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.2)]
  active:scale-95
`;

const dangerBtn = `
  h-14 rounded-2xl text-base font-semibold
  flex items-center justify-center
  bg-[#2a1010] text-[#ff6b6b] border border-[#3a1818]
  transition-all duration-200
  hover:bg-[#351414] hover:border-[#3b82f6]/50
  hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.2)]
  active:scale-95
`;

const operatorBtn = `
  h-14 rounded-2xl text-base font-medium
  flex items-center justify-center
  bg-[#1a1a2e] text-[#8b9ff4] border border-[#2a2a4a]
  transition-all duration-200
  hover:bg-[#222240] hover:border-[#3b82f6]/50
  hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.2)]
  active:scale-95
`;

const fnBtn = `
  h-14 rounded-2xl text-sm font-medium
  flex items-center justify-center
  bg-[#1c1c1c] text-[#888888] border border-[#282828]
  transition-all duration-200
  hover:bg-[#242424] hover:text-[#aaaaaa] hover:border-[#3b82f6]/50
  hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.2)]
  active:scale-95
`;

  return (
    // <>
    // <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-2xl border border-white/10 shadow-2xl">
    //   {/* <div className="w-full py-6 px-8 bg-blue-500/20 backdrop-blur-lg border border-transparent py-12 px-8 rounded-lg"> */}
    //     <div className="mb-6">
    //       {/* <input
    //         type="text"
    //         placeholder=""
    //         className="w-full h-14 border border-gray-300 rounded-lg px-4 text-right text-xl"
    //       /> */}
    //       <input
    //         type="text"
    //         value={input}
    //         // readOnly
    //         onChange={(e) => handleInputChange(e.target.value)}
    //         className="w-full h-20 rounded-2xl px-5 text-right text-2xl bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    //       />
    //     </div>

    //     <div className="grid grid-cols-4 gap-1">
    //       <button onClick={() => handleClick("(")} className={btn}>(</button>
    //       <button onClick={() => handleClick(")")} className={btn}>)</button>
    //       <button onClick={() => handleClick("pi")} className={btn}>π</button>
    //       <button onClick={() => handleClick("Math.E")} className={btn}>e</button>
    //     {/* </div> */}

    //     {/* <div className="flex"> */}
    //       <button onClick={() => handleClick("sqrt")} className={btn}>√</button>
    //       <button onClick={() => handleClick("**2")} className={btn}>x²</button>
    //       <button onClick={() => handleClick("1/(")} className={btn}>1/x</button>
    //       <button onClick={() => handleClick("**")} className={btn}>xʸ</button>
    //     {/* </div> */}

    //     {/* <div className="flex"> */}
    //       <button  className={btn} onClick={handleClear}>
    //         AC
    //       </button>
    //       <button  className={btn} onClick={handleBackspace}>
    //         C
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("%")}>
    //         %
    //       </button>
    //       <button  className={btn} onClick={handleBackspace}>
    //         ⌫
    //       </button>
    //     {/* </div> */}

    //     {/* <div className="flex"> */}
    //       <button
    //          className={btn}
    //         onClick={() => handleClick("7")}
    //       >
    //         7
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("8")}>
    //         8
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("9")}>
    //         9
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("/")}>
    //         /
    //       </button>
    //     {/* </div> */}
    //     {/* <div className="flex"> */}
    //       <button  className={btn} onClick={() => handleClick("4")}>
    //         4
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("5")}>
    //         5
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("6")}>
    //         6
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("X")}>
    //         X
    //       </button>
    //     {/* </div> */}
    //     {/* <div className="flex"> */}
    //       <button  className={btn} onClick={() => handleClick("1")}>
    //         1
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("2")}>
    //         2
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("3")}>
    //         3
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("-")}>
    //         -
    //       </button>
    //     {/* </div> */}
    //     {/* <div className="flex"> */}
    //       <button  className={btn} onClick={() => handleClick("0")}>
    //         0
    //       </button>
    //       <button  className={btn} onClick={() => handleClick(".")}>
    //         .
    //       </button>
    //       <button  className={btn} onClick={handleCalculate}>
    //         =
    //       </button>
    //       <button  className={btn} onClick={() => handleClick("+")}>
    //         +
    //       </button>
    //     </div>
    //   </div>
    //   <FloatingNumbers />
    // </>
  <>
    <div className="min-h-screen flex items-center justify-center rounded-[28px]">
      {/* Calculator card */}
      <div className="relative w-[350px] p-6 rounded-[28px] bg-[#0d0d0d] border border-[#2a2a2a] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
      {/* Orange accent bar at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px]
      bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] rounded-b-sm" />
        {/* Display */}
        <div className="bg-[#141414] rounded-[18px] px-[18px] pt-5 pb-4 mb-5 border border-[#222222] min-h-[100px] flex flex-col justify-end items-end gap-1">
          {/* Expression hint (small, above) */}
          <div className="font-mono text-xs text-[#555555] text-right w-full min-h-[16px] break-all">
            {input}
          </div>
          {/* Main number */}
          <input
            type="text"
            value={input || "0"}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full bg-transparent text-right text-[36px] font-light
              font-mono text-[#f0f0f0] tracking-tight leading-tight
              focus:outline-none break-all"
          />
        </div>
        {/* Button grid */}
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("(")} className={fnBtn}>(</button>
          <button onClick={() => handleClick(")")} className={fnBtn}>)</button>
          <button onClick={() => handleClick("pi")} className={fnBtn}>π</button>
          <button onClick={() => handleClick("Math.E")} className={fnBtn}>e</button>
          <button onClick={() => handleClick("sqrt")} className={fnBtn}>√</button>
          <button onClick={() => handleClick("**2")} className={fnBtn}>x²</button>
          <button onClick={() => handleClick("1/(")} className={fnBtn}>1/x</button>
          <button onClick={() => handleClick("**")} className={fnBtn}>xʸ</button>
          <button  className={dangerBtn} onClick={handleClear}>
            AC
          </button>
          <button  className={dangerBtn} onClick={handleBackspace}>
            C
          </button>
          <button  className={operatorBtn} onClick={() => handleClick("%")}>
            %
          </button>
          <button  className={dangerBtn} onClick={handleBackspace}>
            ⌫
          </button>
          <button
             className={btn}
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button  className={btn} onClick={() => handleClick("8")}>
            8
          </button>
          <button  className={btn} onClick={() => handleClick("9")}>
            9
          </button>
          <button  className={operatorBtn} onClick={() => handleClick("/")}>
            /
          </button>
          <button  className={btn} onClick={() => handleClick("4")}>
            4
          </button>
          <button  className={btn} onClick={() => handleClick("5")}>
            5
          </button>
          <button  className={btn} onClick={() => handleClick("6")}>
            6
          </button>
          <button  className={operatorBtn} onClick={() => handleClick("X")}>
            X
          </button>
          <button  className={btn} onClick={() => handleClick("1")}>
            1
          </button>
          <button  className={btn} onClick={() => handleClick("2")}>
            2
          </button>
          <button  className={btn} onClick={() => handleClick("3")}>
            3
          </button>
          <button  className={operatorBtn} onClick={() => handleClick("-")}>
            -
          </button>
          <button  className={btn} onClick={() => handleClick("0")}>
            0
          </button>
          <button  className={btn} onClick={() => handleClick(".")}>
            .
          </button>
          <button  className={operatorBtn} onClick={handleCalculate}>
            =
          </button>
          <button  className={operatorBtn} onClick={() => handleClick("+")}>
            +
          </button>
        </div>
      </div>
    </div>
    <FloatingNumbers />
    </>
  )
}

export default App