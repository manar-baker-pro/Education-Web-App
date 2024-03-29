import { DOTS, usePagin } from "./usePagin";
interface FooterPage {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: Function;
}
export function FooterPagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: FooterPage) {
  const paginationRange = usePagin({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage <= 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li style={{ margin: "10px" }} key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            style={{
              margin: "10px",
              background: pageNumber === currentPage ? "#cb64f1" : "#663b92",
              padding: "4px 14px",
              color: "white",
              borderRadius:"10px",
            }}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
}

export default FooterPagination;
