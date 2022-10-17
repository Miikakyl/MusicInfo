import React, { useEffect, useState } from 'react';
import '../styles/ArtistInfo.css'

const ArtistInfo = (props) => {
    const [content, setContent] = useState("")

    console.log(props.artistInfo)
    useEffect(() => {

        if (!(props.artistInfo === undefined || props.artistInfo === null)) {

            let slicedContent = props.artistInfo.artist.bio.content.slice(0, props.artistInfo.artist.bio.content.indexOf("<a href"))
            setContent(slicedContent)
        }
    }, [props.artistInfo])

    return (
        <div className='artistInfoContainer'>
            <h1>{props.albumError
                ? "Error"
                : "About"
            }
            </h1>

            <p>{props.albumError
                ? "Unfortunately we didn't find any albums for that artist"
                : content
            }
            </p>
        </div>
    );
}

export default ArtistInfo;