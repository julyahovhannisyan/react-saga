// import { GridPageChangeParams } from "@mui/x-data-grid";

interface CustomPaginationProps {
    pagination: {
      page: number;
      pageCount: number;
    };
    onPageChange: (newPage: number) => void;
  }
  
  const CustomPagination = ({ pagination, onPageChange }: CustomPaginationProps) => {
    const { page, pageCount } = pagination;
  
    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
      onPageChange(newPage);
    };
  
    const renderPaginationItems = () => {
      const items = [];
  
      const ellipsisItem = (
        <button key="ellipsis" disabled>
          ...
        </button>
      );
  
      // Add first page
      items.push(
        <button
          key={1}
          onClick={(e) => handlePageChange(e, 1)}
          disabled={page === 1}
        >
          {"<"}
        </button>
      );
  
      // Add individual page numbers
      for (let i = 1; i <= pageCount; i++) {
        // Display only the first and last 3 pages, as well as the current page
        if (
          i === 1 ||
          i === page ||
          i === pageCount ||
          (i >= page - 1 && i <= page + 1)
        ) {
          items.push(
            <button
              key={i}
              onClick={(e) => handlePageChange(e, i)}
              disabled={i === page}
            >
              {i}
            </button>
          );
        }
  
        // Add ellipsis item after the first 3 pages
        if (i === 3 && pageCount > 5) {
          items.push(ellipsisItem);
        }
  
        // Add ellipsis item before the last 3 pages
        if (i === pageCount - 2 && pageCount > 5) {
          items.push(ellipsisItem);
        }
      }
  
      // Add last page
      items.push(
        <button
          key={pageCount}
          onClick={(e) => handlePageChange(e, pageCount)}
          disabled={page === pageCount}
        >
          {">"}
        </button>
      );
  
      return items;
    };
  
    return <div className="pagination">{renderPaginationItems()}</div>;
  };
  
  export default CustomPagination;