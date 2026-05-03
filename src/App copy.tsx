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

  const btn = `
    h-14 rounded-2xl text-lg font-medium 
    bg-white/5 text-white 
    border border-white/10 
    shadow-md backdrop-blur-md

    hover:bg-white/10 hover:scale-105 
    active:scale-95 
    transition-all duration-150 ease-in-out
    `;

  return (
    <>
    <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-2xl border border-white/10 shadow-2xl">
      {/* <div className="w-full py-6 px-8 bg-blue-500/20 backdrop-blur-lg border border-transparent py-12 px-8 rounded-lg"> */}
        <div className="mb-6">
          {/* <input
            type="text"
            placeholder=""
            className="w-full h-14 border border-gray-300 rounded-lg px-4 text-right text-xl"
          /> */}
          <input
            type="text"
            value={input}
            // readOnly
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full h-20 rounded-2xl px-5 text-right text-2xl bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        <div className="grid grid-cols-4 gap-1">
          <button onClick={() => handleClick("(")} className={btn}>(</button>
          <button onClick={() => handleClick(")")} className={btn}>)</button>
          <button onClick={() => handleClick("pi")} className={btn}>π</button>
          <button onClick={() => handleClick("Math.E")} className={btn}>e</button>
        {/* </div> */}

        {/* <div className="flex"> */}
          <button onClick={() => handleClick("sqrt")} className={btn}>√</button>
          <button onClick={() => handleClick("**2")} className={btn}>x²</button>
          <button onClick={() => handleClick("1/(")} className={btn}>1/x</button>
          <button onClick={() => handleClick("**")} className={btn}>xʸ</button>
        {/* </div> */}

        {/* <div className="flex"> */}
          <button  className={btn} onClick={handleClear}>
            AC
          </button>
          <button  className={btn} onClick={handleBackspace}>
            C
          </button>
          <button  className={btn} onClick={() => handleClick("%")}>
            %
          </button>
          <button  className={btn} onClick={handleBackspace}>
            ⌫
          </button>
        {/* </div> */}

        {/* <div className="flex"> */}
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
          <button  className={btn} onClick={() => handleClick("/")}>
            /
          </button>
        {/* </div> */}
        {/* <div className="flex"> */}
          <button  className={btn} onClick={() => handleClick("4")}>
            4
          </button>
          <button  className={btn} onClick={() => handleClick("5")}>
            5
          </button>
          <button  className={btn} onClick={() => handleClick("6")}>
            6
          </button>
          <button  className={btn} onClick={() => handleClick("X")}>
            X
          </button>
        {/* </div> */}
        {/* <div className="flex"> */}
          <button  className={btn} onClick={() => handleClick("1")}>
            1
          </button>
          <button  className={btn} onClick={() => handleClick("2")}>
            2
          </button>
          <button  className={btn} onClick={() => handleClick("3")}>
            3
          </button>
          <button  className={btn} onClick={() => handleClick("-")}>
            -
          </button>
        {/* </div> */}
        {/* <div className="flex"> */}
          <button  className={btn} onClick={() => handleClick("0")}>
            0
          </button>
          <button  className={btn} onClick={() => handleClick(".")}>
            .
          </button>
          <button  className={btn} onClick={handleCalculate}>
            =
          </button>
          <button  className={btn} onClick={() => handleClick("+")}>
            +
          </button>
        </div>
      </div>
      <FloatingNumbers />
    </>
  )
}

export default App
