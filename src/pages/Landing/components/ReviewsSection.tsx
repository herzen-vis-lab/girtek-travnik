import React from 'react';
import styles from './ReviewsSection.module.css';

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.reviewsTitle}>Отзывы</h2>
      <div className={styles.reviewsContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5a9be8ca935c69e04cac0f159ba23e214b93e4e29531c9047f9d3963a4f635?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Customer Reviews" className={styles.reviewsImage} />
        <button className={styles.nextReviewButton} aria-label="Next review">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5973b4971f01de57f1ab6b8c02a17e24141e287557b2e10b667819d9a7b00de9?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="" className={styles.nextReviewIcon} />
        </button>
      </div>
      <button className={styles.leaveReviewButton}>Оставить отзыв</button>
    </section>
  );
};

export default Reviews;