import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.css';

export default class GalleryView extends Component {
    render() {
        return (
            <div className='container'>
                <InfiniteScroll
                    dataLength={this.props.PHOTO_SET.length}
                    hasMore={true}
                    loader={<div>Loading</div>}
                    next={()=>this.props.next()}>
                    <div>
                        <Gallery
                            images={this.props.PHOTO_SET}
                            rowHeight={280}
                        ></Gallery>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}