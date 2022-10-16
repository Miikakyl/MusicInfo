import React, { useEffect, useState } from "react";

const ArtistName = (props) => {
    
    const [name, setName] = useState("")

    useEffect(() => {
        setName(props.name)
    }, [props.name])


    return <h2>{name}</h2>
}

export default ArtistName;