import React, { Component } from 'react';
import NavBar from '../components/navbar';
import {loadPhotoByTag} from '../services';
import GalleryView from '../components/galleryView';

class SearchTag extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            page: 1,
            PHOTO_SET: []
        }
    }

    loadMoreData = () => {
        setTimeout(() => {
            loadPhotoByTag(this.props.match.params.tagName, this);
        }, 1500)
    }

    componentDidMount() {
        console.log("ComponentDidMount is called")
        loadPhotoByTag(this.props.match.params.tagName, this);
    }

    handleClick(tagname){
        console.log('handleClick'+tagname);
        this.setState({PHOTO_SET: []});
        loadPhotoByTag(tagname, this);
    }

    render() {
        return (
            <div>
                <NavBar onClick={(tagname)=>this.handleClick(tagname)}/>
                <GalleryView PHOTO_SET = {this.state.PHOTO_SET} next={this.loadMoreData}/>
            </div>
        );
    }
}

export default SearchTag;