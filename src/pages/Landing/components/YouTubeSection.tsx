import React from 'react';
import styles from './YouTubeSection.module.css';

const YouTubeSection: React.FC = () => {
  return (
    <section className={styles.youtubeSection}>
      <h2 className={styles.youtubeTitle}>Youtube</h2>
      <div className={styles.youtubeContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/71405384af9227f7afc37dc8a0df3cd0654810071c460d6bf20454e2650a1efa?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="YouTube Video Thumbnail" className={styles.youtubeBackground} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ca13b4e11b9d9237c39e489592a0cfd091bb2e28301f3390a8a680fcad1943?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Play Button" className={styles.playButton} />
      </div>
    </section>
  );
};

export default YouTubeSection;