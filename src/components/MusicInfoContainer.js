import React, { useState, useEffect } from "react";
import Album from './Album'
import ArtistInfo from './ArtistInfo'
import ArtistName from "./ArtistName";
import '../styles/MusicInfoContainer.css'


const MusicInfoContainer = (props) => {

    const [albumObjectArray, setalbumObjectArray] = useState([])
    const [albumError, setAlbumError] = useState(false)

    useEffect(() => {

        if (!(props.albumData.topalbums.album.length == 1 && props.albumData.topalbums.album[0].name == "(null)")) {
            let albumCopyArr = new Array()
            for (let i = 0; i < props.albumData.topalbums.album.length; i++) {
                if (i > 7) {
                    break;
                }
                else {
                    albumCopyArr.push({
                        "albumImage": props.albumData.topalbums.album[i].image[2]['#text'],
                        "albumName": props.albumData.topalbums.album[i].name
                    })
                }
            }
            setalbumObjectArray(albumCopyArr)
            setAlbumError(false)
        }
        else {
            setAlbumError(true)        
            setalbumObjectArray([])
        }
    }, [props.albumData])

    return (
        <div className="musicInfoContainer">
            <div className="artistName">
                <ArtistName name={props.artistData.artist.name} />
            </div>
            <div className="albums">
                {
                    albumObjectArray.map(albumData => {
                        return <Album key={albumData.albumName} albumInfo={albumData} />
                    })
                }
            </div>
            <ArtistInfo artistInfo={props.artistData} albumError={albumError}/>
        </div>
    );
}

export default MusicInfoContainer;