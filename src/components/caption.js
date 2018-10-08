import React, { Component } from 'react';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons';

library.add([faStar, faComment]);
class Caption extends Component {
    render() {
        return (
            <div style={{position: 'relative',height: '280px', width: '100%'}}>
                <div style={{position: 'absolute',bottom: '0px', width: '100%'}}>
                <div className='littleBlack'>
                    <div className='bottomContainer'>
                        <div className='authur'>
                            <div>
                                <text className='title'>{this.props.title}</text>
                            </div>
                            <div>
                                <text className='owner'>{this.props.owner}</text>
                            </div>
                        </div>
                        <div className='moreInfo'>
                            <FontAwesomeIcon style={{ color: 'white' }} size='1x' far icon='star'></FontAwesomeIcon>
                            <text className='info-text'>{this.props.views}</text>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default Caption;
