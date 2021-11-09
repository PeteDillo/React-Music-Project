import React from "react";
import './musicTable.css'

const MusicTable = (props) => {
    return (
        <center>
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Delete Song</th>
                    </tr>
                </thead>
                <tbody>
                    {props.song.map((songs, index) => {
                        return (
                        <tr key={index}>
                            <td>{songs.title}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.release_date}</td>
                            <td>{songs.genre}</td>
                            <td>
                            <button className="DeleteButton"onClick={() => props.deleteSong(songs.id)}>
                                Delete
                            </button>  
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td><button className="refreshButton">Button</button></td>
                        <td><button className="refreshButton">Button</button></td>
                        <td><button className="refreshButton">Button</button></td>
                        <td><button className="refreshButton">Button</button></td>
                        <td><button className="refreshButton">Button</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </center>
    )
}

export default MusicTable;