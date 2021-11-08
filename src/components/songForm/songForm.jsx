import React, { Component } from 'react';


class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
         }
    }
    
    render() { 
        return ( 
        <div>
            <label>Title</label>
            <input name='title' type="text" onChange={this.handleChange} value={this.state.title}></input>
            <label>Artist</label>
            <input name='artist' type="text" onChange={this.handleChange} value={this.state.artist}></input>
            <label>Album</label>
            <input name='album' type="text" onChange={this.handleChange} value={this.state.album}></input>
            <label>Release Date</label>
            <input name='release_date' type="date" onChange={this.handleChange} value={this.state.release_date}></input>
            <label>Genre</label>
            <input name='genre' type="text" onChange={this.handleChange} value={this.state.genre}></input>
            <button type='submit' onClick={this.addSong}>Add Song</button>
        </div>
         );
    }
}
 
export default SongForm;