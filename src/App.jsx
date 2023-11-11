import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("Skyblue");
  const getColor = (choosenColor) => setColor(choosenColor);

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded-3xl px-3 py-2">
            <ColorButton changeColor={getColor} tc="white" bgc="Red" />
            <ColorButton changeColor={getColor} tc="white" bgc="Green" />
            <ColorButton changeColor={getColor} tc="white" bgc="Blue" />
            <ColorButton changeColor={getColor} bgc="Yellow" />
            <ColorButton changeColor={getColor} tc="white" bgc="Olive" />
            <ColorButton changeColor={getColor} tc="white" bgc="Gray" />
            <ColorButton changeColor={getColor} bgc="Lightgray" />
            <ColorButton changeColor={getColor} bgc="Skyblue" />
            <ColorButton changeColor={getColor} bgc="pink" />
            <ColorButton changeColor={getColor} bgc="#E0F4FF" />
            <ColorButton changeColor={getColor} bgc="#FFD28F" />
            <ColorButton changeColor={getColor} bgc="#FFE3BB" />
            <ColorButton changeColor={getColor} bgc="#B4BDFF" />
            <ColorButton changeColor={getColor} bgc="#83A2FF" />
            <ColorButton changeColor={getColor} bgc="#B9EDDD" />
            <ColorButton changeColor={getColor} bgc="Lavender" />
            <ColorButton changeColor={getColor} bgc="#FFE7CC" />
            <ColorButton changeColor={getColor} tc="white" bgc="#04364A" />
            <ColorButton changeColor={getColor} tc="white" bgc="#512B81" />
            <ColorButton changeColor={getColor} tc="white" bgc="#4E4FEB" />
            <ColorButton changeColor={getColor} tc="white" bgc="#0B666A" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
