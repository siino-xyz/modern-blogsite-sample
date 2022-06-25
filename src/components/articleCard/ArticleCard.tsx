import * as styles from "./ArticleCard.css";

const ArticleCard = () => {
  return (
    <div className={styles.card}>
      <div>
        <p>category</p>
        <p>2022.06.20</p>
      </div>
      <h2>記事のタイトル</h2>
    </div>
  );
};

export default ArticleCard;
