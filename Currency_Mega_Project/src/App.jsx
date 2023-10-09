import { useState } from "react";
import "./index.css";
function App() {
  return (
    <>
      <div
        className="flex justify-center text-red-500 w-full items-center h-screen opacity-75 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          SHabbir
        </div>
      </div>
    </>
  );
}

export default App;
