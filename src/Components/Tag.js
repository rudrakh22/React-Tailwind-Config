import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.js";
import useGif from "../hooks/useGif"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
    const [tag, setTag] = useState("cat");
//     const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState("false");

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=rzFSGilROJolK1A9RGy4YjZpLF0s5BA0&tag=${tag}`;
//     const { data } = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     console.log(imageSource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function clickHandler() {
//     fetchData();
//   }
    const {gif,loading,fetchData}=useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-md border border-slate-700
        flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-white text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        className="w-10/12 bg-rose-800 text-white py-3 rounded-md font-bold text-xl border-b-2 border-slate-700 mb-[20px]"
        onClick={()=>fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
