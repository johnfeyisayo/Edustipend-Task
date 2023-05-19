import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TrendingSongs = ( {addSong, setAddSong}) => {
    const [noOfElement, setNoOfElement] = useState(5);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    }

    const sliced = addSong.slice(0, noOfElement);
  return (
    <div className='trending-song-container'>
    <h3 className='trending-song-header'>Trending Songs</h3>
    {sliced.map((item, index)=>
    <div className='trending-songs'>
    <p key={index} className="trending-song">{item.song}</p>
    <FontAwesomeIcon icon={faPlus}  className='plus' />
    </div>
    )}
    <button className='view-more' onClick={() => loadMore()}>View more</button>
    </div>
  )
}
TrendingSongs.propTypes = {
    addSong: PropTypes.array,
    setAddSong: PropTypes.array 
  };

export default TrendingSongs
