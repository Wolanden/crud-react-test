import React, { useState } from 'react';
import './App.css';
import SongIndex from './components/song/SongIndex';
import { Song } from './models/Song';
import { Album } from './models/Album';
import SongForm from './components/song/SongForm';
import Dialogue from './components/Dialogue';

const App: React.FC = () => {

  const [songs, setSongs] = useState<Song[]>([
      {id: 0, name: "Dunkelheit", interpret: "Burzum", albumId: 0},
      {id: 1, name: "Erblicket die Toechter des Firmaments", interpret: "Burzum", albumId: 0},
      {id: 2, name: "Gebrechlichkeit I", interpret: "Burzum", albumId: 0},
      {id: 3, name: "Shine on you crazy diamond", interpret: "Pink Floyd", albumId: 1},
      {id: 4, name: "Money", interpret: "Pink Floyd", albumId: 2},
      {id: 5, name: "Winters Gate Part 1", interpret: "Insomnium", albumId: 3}
    ]);

  const [albums, setAlbums] = useState<Album[]>([
      {id: 0, name: "Filosofem", interpret: "Burzum"},
      {id: 1, name: "Wish you were here", interpret: "Pink Floyd"},
      {id: 2, name: "Dark Side of the Moon", interpret: "Pink Floyd"},
      {id: 3, name: "Winters Gate", interpret: "Insomnium"},
    ]);

  const [editSong, setEditSong] = useState<Song>()

  const [openDialogue, setOpenDialogue] = useState<boolean>(false);
  
  const onSongDelete = (songDel: Song) =>{
    var newSongs: Song[] = [];
    songs.forEach(song =>{
      if (song !== songDel){
        newSongs.push(song);
      }
    });
    setSongs(newSongs);
  }

  const onCreateSong = (newSong: Song) =>{
    setSongs([...songs, {...newSong, id: getNewSongId()}]);
  }

  const onSongEdit = (song: Song) => {
    toggleDialogue();
    setEditSong(song);
  }

  const toggleDialogue = () =>{
    setOpenDialogue(!openDialogue);
  }

  const getNewSongId = () =>{
    var maxSongId = 0;

    songs.forEach(song =>{
      if (song.id > maxSongId){
        maxSongId = song.id;
      }
    })

    return maxSongId + 1;
  }

  return (
    <div className="App">
      <SongIndex 
        songs={songs}
        albums={albums}
        onDelete={onSongDelete}
        onEdit={onSongEdit}
      />

      <SongForm 
        albums={albums}
        onCreateSong={onCreateSong}
        song={editSong}
        toggleDialogue={toggleDialogue}
        openDialogue={openDialogue}
      />
    </div>
  );
}

export default App;
