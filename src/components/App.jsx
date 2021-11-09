import React, {Component} from "react";
import axios from 'axios'
import MusicTable from "./musicTable/musicTable";
import FilterSearch from "./searchBar/searchBar";
import SongForm from "./songForm/songForm";
import TitleBar from "./TitleBar/TitleBar";

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

    deleteSong = async (id) =>{
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            this.makeGetRequest()
        }
        catch (error) {
            console.log('Error in Delete API call!');
        }
    }

    addSong = async (newSong) => {
        try{
            let response = await axios.post(`http://127.0.0.1:8000/music/`, newSong);
            this.setState({
                song: response.data
            });
            this.makeGetRequest()
        }
        catch (error) {
            console.log('Error in Create API call!');
        }

    }

   filterSongs = (filtered) => {
       this.setState({
           songs:filtered
       })
   }

    render() {
        return (
            <div>
                <body>
                <TitleBar />
                 <FilterSearch search={this.state.songs} filterAction={this.filterSongs} refresh={this.makeGetRequest}/>
                 <MusicTable song={this.state.songs} deleteSong={this.deleteSong}/>
                 <SongForm addSong={this.addSong.bind(this)}/>
                 </body>
            </div>
        );
    }
}

export default App;
