import "./App.css";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white mt-[40px] w-11/12 py-2 px-10 text-center rounded-lg text-3xl font-bold shadow-md">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
