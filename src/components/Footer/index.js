import React from 'react';
import SocialIcons from '../SocialIcons';

const Footer = () => (
    <div>
        <ul style={{display: 'flex', listStyleType: 'none', justifyContent: 'space-around', alignItems: 'center'}}>
            <li>
                <p>© 2018 Alexandr Zakhozhyi. All rights reserved.</p>
            </li>
            <li>
                <span>EN</span>
            </li>
            <li>
                <SocialIcons />
            </li>
        </ul>
    </div>
);

export default Footer;
