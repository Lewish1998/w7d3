import React from "react";
import SongItem from "./SongItem";

const SongList = ({songs}) => {
  const SongItems = songs.map((song, index) => {
    return <SongItem song={song} key={index}/>
  });

  return(
    <div id='song-list'>
        <ol id='ordered-song-list'>
            {SongItems}
        </ol>
    </div>
  )
}

export default SongList