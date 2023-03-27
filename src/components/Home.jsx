import React, { PureComponent } from 'react'

import logo from '../Bin.png';
import '../css/rotate_img.css';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h1>Main Home</h1>
                <br/>
                <br/>
                <img src={logo} className="rotate_img" alt="Piebin" />
            </div>
        );
    }
}

export default Home;