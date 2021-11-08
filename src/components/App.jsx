import React, {Component} from "react";
import axios from 'axios'
import MusicTable from "./musicTable/musicTable";
import FilterSearch from "./searchBar/searchBar";
import SongForm from "./songForm/songForm";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    }

    componentDidMount(){
        this.makeGetRequest();
    }

    makeGetRequest = async () =>{
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs:response.data
            });
        }
        catch (error) {
            console.log('Error in API call!');
        }
    }

    deleteSong = async (song) =>{
        try{
            await axios.post("http://127.0.0.1:8000/music/", song);
            this.makeGetRequest()
        }
        catch (error) {
            console.log('Error in Delete API call!');
        }
    }

    createSong = async (newSong) => {
        try{
            await axios.post("http://127.0.0.1:8000/music/", newSong);
            this.getMusic()
        }
        catch (error) {
            console.log('Error in Create API call!');
        }

    }
    
    getMusic = async () => {
        let response = await axios.get("http://127.0.0.1:8000/music/");
        this.setState({
            musicList: response.data
        });
     }

   filterSongs = (filtered) => {
       this.setState({
           songs:filtered
       })
   }

    render() {
        return (
            <div>
                 <FilterSearch search={this.state.songs} filterAction={this.filterSongs}/>
                 <MusicTable song={this.state.songs} deleteSong={this.deleteSong}/>
                 <SongForm createNewSong={this.createSong}/>
            </div>
        );
    }
}

export default App;
