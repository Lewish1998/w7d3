import React from "react";
import SongItem from "./SongItem";

const SongList = ({songs}) => {
  const SongItems = songs.map((song, index) => {
    return <SongItem song={song} key={index}/>
  });

  return(
    <div>
        <ol>
            {SongItems}
        </ol>
    </div>
  )
}

export default SongList