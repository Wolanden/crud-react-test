import React from 'react';
import { Song } from '../../models/Song';
import { Album } from '../../models/Album';
import './SongIndex.css'

interface Props {
    songs: Song[],
    albums: Album[],
    onDelete: (song: Song) => void;
    onEdit: (song: Song) => void;
}

const SongIndex: React.FC<Props> = (props) =>{

    const getAlbumNameById = (albumId?: number) =>{
        var album = props.albums.find(x => x.id === albumId);
        return album ? album.name : "";
    }

    const deleteAction = (song: Song) =>{
        return() => props.onDelete(song);
    }

    const editSong = (song: Song) =>{
        return() => props.onEdit(song);
    }

    return(
        <table className="songTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Interpret</th>
                    <th>Album</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {props.songs.map(song => {
                    return(
                        <tr key={song.id}>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{song.interpret}</td>
                            <td>{getAlbumNameById(song.albumId)}</td>
                            <td><button onClick={deleteAction(song)}>Delete</button></td>
                            <td><button onClick={editSong(song)}>Edit</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SongIndex