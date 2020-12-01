import React, { useState, useEffect } from "react";

import "../home/home.css" 

export const Trending = () => {
    const [trendingData, handleTrendingData] = useState({})
    
    const getTrendingData = async () => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=Lc4axdf3A4Qp9w04vYvVSmmI2uTSly7n&limit=25&rating=g`)
        const getData = await data.json()
        return handleTrendingData(getData)
    }

    useEffect(() => {
        return getTrendingData()
    }, [])

    return <div className="wrapper">
        {trendingData.data && trendingData.data.map(gifImage => {
            const src = gifImage.images.original_mp4.mp4
            return <video src={src}>
            </video>
        })}
    </div>
}