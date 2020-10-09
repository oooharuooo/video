import React from 'react';

class SearchBar extends React.Component {
    // setting term as empty string so that it can change by the event handler
    state = { term: "" };
 
    // list of evenHandler
    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // Call the prop from App.js and pass term to search
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className ="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className ="ui form">
                    <div className = "field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value = {this.state.term} 
                            onChange= {this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;