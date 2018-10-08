import React, { Component } from 'react';
import NavBar from '../components/navbar';
import {loadPhotoFromExplorer} from '../services';
import GalleryView from '../components/galleryView';
class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      PHOTO_SET: []
    }
  }

  loadMoreData = () => {
    setTimeout(() => {
      loadPhotoFromExplorer(this);
    }, 1500)
  }

  componentDidMount() {
    console.log("ComponentDidMount is called")
    loadPhotoFromExplorer(this);
  }

  render() {
    return (
      <div>
        <NavBar onClick={(tagName)=>{}}/>
        <GalleryView PHOTO_SET = {this.state.PHOTO_SET} next={this.loadMoreData}/>
      </div>
    );
  }
}

export default Explorer;
