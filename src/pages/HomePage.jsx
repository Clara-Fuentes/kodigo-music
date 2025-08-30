
import React, { useState } from 'react';
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

  // --- Inicio del Saludo ---
  const getGreeting = () => {
    const currentHour = new Date().getHours(); // Obtiene la hora actual (formato 0-23)

    if (currentHour < 12) {
      return 'Buenos días';
    } else if (currentHour < 19) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  };
  // --- Fin del Saludo ---//

  return (
    <div className={styles.homeContainer}>
      {/* mostrar el saludo dinámico */}
      <h1>¡{getGreeting()}!</h1>
      
      <div className={styles.songGrid}>
        {songs.map((song) => (
          <SongCard
            key={song.id}
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