
import React, { useState } from 'react'; // 1. Importamos useState
import styles from './HomePage.module.css'; 
import SongCard from '../components/SongCard.jsx';


const mockSongs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', imageUrl: 'https://picsum.photos/seed/picsum1/300/300' },
  { id: 2, title: 'Smells Like Teen Spirit', artist: 'Nirvana', imageUrl: 'https://picsum.photos/seed/picsum2/300/300' },
  { id: 3, title: 'Billie Jean', artist: 'Michael Jackson', imageUrl: 'https://picsum.photos/seed/picsum3/300/300' },
  { id: 4, title: 'Stairway to Heaven', artist: 'Led Zeppelin', imageUrl: 'https://picsum.photos/seed/picsum4/300/300' },
  { id: 5, title: 'Like a Rolling Stone', artist: 'Bob Dylan', imageUrl: 'https://picsum.photos/seed/picsum5/300/300' },
  { id: 6, title: 'Shape of You', artist: 'Ed Sheeran', imageUrl: 'https://picsum.photos/seed/picsum6/300/300' },
];

const HomePage = () => {
  const [songs, setSongs] = useState(mockSongs);

  return (
    <div className={styles.homeContainer}>
      <h1>¡Buenas noches!</h1>

      {/* Aquí empieza la magia :D */}
      <div className={styles.songGrid}>
        {songs.map((song) => (
          <SongCard
            key={song.id} // key prop para React
            title={song.title}
            artist={song.artist}
            imageUrl={song.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;