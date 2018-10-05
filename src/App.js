import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      per_page: 20,
      page: 1,
      api_key: '77fe3ca2f7e8256245c1410b5c68f1be',
      PHOTO_SET: []
    }
  }

  getData = () => {
    const api_key = this.state.api_key;
    const per_page = this.state.per_page;
    const page = this.state.page;
    const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&extras=o_dims%2Cviews&per_page=${per_page}&page=${page}&format=json&nojsoncallback=1`;
    axios.get(url).then(res => {
      console.log(res['data']['photos']['photo']);
      const data = res['data']['photos']['photo'].map(data => {
        const id = data['id'];
        const farm_id = data['farm'];
        const secret = data['secret'];
        const server_id = data['server'];
        const o_width = data['o_width'];
        const o_height = data['o_height'];
        const caption = data['title'];
        const views = data['views'];
        return {
          src: `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_z.jpg`,
          thumbnail: `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_z.jpg`,
          thumbnailWidth: o_width ? o_width : 900,
          thumbnailHeight: o_height ? o_height : 600,
          caption: 'Title: '+caption+', Views: '+views
        }
      });
      this.setState({
        PHOTO_SET: this.state.PHOTO_SET.concat(data),
        page: page+1
      });
    });
  }

  loadMoreData = () => {
    setTimeout(() => {
      this.getData();
    }, 1500)
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.PHOTO_SET.length}
        hasMore={true}
        loader={<div>loading</div>}
        next={this.loadMoreData}
      >
        <div>
          <Gallery 
          images={this.state.PHOTO_SET}
          ></Gallery>
        </div>
      </InfiniteScroll>
    );
  }
}

export default App;
