import React, { useState } from 'react'
import { Album } from '../../models/Album';
import { Song } from '../../models/Song';
import './SongForm.css'
import Dialogue from '../Dialogue';

interface Props {
    albums: Album[],
    onCreateSong: (newSong: Song) => void;
    toggleDialogue: () => void;
    openDialogue: boolean;
    song?: Song;
}

const SongForm: React.FC<Props> = (props) =>{

    const defaultSong: Song = {
        id: 0,
        name: "",
        interpret: "",
        albumId: undefined
    }
    const [song, setSong] = useState<Song>(props.song != undefined ? props.song : defaultSong);    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.onCreateSong(song);
        setSong(defaultSong);
        props.toggleDialogue();
        e.currentTarget.reset();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSong({...song, [e.currentTarget.name]: e.currentTarget.value});
    }
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setSong({...song, [e.currentTarget.name]: e.currentTarget.value});
    }

    return(
        <>
            <button onClick={props.toggleDialogue}>Add Song</button>
            <Dialogue open={props.openDialogue}>
                <form className="songForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={handleChange} 
                        name="name" 
                        value={song.name}
                    />

                    <label htmlFor="interpret">Interpret</label>
                    <input 
                        onChange={handleChange} 
                        name="interpret" 
                        value={song.interpret}
                    />

                    <label htmlFor="albumId">Album</label>
                    <select 
                        onChange={handleSelectChange} 
                        name="albumId"
                        value={song.albumId}
                    >
                        <option> - </option>
                        {props.albums.map(album =>{
                            return <option key={album.id} value={album.id}>{album.name}</option>
                        })}
                    </select>

                    <input type="submit" value="Save"/>
                    <button type="button" onClick={props.toggleDialogue}>Cancel</button>
                </form>
                
            </Dialogue>
        </>
    )
}

export default SongForm