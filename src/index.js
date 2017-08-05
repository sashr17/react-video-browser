import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyCBL2iTcO-6gwpJCsUR6wCA6HvbIcsXlC0';

// Component
class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            'videos': [],
            'selectedVideo': null
        };

        this.videoSearch('Mahabharat');
    }

    videoSearch (term) {
        YTSearch({'key': API_KEY, 'term': term}, (videos) => {
            console.log(videos);
            this.setState({
                'videos': videos,
                'selectedVideo': videos[0]
            });
        });
    }

    render () {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Rendering
ReactDOM.render(<App />, document.querySelector('.container'));
