import '../styles/Album.css'
import React, { useEffect, useState } from 'react'

const Album = (props) => {
    const [toggle, setToggle] = useState(false)
    const [albumName, setAlbumName] = useState("")
    const [albumImage, setAlbumImage] = useState("")

    useEffect(() => {
        setAlbumName(props.albumInfo.albumName)
        setAlbumImage(props.albumInfo.albumImage)


    }, [props.albumInfo])

    return (
        <div style={{ padding: "4px", }}>
            <div className={`${toggle ? "albumInfoShow" : ""}`}
                onMouseOut={() => { setToggle(!toggle) }}>
                {toggle
                    ? <h2 className="albumTitle">{albumName}</h2>
                    : ""
                }
            </div>
            <img src={albumImage} onMouseEnter={() => { setToggle(!toggle) }}></img>
        </div>
    )
}

export default Album;