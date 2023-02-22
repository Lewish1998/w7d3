const SongItem = ({song}) => {

    const playPreview = () => {
      
    }

    return(<div>
    <li id="song-id">
        Title: {song['im:name'].label}
        <br></br>
        Artist: {song['im:artist'].label}
        <br></br>
        Genre: {song['category']['attributes'].label}
        <br></br>
        <img src={song['im:image'][0].label} width='100px'></img> 
        <audio controls><source src={song['link'][1].attributes.href}/></audio>
    </li>

    </div>
    )
};

export default SongItem