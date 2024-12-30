import { useState } from "react";

function Bg_changer() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className={`h-screen bg-${color}`}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex rounded-xl bg-white p-2 m-25">
          <button
            className="p-2 m-2 rounded-xl bg-red-400 shadow"
            onClick={() => setColor("red-400")}
          >
            Red
          </button>
          <button
            className="p-2 m-2 rounded-xl bg-blue-400 shadow"
            onClick={() => setColor("blue-400")}
          >
            Blue
          </button>
          <button
            className="p-2 m-2 rounded-xl bg-orange-400 shadow"
            onClick={() => setColor("orange-400")}
          >
            Orange
          </button>
          <button
            className="p-2 m-2 rounded-xl bg-purple-400 shadow"
            onClick={() => setColor("purple-400")}
          >
            Purple
          </button>
          <button
            className="p-2 m-2 rounded-xl bg-pink-400 shadow"
            onClick={() => setColor("pink-400")}
          >
            Pink
          </button>
          <button
            className="p-2 m-2 rounded-xl bg-yellow-400 shadow"
            onClick={() => setColor("yellow-400")}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default Bg_changer;
