import React from 'react';
import Gif from './Gif';

const GifList = props => { 
  
  return(
    <ul className="gif-list">
    {
       props.gifs.map(item => (
          <Gif 
            key = {item.id.toString()}
            url = {item.images.fixed_height.url}
          />
        )
      )
    }

      {/* <Gif 
      gifs = {this.props.gifs.map(item => )}
      /> */}

    </ul> 
  );
}

export default GifList;
