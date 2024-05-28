import style from "./Pagination.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({ handlePage, current, total, children }) => {
  const maxButtonsToShow = 5;
  let startPage = Math.max(current - Math.floor(maxButtonsToShow / 2), 1);
  let endPage = startPage + maxButtonsToShow - 1;

  if (endPage > total) {
    endPage = total;
    startPage = Math.max(endPage - maxButtonsToShow + 1, 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className={style.pagination}>
        <div className={style.pagination_pages} >
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={current === page ? style.current : ""}
            >
              {page}
            </button>
          ))}
        </div>
      <div className={style.pagination_arrows}>
        <button
          onClick={() => handlePage(current - 1)}
          disabled={current === 1}
        >
          <ChevronLeft />
        </button>
        {children}
        <button
          onClick={() => handlePage(current + 1)}
          disabled={current === total || total === 0}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Pagination;
