import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.giphy.com/v1/gifs/random?api_key=rzFSGilROJolK1A9RGy4YjZpLF0s5BA0`;


const useGif=(tag)=>{
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState("false");

    async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get( tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
}

    useEffect(() => {
    fetchData("car");
    }, []);

    return {gif,loading,fetchData};
}

export default useGif;