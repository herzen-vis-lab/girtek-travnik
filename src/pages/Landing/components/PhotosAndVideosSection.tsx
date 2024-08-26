import React from 'react';
import styles from './PhotosAndVideosSection.module.css';

import left_arrow from '/assets/icons/left white arrow.svg'
import right_arrow from '/assets/icons/right white arrow.svg'

import left_arrow_red from '/assets/icons/left red arrow.svg'
import right_arrow_red from '/assets/icons/right red arrow.svg'


import photo1 from '/assets/photo roll/1.jpg'
import photo2 from '/assets/photo roll/2.jpg'
import photo3 from '/assets/photo roll/3.jpg'
import photo4 from '/assets/photo roll/4.jpg'
import photo5 from '/assets/photo roll/5.jpg'
import photo6 from '/assets/photo roll/6.jpg'
import photo7 from '/assets/photo roll/7.jpg'
import photo8 from '/assets/photo roll/8.jpg'

import video1 from '/assets/video roll/video1.mp4'
import video2 from '/assets/video roll/video2.mp4'
import video3 from '/assets/video roll/video3.mp4'
import video4 from '/assets/video roll/video4.mp4'
import video5 from '/assets/video roll/video5.mp4'


const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8
  ]

const videos = [
    video1, video2, video3, video4, video5
]

const PhotosAndVideosSection: React.FC = () => {
    const [ photoIndex, setPhotoIndex ] = React.useState(0);
    const [ videoIndex, setVideoIndex ] = React.useState(0);

    const [hoveredLeftPhotoArrow, setHoveredLeftPhotoArrow] = React.useState(false);
    const [hoveredRightPhotoArrow, setHoveredRightPhotoArrow] = React.useState(false);
    const [hoveredLeftVideoArrow, setHoveredLeftVideoArrow] = React.useState(false);
    const [hoveredRightVideoArrow, setHoveredRightVideoArrow] = React.useState(false);

  return (
    <section className={styles.gallery}>
      <h2 className={styles.galleryTitle}>Фото</h2>
      <div className={styles.photoGalleryContent}>
        {photoIndex != 0 ? <button 
            className={styles.leftGalleryButton}
            onClick={() => setPhotoIndex(x => x - 1)}
            aria-label="Previous image"
            onMouseEnter={() => setHoveredLeftPhotoArrow(true)}
            onMouseLeave={() => setHoveredLeftPhotoArrow(false)}>
          <img src={hoveredLeftPhotoArrow ? left_arrow_red : left_arrow} alt="" className={styles.galleryButtonIcon} />
        </button> : <div/>}
        <img src={photos[photoIndex]} alt="" className={styles.galleryImage} />
        {photoIndex != photos.length - 1 ? <button 
            className={styles.rightGalleryButton}
            onClick={() => setPhotoIndex(x => x + 1)}
            aria-label="Next image"
            onMouseEnter={() => setHoveredRightPhotoArrow(true)}
            onMouseLeave={() => setHoveredRightPhotoArrow(false)}>
          <img src={hoveredRightPhotoArrow ? right_arrow_red : right_arrow} alt="" className={styles.galleryButtonIcon} />
        </button> : <div />}
      </div>

      <h2 className={styles.videoTitle}>Видео</h2>
      <div className={styles.videoGalleryContent}>
        {videoIndex != 0 ? <button 
            className={styles.leftGalleryButton}
            onClick={() => setVideoIndex(x => x - 1)}
            aria-label="Previous video"
            onMouseEnter={() => setHoveredLeftVideoArrow(true)}
            onMouseLeave={() => setHoveredLeftVideoArrow(false)}>
            <img src={hoveredLeftVideoArrow ? left_arrow_red : left_arrow} alt="" className={styles.galleryButtonIcon} />
        </button> : <div/>}
        <video src={videos[videoIndex]} className={styles.galleryImage} autoPlay loop muted playsInline/>
        {videoIndex != videos.length - 1 ? <button
            className={styles.rightGalleryButton}
            onClick={() => setVideoIndex(x => x + 1)}
            aria-label="Next video"
            onMouseEnter={() => setHoveredRightVideoArrow(true)}
            onMouseLeave={() => setHoveredRightVideoArrow(false)}>
            <img src={hoveredRightVideoArrow ? right_arrow_red : right_arrow} alt="" className={styles.galleryButtonIcon} />
        </button> : <div />}
      </div>
    </section>
  );
};

export default PhotosAndVideosSection;