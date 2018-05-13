import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({ url, playlist }) => (
    <div style={{width: '100%', height: 500}}>
        <ReactPlayer
            url={url}
            controls
            width="100%"
            height="100%"
            config={{
                youtube: {
                  playerVars: { loop: 1, showinfo: 1, playlist }
                }
            }}
        />
    </div>
)

export default Player;
