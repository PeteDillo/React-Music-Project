import React, { Component } from "react";
import './searchBar.css'

class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         searchWord:''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(song => {
            if (song.title.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.artist.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.album.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.genre.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            else{
                return false
            }
        });
        this.setState({
            searchWord:''
        })
        this.props.filterAction(results)
    };
    
    render () {
      return (
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search" name="searchWord" title="search" type="text" value={this.state.searchWord} onChange={this.handleChange} />
                    <button className="button1" type='submit' value="search">Submit</button>
                </form>
                <button className='button' onClick={this.props.refresh}>Refresh List</button>
            </div>
         </div>
      );
    }
}

  export default FilterSearch;