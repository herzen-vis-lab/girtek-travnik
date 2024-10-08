import React from 'react';
import styles from './YouTubeSection.module.css';
import YouTube from 'react-youtube';

const YouTubeSection: React.FC = () => {
  return (
    <section className={styles.youtubeSection}>
      <h2 className={styles.youtubeTitle}>Youtube</h2>
      <div className={styles.youtubeContent}>
        {/* @ts-ignore */}
        <YouTube videoId={"QvWg71cAP-8"} className={styles.youtubeBackground2}/>

        {/* <iframe className={styles.youtubeBackground} src="https://www.youtube.com/embed/QvWg71cAP-8" title="Компания ГИРТЕК. Официальное видео."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </section>
  );
};

export default YouTubeSection;