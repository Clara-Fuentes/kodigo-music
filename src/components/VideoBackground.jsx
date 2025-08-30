
import React from 'react';
import videoSource from '../assets/background-video.mp4'; // Asegúrate de tener un video en esta ruta
import styles from './VideoBackground.module.css';

const VideoBackground = () => {
  return (
    <video 
      autoPlay // El video se reproduce automáticamente
      loop     // Se repite en un bucle infinito
      muted    // Obligatorio para que `autoPlay` funcione en la mayoría de navegadores
      playsInline // Necesario para que funcione en iOS
      className={styles.video}
    >
      <source src={videoSource} type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
  );
};

export default VideoBackground;