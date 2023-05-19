import React from 'react'
import CreatePlaylist from './CreatePlaylist'
import Nav from './Nav'
import TrendingSongs from './TrendingSongs'
import { useState } from 'react';


const TaskTwo = () => {
  const [addSong, setAddSong] = useState(
    [
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      },
      {
        song: 'Unavailable by Davido'
      
      }
    ]
  ) 

  return (
    <div className='container'>
    <Nav />
    <div className='body'>
    <CreatePlaylist />
    <TrendingSongs addSong={addSong} setAddSong={setAddSong}/>
    </div>
    </div>
  )
}

export default TaskTwo
