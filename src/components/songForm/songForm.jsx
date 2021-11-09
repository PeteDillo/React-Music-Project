import React, { Component } from "react";
import "./songForm.css" 


class SongForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',

        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br/>
                    <input name='title' type="text" onChange={this.handleChange} value={this.state.title}></input><br/>
                    <label>Artist</label><br/>
                    <input name='artist' type="text" onChange={this.handleChange} value={this.state.artist}></input><br/>
                    <label>Album</label><br/>
                    <input name='album' type="text" onChange={this.handleChange} value={this.state.album}></input><br/>
                    <label>Release Date</label><br/>
                    <input name='release_date' type="datetime-local" onChange={this.handleChange} value={this.state.release_date}></input><br/>
                    <label>Genre</label><br/>
                    <input name='genre' type="text" onChange={this.handleChange} value={this.state.genre}></input><br/>
                    <button className="button1"type='submit' onClick={this.addSong}>Add Song</button>
                </form>
            </div>
        );
    }
}

export default SongForm