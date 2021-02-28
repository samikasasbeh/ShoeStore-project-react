import React, { Component } from 'react';
import './Contentlanding.css';
import Button from './buttons'

class ContentLand extends Component{
    render(){
        return(
            <div className="content">
                <header>Shoeaholic</header>
                <text>The best shoe store in Town!</text>
                <button>Go to Store</button>
            </div>

        );
    }
}
export default ContentLand;