import SearchInput from './SearchInput'
import MusicInfoContainer from './MusicInfoContainer'
import axios from 'axios';
import React, { useState } from 'react';
import '../styles/MainPage.css'

const MusicSearch = () => {
  const [input, setInput] = useState('')
  const [albumData, setAlbumData] = useState(null)
  const [artistData, setArtistData] = useState(null)

  const URL_ALBUM = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + input + '&api_key='
  const URL_ARTIST = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + input + '&api_key='
  const KEY = '9300e33bbcef7f1603b85ea1ab773dce&format=json'

  const handleInput = (e) => {

    e.preventDefault()
    axios.get(URL_ALBUM + KEY)
      .then((response) => {
        if (!response.data.hasOwnProperty('error')) {
          if (response.data !== null) {
            setAlbumData(response.data)
          }
        }
        else {
          alert(response.data.message)
        }
      }).catch(error => {
        alert(error)
      })

    axios.get(URL_ARTIST + KEY)
      .then((response) => {
        if (!response.data.hasOwnProperty('error')) {
          if (response.data !== null) {
            setArtistData(response.data)
          }
        }
      }).catch(error => {
        alert(error)
      })

  }
  return (
    <div className='mainPage'>
      <h1>MusicInfo</h1>
      <SearchInput handleFunction={handleInput} setInput={setInput} />
      {albumData? albumData !== null && <MusicInfoContainer albumData={albumData} artistData={artistData} /> : ""}
    </div>
  )
}

export default MusicSearch
