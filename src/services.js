import React from 'react';
import {API_KEY, PER_PAGE} from './configure';
import Caption from './components/caption';

function loadPhotoFromExplorer (_this) {
    const page = _this.state.page;
    const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&extras=url_l%2Cowner_name%2Curl_z%2Cviews&per_page=${PER_PAGE}&page=${page}&format=json&nojsoncallback=1`;
    getData(url, page, _this);
}

function loadPhotoByTag (tagName, _this) {
    const page = _this.state.page;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tagName}&extras=url_z%2C+title%2C+views%2C+owner_name%2C+url_l&per_page=${PER_PAGE}&page=${page}&format=json&nojsoncallback=1`
    getData(url, page, _this);
}

async function getPromiseData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

function getData (url, page, _this) {
    getPromiseData(url).then(res => {
      console.log(res['photos']['photo']);
      const data = res['photos']['photo'].map(data => {
        const id = data['id'];
        const caption = data['title'];
        const views = data['views'];
        return {
          src: data['url_z'],
          thumbnail: data['url_l'],
          thumbnailWidth: data['width_l'],
          thumbnailHeight: data['height_l'],
          customOverlay:<Caption title={caption} views={views} owner={data['ownername']}/>
        }
      });
      _this.setState({
        PHOTO_SET: _this.state.PHOTO_SET.concat(data),
        page: page + 1
      });
    });
  }

  export {loadPhotoFromExplorer, loadPhotoByTag};