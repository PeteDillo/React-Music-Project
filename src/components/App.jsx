import React, {Component} from "react";
import FilterSearch from "./SearchBar/searchBar";

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

   filterSongs = (filtered) => {
       this.setState({
           songs:filtered
       })
   }

    render() {
        return (
            <div>
                 <FilterSearch search={this.state.songs} filterAction={this.filterSongs}/>
            </div>
        );
    }
}

export default App;
