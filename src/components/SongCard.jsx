
import React from 'react';
import styles from './SongCard.module.css';
import { FaPlay } from 'react-icons/fa'; // Icono de Play

// 1. Recibimos los datos de la canción a través de "props"
const SongCard = ({ title, artist, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`Cover de ${title}`} />
        <button className={styles.playButton}>
          <FaPlay />
        </button>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.artist}>{artist}</p>
    </div>
  );
};

export default SongCard;