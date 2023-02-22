import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(songs => setSongs(songs.feed.entry))
    }


    return (
        <div>
            <h1>Song List</h1>
            <SongList songs={songs}/>
        </div>
    )
}

export default SongsContainer;