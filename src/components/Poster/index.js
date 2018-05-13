import React from 'react'
import zako from './zako2.jpg'
import romano from './romano.jpg'

const Poster = () => (
    <div style={{position: 'relative', width: '100%', height: 400}}>
        <img
            src={zako}
            width="50%"
            height="100%"
        />
        <img
            src={romano}
            width="50%"
            height="100%"
        />
        <div style={{position: 'absolute', color: '#fff', bottom: 100, left: 0, right: 0}}>
            <h3>Alexandr Zakhozhyi</h3>
            <h3>VS</h3>
            <h3>Sergio Romano</h3>
        </div>
    </div>
)

export default Poster;
