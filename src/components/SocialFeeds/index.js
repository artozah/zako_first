import React from 'react'
import Instafeed from 'react-instafeed';

const SocialFeeds = ({ url, playlist }) => (
    <div id="instafeed" style={{width: '100%'}}>
          <Instafeed
            limit="5"
            resolution="standard_resolution"
            sortBy="most-recent"
            target="instafeed"
            template=""
            userId="7738515646"
            clientId="5d1d114cfe90448daf93d79660f8ed4b"
            accessToken="7738515646.17babc8.c0cfa8b1bee943ae8e8ed7bac1266d7e"
          />
    </div>
)

export default SocialFeeds;
