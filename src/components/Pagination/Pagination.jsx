import styles from './Pagination.module.css';

const Pagination = ({ currentPages, totalOfPages, loadingPage, loading }) => {
  const maxButtons = 5;

  let initPages = Math.max(1, currentPages - Math.floor(maxButtons / 2));
  let finalPages = initPages + maxButtons - 1;

  if (finalPages > totalOfPages) {
    finalPages = totalOfPages;
    initPages = Math.max(1, finalPages - maxButtons + 1);
  }

  const pagesToShow = [];
  for (let i = initPages; i <= finalPages; i++) {
    pagesToShow.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button 
        className={styles.btnNav} 
        disabled={currentPages === 1 || loading}
        onClick={() => loadingPage(currentPages - 1)}
      >
        ←
      </button>

      <div className={styles.numbers}>
        {pagesToShow.map((num) => (
          <button
            key={num}
            className={`${styles.btnNum} ${currentPages === num ? styles.active : ''}`}
            onClick={() => loadingPage(num)}
            disabled={loading}
          >
            {num}
          </button>
        ))}
      </div>

      <button 
        className={styles.btnNav} 
        disabled={currentPages === totalOfPages || loading}
        onClick={() => loadingPage(currentPages + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;