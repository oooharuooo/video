import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    // videos as an empty array for the list of array back from youtube api
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit("coding")
    }
    onTermSubmit = async (term) => {
        const response = await Youtube.get("/search", {
            params: {
                q: term,
            }
        })
        this.setState({
            videos: response.data.items,
            // Appear at first video searched
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    render() {
        return (
            <div className="ui container">
                {/* passing a prop to SearchBar */}
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className ="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                {/* pass the array from youtube api as a prop */}
                        <div className ="five wide column">
                            <VideoList 
                                onVideoSelect = {this.onVideoSelect} 
                                videos = {this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;